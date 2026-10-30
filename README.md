# ammarta-web

Personal portfolio monorepo for [www.ammarta.com](https://www.ammarta.com).

| App | Path | Deploy |
|-----|------|--------|
| Frontend (React / CRA) | `frontend/` | Vercel → `www.ammarta.com` |
| Backend (Flask) | `backend/` | Render → `ammarta-backend.onrender.com` |

The AI resume chatbot stays in a separate repo / Hugging Face Space:  
[AmmarTauqir/virtual_resume](https://huggingface.co/spaces/AmmarTauqir/virtual_resume).

## Local development

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env       # then fill in values
python src/app.py
```

API: `http://localhost:5000` (health: `/api/info`)

### Frontend

```bash
cd frontend
npm install
npm start
```

Site: `http://localhost:3000` — talks to `localhost:5000` automatically in development.

More detail: [frontend/LOCAL_SETUP.md](frontend/LOCAL_SETUP.md).

## Production deploy notes

### Vercel (frontend)

- Git repo: this monorepo
- **Root Directory:** `frontend`
- Build: `npm run build`
- Output: `build`
- Framework preset: Create React App

Config also lives in [`frontend/vercel.json`](frontend/vercel.json).

### Render (backend)

- Git repo: this monorepo
- **Root Directory:** `backend`
- Build: `pip install -r requirements.txt`
- Start: `gunicorn --chdir src app:app -c gunicorn_config.py`

Blueprint: [`render.yaml`](render.yaml). Keep the existing service URL `ammarta-backend.onrender.com` so the frontend API base URL does not need to change.

Required env vars on Render: `EMAIL_USER`, `EMAIL_PASS`, and optionally `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, `STRAVA_REFRESH_TOKEN`.

## Layout

```text
ammarta-web/
  frontend/     # Vercel
  backend/      # Render
  render.yaml
  README.md
```
