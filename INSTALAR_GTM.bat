@echo off
chcp 65001 >nul
title Instalación GTM - CyS Estudio Jurídico
where py >nul 2>&1
if %errorlevel%==0 (
    py instalar_gtm.py
    exit /b
)
where python >nul 2>&1
if %errorlevel%==0 (
    python instalar_gtm.py
    exit /b
)
echo.
echo No se encontro Python instalado en esta computadora.
echo Podes instalarlo desde https://www.python.org/downloads/
echo Durante la instalacion marca la opcion "Add Python to PATH".
echo.
pause
