#!/bin/bash
# Blocks all git write operations — run them manually instead.

INPUT=$(cat)

TOOL_NAME=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    print(json.load(sys.stdin).get('tool_name', ''))
except:
    print('')
" 2>/dev/null)

if [[ "$TOOL_NAME" != "Bash" ]]; then exit 0; fi

COMMAND=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    d = json.load(sys.stdin)
    print(d.get('tool_input', {}).get('command', ''))
except:
    print('')
" 2>/dev/null)

if [[ -z "$COMMAND" ]]; then exit 0; fi

# Match any git write/mutating subcommand
GIT_WRITE_PATTERN='^\s*git\s+(add|commit|push|pull|fetch|reset|rebase|merge|branch|tag|stash|clean|restore|checkout|cherry-pick|am|apply|rm|mv|bisect|gc|prune|reflog\s+delete|remote\s+(add|remove|rename|set-url))'

if echo "$COMMAND" | grep -qE "$GIT_WRITE_PATTERN"; then
  echo "" >&2
  echo "🚫 BLOCKED — Git operation requires manual approval." >&2
  echo "   Command: $COMMAND" >&2
  echo "   Run this yourself in the terminal if you want to proceed." >&2
  echo "" >&2
  exit 2
fi

exit 0
