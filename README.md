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

API: `http://localhost:5001` (health: `/api/info`; macOS often blocks 5000)

### Frontend

```bash
cd frontend
npm install
npm start
```

Site: `http://localhost:3000` — talks to `localhost:5000` automatically in development.

More detail: [frontend/LOCAL_SETUP.md](frontend/LOCAL_SETUP.md).

## Production

- **Frontend:** GitHub Actions deploys `frontend/` to Vercel on push to `main`
- **Backend:** Render auto-deploys `backend/` from this repo (see [CUTOVER.md](CUTOVER.md) / [render.yaml](render.yaml))

Required Render env vars: `EMAIL_USER`, `EMAIL_PASS`, and optionally `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, `STRAVA_REFRESH_TOKEN`.

## Layout

```text
ammarta-web/
  frontend/     # Vercel
  backend/      # Render
  .github/workflows/deploy-frontend.yml
  render.yaml
  README.md
```
