#!/bin/bash
# Blocks writes to sensitive/generated directories and files.

PROTECTED_PATTERNS=(
  '\.env($|\.)'
  '/secrets/'
  '/dist/'
  '/node_modules/'
  '/\.git/'
  '/build/'
  '/\.nuxt/'
  '/\.output/'
  '/\.nitro/'
  '/\.cache/'
  '/coverage/'
)

INPUT=$(cat)

TOOL_NAME=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    print(json.load(sys.stdin).get('tool_name', ''))
except:
    print('')
" 2>/dev/null)

FILE_PATH=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    ti = d.get('tool_input', {})
    print(ti.get('file_path', ''))
except:
    print('')
" 2>/dev/null)

if [[ -z "$FILE_PATH" ]]; then exit 0; fi

for PATTERN in "${PROTECTED_PATTERNS[@]}"; do
  if echo "$FILE_PATH" | grep -qE "$PATTERN"; then
    echo "" >&2
    echo "🚫 BLOCKED — Protected path: $FILE_PATH" >&2
    echo "   Matched pattern: $PATTERN" >&2
    echo "   This path is read-only or generated. Edit the source instead." >&2
    echo "" >&2
    exit 2
  fi
done

exit 0
