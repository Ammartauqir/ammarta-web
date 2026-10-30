# Deploy cutover

## Current state

- Canonical repo: [Ammartauqir/ammarta-web](https://github.com/Ammartauqir/ammarta-web) (public)
- Vercel project `ammarta-frontend`: Root Directory `frontend`, Output `build`
- Production deploy from monorepo succeeded → [www.ammarta.com](https://www.ammarta.com)
- Render still builds [ammarta-backend](https://github.com/Ammartauqir/ammarta-backend) (deploy mirror of `backend/`)
- Chatbot unchanged on Hugging Face

## Vercel auto-deploy

Native `vercel git connect` fails (Vercel’s GitHub integration returns 401).  
Auto-deploy is handled by GitHub Actions instead:

- Workflow: [`.github/workflows/deploy-frontend.yml`](.github/workflows/deploy-frontend.yml)
- Secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- Triggers on pushes to `main` that touch `frontend/**` (or manual `workflow_dispatch`)

Optional later: reconnect GitHub under Vercel → Account Settings → Login Connections, then `vercel git connect`.

Backend mirror sync (Render) still works via:

```bash
./scripts/sync-deploy-mirrors.sh
```

## Render (optional Root Directory cutover)

1. Service → Settings → connect `Ammartauqir/ammarta-web`
2. Root Directory: `backend`
3. Build: `pip install -r requirements.txt`
4. Start: `gunicorn --chdir src app:app -c gunicorn_config.py`
5. Keep URL `ammarta-backend.onrender.com`
6. Confirm `/api/info`

After both hosts point at the monorepo, archive the mirror repos and stop the sync script.
