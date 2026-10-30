import json
import os
from datetime import datetime, timezone
from threading import Lock

_lock = Lock()
DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "data")
SUBSCRIBERS_FILE = os.path.join(DATA_DIR, "subscribers.json")


def _ensure_store():
    os.makedirs(DATA_DIR, exist_ok=True)
    if not os.path.exists(SUBSCRIBERS_FILE):
        with open(SUBSCRIBERS_FILE, "w", encoding="utf-8") as f:
            json.dump({"subscribers": []}, f)


def add_subscriber(email):
    """Persist interest-list email. Returns True if newly added."""
    _ensure_store()
    with _lock:
        with open(SUBSCRIBERS_FILE, "r", encoding="utf-8") as f:
            store = json.load(f)

        existing = {item["email"].lower() for item in store["subscribers"]}
        if email.lower() in existing:
            return False

        store["subscribers"].append(
            {
                "email": email,
                "subscribed_at": datetime.now(timezone.utc).isoformat(),
            }
        )
        with open(SUBSCRIBERS_FILE, "w", encoding="utf-8") as f:
            json.dump(store, f, indent=2)
        return True
