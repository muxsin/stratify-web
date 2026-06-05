#!/bin/bash
# After editing a source file, spawns a detached Claude session to check and update docs/.

INPUT=$(cat)

FILE_PATH=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('tool_input', {}).get('file_path', ''))
except:
    print('')
" 2>/dev/null)

if [[ -z "$FILE_PATH" ]]; then exit 0; fi

# Skip doc files themselves to avoid loops
if echo "$FILE_PATH" | grep -qE '(^|/)(docs/.*\.md$|CLAUDE\.md$)'; then exit 0; fi

# Only trigger for source file types that likely affect documentation
if ! echo "$FILE_PATH" | grep -qE '\.(vue|ts|js|scss|css|json)$'; then exit 0; fi

# Skip generated / vendor paths
if echo "$FILE_PATH" | grep -qE '(node_modules|\.nuxt|\.output|dist|build)/'; then exit 0; fi

PROJECT_ROOT=$(cd "$(dirname "$0")/../.." && pwd)
LOG_DIR="$PROJECT_ROOT/.claude/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/doc-updater.log"

FILE_PREVIEW=$(head -60 "$FILE_PATH" 2>/dev/null || echo "(could not read file)")
DOCS_LIST=$(ls "$PROJECT_ROOT"/docs/*.md 2>/dev/null | xargs -n1 basename | tr '\n' ' ')

# Build the prompt safely via a temp file (avoids shell-injection from file contents)
PROMPT_FILE=$(mktemp -t doc-updater-prompt.XXXXXX)
{
  echo "A source file was just modified in a Nuxt 4 + FSD project."
  echo
  echo "File: $FILE_PATH"
  echo
  echo "Content preview (first 60 lines):"
  echo "----"
  echo "$FILE_PREVIEW"
  echo "----"
  echo
  echo "Available docs: $DOCS_LIST (plus CLAUDE.md at root)"
  echo
  echo "Your task:"
  echo "1. Determine if this change introduces something new that should be documented — new routing pattern, new component convention, new styling rule, new architectural decision, new storage key, new layer rule, etc."
  echo "2. If yes, update the most relevant existing doc file. If the topic doesn't fit any existing doc, create a new .md file in docs/."
  echo "3. If no documentation change is needed (minor edits, small fixes, no new patterns), do nothing and exit."
  echo
  echo "Be conservative. Only update docs when the change genuinely adds something worth documenting for future developers."
} > "$PROMPT_FILE"

# Detach fully so the hook can return immediately without killing the child.
# Double-fork ( ( ... ) & ) & orphans the inner process to init, and nohup
# ignores SIGHUP. macOS doesn't ship `setsid`, so we rely on these two.
(
  (
    cd "$PROJECT_ROOT" || exit 0
    {
      echo "=== $(date '+%Y-%m-%d %H:%M:%S') doc-updater: $FILE_PATH ==="
      nohup claude -p \
        --permission-mode acceptEdits \
        --add-dir "$PROJECT_ROOT/docs" \
        < "$PROMPT_FILE"
      echo "=== exit=$? ==="
      rm -f "$PROMPT_FILE"
    } >> "$LOG_FILE" 2>&1
  ) &
) &
disown 2>/dev/null || true

exit 0
