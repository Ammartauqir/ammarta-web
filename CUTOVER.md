# Deploy cutover

## Current state

| Piece | Source | Host |
|-------|--------|------|
| Frontend | `ammarta-web` / `frontend/` | Vercel via GitHub Actions |
| Backend | `ammarta-web` / `backend/` | Render (`ammarta-backend.onrender.com`) |
| Chatbot | `ammarta-chatbot` (separate) | Hugging Face Space |

Legacy repos `ammarta-frontend` and `ammarta-backend` are **archived**.

## Frontend deploys

GitHub Actions: [`.github/workflows/deploy-frontend.yml`](.github/workflows/deploy-frontend.yml)  
Triggers on pushes to `main` that touch `frontend/**`.

## Backend deploys

Render service auto-deploys from this repo:

- Root Directory: `backend`
- Branch: `main`
- Build: `pip install -r requirements.txt`
- Start: `gunicorn --chdir src app:app -c gunicorn_config.py`
