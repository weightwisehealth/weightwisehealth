#!/usr/bin/env python3
# Read the file
with open('src/app/[locale]/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find style tag start and end
style_start = None
style_end = None

for i, line in enumerate(lines):
    if '<style>{`' in line:
        style_start = i
    if style_start is not None and '`}</style>' in line:
        style_end = i
        break

if style_start is not None and style_end is not None:
    print(f Found style tag:")
    print(f"   Start: line {style_start + 1}")
    print(f"   End: line {style_end + 1}")
    print(f"   Total lines to remove: {style_end - style_start + 1}")
    
    # Remove the style tag
    new_lines = lines[:style_start] + lines[style_end + 1:]
    
    # Write back
    with open('src/app/[locale]/page.tsx', 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print(f\n Style tag REMOVED successfully!")
    print(f"   New file size: {len(new_lines)} lines")
else:
     Could not find style tag")print("
