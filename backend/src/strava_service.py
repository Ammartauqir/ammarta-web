import json
import os
import requests
import logging
from datetime import datetime, timedelta
from threading import Lock
from dotenv import load_dotenv

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

STRAVA_CLIENT_ID = os.environ.get("STRAVA_CLIENT_ID")
STRAVA_CLIENT_SECRET = os.environ.get("STRAVA_CLIENT_SECRET")
STRAVA_REFRESH_TOKEN = os.environ.get("STRAVA_REFRESH_TOKEN")
REQUEST_TIMEOUT = 15
CACHE_TTL_SECONDS = 21600
CACHE_DIR = os.path.join(os.path.dirname(__file__), "..", "data")
CACHE_FILE = os.path.join(CACHE_DIR, "strava_cache.json")
PUBLIC_FIELDS = (
    "id",
    "name",
    "type",
    "distance",
    "moving_time",
    "elapsed_time",
    "total_elevation_gain",
    "start_date",
    "average_speed",
    "max_speed",
)

_lock = Lock()

logger.info("Environment variables status:")
logger.info(f"STRAVA_CLIENT_ID present: {bool(STRAVA_CLIENT_ID)}")
logger.info(f"STRAVA_CLIENT_SECRET present: {bool(STRAVA_CLIENT_SECRET)}")
logger.info(f"STRAVA_REFRESH_TOKEN present: {bool(STRAVA_REFRESH_TOKEN)}")


def _read_disk_cache():
    if not os.path.exists(CACHE_FILE):
        return None
    with open(CACHE_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def _write_disk_cache(activities):
    os.makedirs(CACHE_DIR, exist_ok=True)
    payload = {
        "last_updated": datetime.utcnow().isoformat() + "Z",
        "data": activities,
    }
    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(payload, f)


def get_strava_access_token():
    if not all([STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN]):
        missing = [
            name
            for name, value in [
                ("STRAVA_CLIENT_ID", STRAVA_CLIENT_ID),
                ("STRAVA_CLIENT_SECRET", STRAVA_CLIENT_SECRET),
                ("STRAVA_REFRESH_TOKEN", STRAVA_REFRESH_TOKEN),
            ]
            if not value
        ]
        raise ValueError(f"Missing required environment variables: {', '.join(missing)}")

    response = requests.post(
        "https://www.strava.com/oauth/token",
        data={
            "client_id": STRAVA_CLIENT_ID,
            "client_secret": STRAVA_CLIENT_SECRET,
            "refresh_token": STRAVA_REFRESH_TOKEN,
            "grant_type": "refresh_token",
        },
        timeout=REQUEST_TIMEOUT,
    )
    response.raise_for_status()
    data = response.json()
    if "access_token" not in data:
        raise KeyError("access_token not found in Strava API response")
    return data["access_token"]


def _public_activity(activity):
    return {field: activity.get(field) for field in PUBLIC_FIELDS}


def fetch_strava_activities():
    access_token = get_strava_access_token()
    after = int((datetime.now() - timedelta(days=90)).timestamp())
    headers = {"Authorization": f"Bearer {access_token}"}
    page = 1
    processed = []

    while page <= 5:
        response = requests.get(
            "https://www.strava.com/api/v3/athlete/activities",
            headers=headers,
            params={"after": after, "per_page": 100, "page": page},
            timeout=REQUEST_TIMEOUT,
        )
        response.raise_for_status()
        batch = response.json()
        if not batch:
            break
        processed.extend(_public_activity(item) for item in batch)
        if len(batch) < 100:
            break
        page += 1

    return processed


def get_cached_activities():
    with _lock:
        cached = _read_disk_cache()
        fresh = False
        if cached and cached.get("last_updated"):
            try:
                last = datetime.fromisoformat(cached["last_updated"].replace("Z", ""))
                fresh = (datetime.utcnow() - last).total_seconds() <= CACHE_TTL_SECONDS
            except ValueError:
                fresh = False

        if fresh:
            return cached["data"]

        try:
            activities = fetch_strava_activities()
            _write_disk_cache(activities)
            return activities
        except Exception as e:
            logger.error(f"Strava refresh failed: {e}")
            if cached and cached.get("data") is not None:
                logger.warning("Serving stale Strava cache after refresh failure")
                return cached["data"]
            raise
