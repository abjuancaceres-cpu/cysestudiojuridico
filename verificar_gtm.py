#!/usr/bin/env python3
from pathlib import Path

GTM_ID = "GTM-KQVCVG64"

files = sorted(p for p in Path.cwd().rglob("*.html") if ".git" not in p.parts)
if not files:
    print("No se encontraron archivos HTML.")
else:
    ok = 0
    missing = []
    for p in files:
        text = p.read_text(encoding="utf-8", errors="ignore")
        count = text.count(GTM_ID)
        if count >= 2:
            ok += 1
            print(f"[OK] {p}: GTM presente")
        else:
            missing.append(p)
            print(f"[FALTA] {p}: GTM incompleto o ausente")
    print(f"\nCorrectos: {ok}/{len(files)}")
    if missing:
        print("Ejecutá INSTALAR_GTM.bat nuevamente.")
input("\nPresioná Enter para cerrar...")
