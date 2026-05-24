#!/usr/bin/env bash
set -euo pipefail

REPO="$HOME/Projects/Container/Bergamo"
DOWNLOADS="$HOME/Downloads"
PATTERN="Bergamo*.zip"

CLEAN=0
if [[ "${1:-}" == "--clean" ]]; then CLEAN=1; shift; fi
MSG="${1:-update from web export}"

ZIP=$(ls -1t "$DOWNLOADS"/$PATTERN 2>/dev/null | head -1 || true)
if [[ -z "$ZIP" ]]; then
  echo "Keine ZIP in $DOWNLOADS"
  exit 1
fi
echo "ZIP: $ZIP"

cd "$REPO"
if [[ "$CLEAN" -eq 1 ]]; then
  echo "clean: leere $REPO"
  find . -mindepth 1 -maxdepth 1 ! -name '.git' ! -name 'push.sh' -exec rm -rf {} +
else
  echo "drueberkopieren (kein --clean)"
fi

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
unzip -q -o "$ZIP" -d "$TMP"
# push.sh aus dem ZIP NICHT übernehmen (falls doch mal drin)
rm -f "$TMP/push.sh"
cp -rT "$TMP" "$REPO"

git add -A
if git diff --cached --quiet; then
  echo "nichts zu committen"
  exit 0
fi
git commit -m "$MSG"
git push
echo "fertig"
