from pathlib import Path

ROOT = Path(__file__).resolve().parent
SCRIPT = '<script src="seo.js" defer></script>'
EXCLUDED = {'.git', 'node_modules'}

html_files = [
    path for path in ROOT.rglob('*.html')
    if not any(part in EXCLUDED for part in path.parts)
]

updated = []
already_ready = []

for path in html_files:
    content = path.read_text(encoding='utf-8')
    if 'src="seo.js"' in content:
        already_ready.append(path.name)
        continue

    if '</head>' not in content:
        print(f'OMITIDO (sin </head>): {path.name}')
        continue

    content = content.replace('</head>', f'  {SCRIPT}\n</head>', 1)
    path.write_text(content, encoding='utf-8')
    updated.append(path.name)

print(f'Archivos actualizados: {len(updated)}')
for name in updated:
    print(f'  + {name}')

if already_ready:
    print(f'Ya estaban preparados: {len(already_ready)}')