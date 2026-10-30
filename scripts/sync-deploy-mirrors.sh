#!/usr/bin/env bash
# Push monorepo frontend/ and backend/ to the existing Vercel/Render GitHub repos.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
FRONTEND_REMOTE="${FRONTEND_REMOTE:-git@github.com:Ammartauqir/ammarta-frontend.git}"
BACKEND_REMOTE="${BACKEND_REMOTE:-git@github.com:Ammartauqir/ammarta-backend.git}"

sync_dir() {
  local src="$1"
  local remote="$2"
  local name="$3"
  local tmp
  tmp="$(mktemp -d)"
  git clone "$remote" "$tmp"
  find "$tmp" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
  rsync -a --exclude '.git' --exclude 'venv' --exclude 'node_modules' "$src"/ "$tmp"/
  (
    cd "$tmp"
    git add -A
    if git diff --cached --quiet; then
      echo "$name: no changes"
    else
      git commit -m "Sync from ammarta-web monorepo ${name}/"
      git push origin HEAD
      echo "$name: pushed"
    fi
  )
  rm -rf "$tmp"
}

sync_dir "$ROOT/frontend" "$FRONTEND_REMOTE" frontend
sync_dir "$ROOT/backend" "$BACKEND_REMOTE" backend
