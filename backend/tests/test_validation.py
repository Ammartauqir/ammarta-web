import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "src"))

from validation import validate_contact, validate_subscribe, escape_fields


def test_validate_contact_requires_fields():
    try:
        validate_contact({"name": "A", "email": "a@b.com", "subject": "Hi"})
        assert False, "expected ValueError"
    except ValueError as exc:
        assert "message" in str(exc)


def test_validate_contact_accepts_valid_payload():
    result = validate_contact(
        {
            "name": "Ammar",
            "email": "ammar@example.com",
            "subject": "Hello",
            "message": "Looking to connect",
        }
    )
    assert result["email"] == "ammar@example.com"


def test_validate_subscribe_rejects_bad_email():
    try:
        validate_subscribe({"email": "not-an-email"})
        assert False, "expected ValueError"
    except ValueError as exc:
        assert "Invalid email" in str(exc)


def test_escape_fields_escapes_html():
    escaped = escape_fields({"message": "<script>alert(1)</script>"})
    assert "<script>" not in escaped["message"]
    assert "&lt;script&gt;" in escaped["message"]
