# Deploy cutover

## Current state (done)

- Canonical repo: [Ammartauqir/ammarta-web](https://github.com/Ammartauqir/ammarta-web)
- Vercel still builds [ammarta-frontend](https://github.com/Ammartauqir/ammarta-frontend) (deploy mirror of `frontend/`)
- Render still builds [ammarta-backend](https://github.com/Ammartauqir/ammarta-backend) (deploy mirror of `backend/`)
- Chatbot unchanged on Hugging Face

Sync mirrors after monorepo changes:

```bash
./scripts/sync-deploy-mirrors.sh
```

## Optional: point hosts at the monorepo directly

When you have dashboard access (no CLI token was available in automation):

### Vercel

1. Project → Settings → Git → connect `Ammartauqir/ammarta-web`
2. Root Directory: `frontend`
3. Build `npm run build`, output `build`
4. Keep domain `www.ammarta.com`
5. Redeploy and verify

### Render

1. Service → Settings → connect `Ammartauqir/ammarta-web`
2. Root Directory: `backend`
3. Build: `pip install -r requirements.txt`
4. Start: `gunicorn --chdir src app:app -c gunicorn_config.py`
5. Keep URL `ammarta-backend.onrender.com`
6. Confirm `/api/info`

After that, you can archive the mirror repos and stop running the sync script.
