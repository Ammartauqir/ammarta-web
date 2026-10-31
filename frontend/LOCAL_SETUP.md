# Local Development Setup

Monorepo layout: run backend from `backend/`, frontend from `frontend/`.

## Prerequisites

- Node.js 22.x (or 18+)
- Python 3.8+
- Git

## 1. Clone

```bash
git clone git@github.com:Ammartauqir/ammarta-web.git
cd ammarta-web
```

## 2. Backend (Flask)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
```

Fill `.env` (`EMAIL_USER`, `EMAIL_PASS`).

```bash
python src/app.py
```

API: `http://localhost:5001` — health: `/api/info`  
(macOS often occupies port 5000 via AirPlay Receiver.)

## 3. Frontend (React)

New terminal:

```bash
cd frontend
npm install
npm start
```

Site: `http://localhost:3000` — uses `http://localhost:5000` automatically in development.

## Verify

1. `http://localhost:5001/api/info` returns a JSON message
2. Frontend loads on port 3000
3. Contact / subscribe / sandbox talk to the local API

## Production

- Frontend → Vercel (Root Directory `frontend`) → www.ammarta.com
- Backend → Render (Root Directory `backend`) → ammarta-backend.onrender.com

The Flask API lives only under `backend/`. Do not add a second API server inside `frontend/`.
