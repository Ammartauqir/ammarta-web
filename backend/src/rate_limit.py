import time
from collections import defaultdict, deque
from threading import Lock

_lock = Lock()
_hits = defaultdict(deque)


def is_rate_limited(key, limit=10, window_seconds=60):
    now = time.monotonic()
    with _lock:
        bucket = _hits[key]
        while bucket and bucket[0] <= now - window_seconds:
            bucket.popleft()
        if len(bucket) >= limit:
            return True
        bucket.append(now)
        return False
