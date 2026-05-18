#!/usr/bin/env bash
# push.sh — Bergamo ZIP → Repo → GitHub
#
# Aufruf:
#   ./push.sh "commit message"        # ZIP-Inhalt OBEN drauf (sicher, default)
#   ./push.sh --clean "msg"           # Repo erst leeren (nur bei vollem Projekt-ZIP)
#   ./push.sh                         # default-message

set -euo pipefail

REPO="/home/lemmerli/Bergamo"
DOWNLOADS="/mnt/c/Users/Leandro/Downloads"
PATTERN="Bergamo*.zip"

# --clean flag parsen
CLEAN=0
if [[ "${1:-}" == "--clean" ]]; then
  CLEAN=1
  shift
fi
MSG="${1:-update from web export}"

# 1. neueste ZIP finden
ZIP=$(ls -1t "$DOWNLOADS"/$PATTERN 2>/dev/null | head -1 || true)
[[ -z "$ZIP" ]] && { echo "❌ Keine ZIP gefunden in $DOWNLOADS"; exit 1; }
echo "📦 ZIP: $ZIP"

cd "$REPO"

# 2. optional: Repo leeren (nur bei --clean)
if [[ "$CLEAN" -eq 1 ]]; then
  echo "🧹 --clean: lösche alles außer .git …"
  find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
else
  echo "ℹ️  drüberkopieren (kein --clean) — fehlende Dateien bleiben erhalten"
fi

# 3. ZIP in tmp entpacken und rüber
TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT
unzip -q -o "$ZIP" -d "$TMP"
cp -rT "$TMP" "$REPO"

# 4. committen + pushen
git add -A
if git diff --cached --quiet; then
  echo "ℹ️  keine Änderungen — nichts zu committen"
  exit 0
fi
git commit -m "$MSG"
git push
echo "✅ fertig"
