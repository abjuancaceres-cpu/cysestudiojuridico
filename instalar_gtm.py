#!/usr/bin/env python3
from pathlib import Path
import shutil
import sys
import re

GTM_ID = "GTM-KQVCVG64"

HEAD_SNIPPET = f"""<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){{w[l]=w[l]||[];w[l].push({{'gtm.start':
new Date().getTime(),event:'gtm.js'}});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
}})(window,document,'script','dataLayer','{GTM_ID}');</script>
<!-- End Google Tag Manager -->"""

BODY_SNIPPET = f"""<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->"""

def inject_gtm(path: Path) -> tuple[bool, str]:
    try:
        original = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return False, "No se pudo leer como UTF-8"

    if GTM_ID in original:
        return False, "Ya contiene GTM"

    updated = original

    # Inserta el script inmediatamente después de <head ...>
    head_match = re.search(r"<head\b[^>]*>", updated, flags=re.IGNORECASE)
    if not head_match:
        return False, "No se encontró <head>"

    insert_at = head_match.end()
    updated = updated[:insert_at] + "\n" + HEAD_SNIPPET + "\n" + updated[insert_at:]

    # Inserta noscript inmediatamente después de <body ...>
    body_match = re.search(r"<body\b[^>]*>", updated, flags=re.IGNORECASE)
    if not body_match:
        return False, "No se encontró <body>"

    insert_at = body_match.end()
    updated = updated[:insert_at] + "\n" + BODY_SNIPPET + "\n" + updated[insert_at:]

    backup = path.with_suffix(path.suffix + ".bak")
    if not backup.exists():
        shutil.copy2(path, backup)

    path.write_text(updated, encoding="utf-8")
    return True, "GTM instalado"

def main():
    folder = Path.cwd()
    html_files = sorted(
        p for p in folder.rglob("*.html")
        if ".git" not in p.parts and "node_modules" not in p.parts
    )

    if not html_files:
        print("\nNo encontré archivos .html.")
        print("Copiá este instalador dentro de la carpeta principal de la web y volvé a ejecutarlo.")
        input("\nPresioná Enter para cerrar...")
        return 1

    print(f"\nInstalando {GTM_ID} en: {folder}")
    print(f"Archivos HTML encontrados: {len(html_files)}\n")

    changed = 0
    for path in html_files:
        ok, message = inject_gtm(path)
        rel = path.relative_to(folder)
        symbol = "OK" if ok else "--"
        print(f"[{symbol}] {rel}: {message}")
        if ok:
            changed += 1

    print("\n----------------------------------------")
    print(f"Archivos modificados: {changed}")
    print("Se creó una copia .bak de cada archivo modificado.")
    print("El instalador puede ejecutarse nuevamente sin duplicar GTM.")
    print("----------------------------------------")
    input("\nPresioná Enter para cerrar...")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
