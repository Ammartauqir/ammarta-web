# Portfolio Backend

Flask API for the portfolio site: contact form, newsletter subscribe, and Strava activities.

Deployed on Render as `ammarta-backend.onrender.com` (monorepo Root Directory: `backend`).

## Local setup

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python src/app.py
```

## Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/info` | Health check |
| POST | `/api/contact` | Contact form |
| POST | `/api/subscribe` | Neuron Notes subscribe |
| GET | `/api/strava/activities` | Cached Strava activities |

## Env vars

See `.env.example`. Production uses `EMAIL_PASS` (Gmail app password).
