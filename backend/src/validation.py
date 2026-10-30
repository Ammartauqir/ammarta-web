import re
from html import escape

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")

CONTACT_LIMITS = {
    "name": 100,
    "email": 254,
    "subject": 200,
    "message": 5000,
}
SUBSCRIBE_EMAIL_MAX = 254


def _as_string(value, field):
    if not isinstance(value, str):
        raise ValueError(f"{field} must be a string")
    return value.strip()


def validate_email(email):
    email = _as_string(email, "email")
    if not email:
        raise ValueError("Email is required")
    if len(email) > SUBSCRIBE_EMAIL_MAX:
        raise ValueError("Email is too long")
    if not EMAIL_RE.match(email):
        raise ValueError("Invalid email format")
    return email


def validate_contact(data):
    if not isinstance(data, dict):
        raise ValueError("Request body must be a JSON object")

    result = {}
    for field, max_len in CONTACT_LIMITS.items():
        value = _as_string(data.get(field, ""), field)
        if not value:
            raise ValueError(f"{field} is required")
        if len(value) > max_len:
            raise ValueError(f"{field} is too long")
        result[field] = value

    result["email"] = validate_email(result["email"])
    return result


def validate_subscribe(data):
    if not isinstance(data, dict):
        raise ValueError("Request body must be a JSON object")
    return {"email": validate_email(data.get("email", ""))}


def escape_fields(fields):
    return {key: escape(value) for key, value in fields.items()}
