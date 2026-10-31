from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from flask_mail import Mail, Message
from dotenv import load_dotenv
from datetime import datetime
from validation import validate_contact, validate_subscribe, escape_fields
from rate_limit import is_rate_limited
from subscribers import add_subscriber
import logging

load_dotenv()

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 32 * 1024

CORS(
    app,
    resources={
        r"/api/*": {
            "origins": [
                "http://localhost:3000",
                "http://127.0.0.1:3000",
                "https://www.ammarta.com",
                "https://ammarta.com",
                "https://ammarta-frontend.vercel.app",
            ]
        }
    },
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = os.getenv("EMAIL_USER")
app.config["MAIL_PASSWORD"] = os.getenv("EMAIL_PASS")

mail = Mail(app)


@app.route("/api/info")
def get_info():
    return jsonify({"message": "Hello, World! from Flask backend"})


@app.route("/api/subscribe", methods=["POST"])
def subscribe():
    client = request.headers.get("X-Forwarded-For", request.remote_addr)
    if is_rate_limited(f"subscribe:{client}", limit=5, window_seconds=60):
        return jsonify({"message": "Too many requests. Please try again later."}), 429

    data = request.get_json(silent=True)
    try:
        fields = validate_subscribe(data)
    except ValueError as e:
        return jsonify({"message": str(e)}), 400

    email = fields["email"]
    is_new = add_subscriber(email)
    safe = escape_fields({"email": email})

    try:
        msg = Message(
            "Neuron Notes interest list signup",
            sender=os.getenv("EMAIL_USER"),
            recipients=[os.getenv("EMAIL_USER")],
        )
        status = "new" if is_new else "already on list"
        msg.html = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #18181b;">Interest list signup ({status})</h2>
            <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #18181b;"><strong>Email:</strong> {safe['email']}</p>
                <p style="margin: 10px 0 0 0; color: #18181b;"><strong>Time:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
            </div>
        </div>
        """
        mail.send(msg)
    except Exception as e:
        logger.error(f"Error notifying subscribe (interest list still saved): {e}")

    return jsonify({"message": "Subscription successful", "new": is_new}), 200


@app.route("/api/contact", methods=["POST"])
def contact():
    client = request.headers.get("X-Forwarded-For", request.remote_addr)
    if is_rate_limited(f"contact:{client}", limit=5, window_seconds=60):
        return jsonify({"message": "Too many requests. Please try again later."}), 429

    data = request.get_json(silent=True)
    try:
        fields = validate_contact(data)
    except ValueError as e:
        return jsonify({"message": str(e)}), 400

    safe = escape_fields(fields)

    try:
        msg = Message(
            subject=f"AmmarTa Contact Form: {safe['subject']}",
            sender=app.config["MAIL_USERNAME"],
            recipients=["ammar.tauqir2@gmail.com"],
            reply_to=fields["email"],
        )
        msg.html = f"""
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {safe['name']}</p>
            <p><strong>Email:</strong> {safe['email']}</p>
            <p><strong>Subject:</strong> {safe['subject']}</p>
            <p><strong>Message:</strong></p>
            <p>{safe['message']}</p>
        """
        mail.send(msg)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        logger.error(f"Error sending email: {e}")
        return jsonify({"message": "Failed to send email"}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    app.run(host="0.0.0.0", port=port)
