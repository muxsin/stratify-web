#!/bin/bash
# After editing a source file, spawns a Claude session to check and update docs/.

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

# Skip shared/styles and node_modules paths
if echo "$FILE_PATH" | grep -qE '(node_modules|\.nuxt|\.output|dist|build)/'; then exit 0; fi

# Read a preview of the file for context
FILE_PREVIEW=$(head -60 "$FILE_PATH" 2>/dev/null || echo "(could not read file)")

DOCS_LIST=$(ls docs/*.md 2>/dev/null | tr '\n' ' ')

(claude --print -p "A source file was just modified in a Nuxt 4 + FSD project:

File: $FILE_PATH

Content preview (first 60 lines):
$FILE_PREVIEW

Available docs: $DOCS_LIST (plus CLAUDE.md at root)

Your task:
1. Determine if this change introduces something new that should be documented — new routing pattern, new component convention, new styling rule, new architectural decision, new storage key, new layer rule, etc.
2. If yes, update the most relevant existing doc file. If the topic doesn't fit any existing doc, create a new .md file in docs/.
3. If no documentation change is needed (minor edits, small fixes, no new patterns), do nothing and exit.

Be conservative. Only update docs when the change genuinely adds something worth documenting for future developers." 2>/dev/null) &

exit 0
