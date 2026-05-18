#!/usr/bin/env bash
set -euo pipefail

REPO="/home/lemmerli/Bergamo"
DOWNLOADS="/mnt/c/Users/Leandro/Downloads"
PATTERN="Bergamo*.zip"

CLEAN=0
if [[ "${1:-}" == "--clean" ]]; then CLEAN=1; shift; fi
MSG="${1:-update from web export}"

ZIP=$(ls -1t "$DOWNLOADS"/$PATTERN 2>/dev/null | head -1 || true)
[[ -z "$ZIP" ]] && { echo "❌ Keine ZIP in $DOWNLOADS"; exit 1; }
echo "📦 $ZIP"

cd "$REPO"
if [[ "$CLEAN" -eq 1 ]]; then
  echo "🧹 --clean: lösche alles außer .git …"
  find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
else
  echo "ℹ️ drüberkopieren — fehlende Dateien bleiben"
fi

TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT
unzip -q -o "$ZIP" -d "$TMP"
cp -rT "$TMP" "$REPO"

git add -A
git diff --cached --quiet && { echo "ℹ️ nichts neues"; exit 0; }
git commit -m "$MSG"
git push
echo "✅ fertig"
