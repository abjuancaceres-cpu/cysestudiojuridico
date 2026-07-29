@echo off
chcp 65001 >nul
title Verificación GTM - CyS Estudio Jurídico
where py >nul 2>&1
if %errorlevel%==0 (
    py verificar_gtm.py
    exit /b
)
where python >nul 2>&1
if %errorlevel%==0 (
    python verificar_gtm.py
    exit /b
)
echo No se encontro Python.
pause
