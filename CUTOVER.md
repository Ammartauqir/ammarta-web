# Deploy cutover

## Current state

- Canonical repo: [Ammartauqir/ammarta-web](https://github.com/Ammartauqir/ammarta-web) (public)
- Vercel project `ammarta-frontend`: Root Directory `frontend`, Output `build`
- Production deploy from monorepo succeeded → [www.ammarta.com](https://www.ammarta.com)
- Render still builds [ammarta-backend](https://github.com/Ammartauqir/ammarta-backend) (deploy mirror of `backend/`)
- Chatbot unchanged on Hugging Face

## Vercel auto-deploy (one manual step left)

Git connect failed because the Vercel GitHub App does not have access to `ammarta-web` yet.

1. GitHub → Settings → Applications → **Vercel** → Repository access → add `ammarta-web`
2. Then run:

```bash
vercel git connect https://github.com/Ammartauqir/ammarta-web.git --yes --project ammarta-frontend
```

Until then, ship frontend with:

```bash
vercel deploy --prod
```

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
