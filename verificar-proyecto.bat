@echo off
REM RETRO24 - Script de Verificación del Proyecto
REM Verifica que todos los archivos necesarios estén presentes

echo ============================================================
echo   RETRO24 - Verificacion del Proyecto
echo ============================================================
echo.

echo [1/7] Verificando estructura de directorios...
if exist "src\pages" (
    echo [OK] Directorio src\pages existe
) else (
    echo [ERROR] Directorio src\pages NO existe
)

if exist "src\theme" (
    echo [OK] Directorio src\theme existe
) else (
    echo [ERROR] Directorio src\theme NO existe
)

if exist "src\assets\images" (
    echo [OK] Directorio src\assets\images existe
) else (
    echo [ERROR] Directorio src\assets\images NO existe
)
echo.

echo [2/7] Verificando componente Welcome...
if exist "src\pages\Welcome.tsx" (
    echo [OK] Welcome.tsx existe
) else (
    echo [ERROR] Welcome.tsx NO existe
)

if exist "src\pages\Welcome.css" (
    echo [OK] Welcome.css existe
) else (
    echo [ERROR] Welcome.css NO existe
)
echo.

echo [3/7] Verificando sistema de diseno...
if exist "src\theme\design-tokens.css" (
    echo [OK] design-tokens.css existe
) else (
    echo [ERROR] design-tokens.css NO existe
)

if exist "src\theme\fonts.css" (
    echo [OK] fonts.css existe
) else (
    echo [ERROR] fonts.css NO existe
)
echo.

echo [4/7] Verificando App.tsx...
if exist "src\App.tsx" (
    echo [OK] App.tsx existe
) else (
    echo [ERROR] App.tsx NO existe
)
echo.

echo [5/7] Verificando documentacion...
if exist "README.md" (
    echo [OK] README.md existe
) else (
    echo [ERROR] README.md NO existe
)

if exist "QUICK_START.md" (
    echo [OK] QUICK_START.md existe
) else (
    echo [ERROR] QUICK_START.md NO existe
)

if exist "INSTRUCCIONES_SETUP.md" (
    echo [OK] INSTRUCCIONES_SETUP.md existe
) else (
    echo [ERROR] INSTRUCCIONES_SETUP.md NO existe
)
echo.

echo [6/7] Verificando imagen del lente...
if exist "src\assets\images\lente.png" (
    echo [OK] lente.png existe
    echo [INFO] Imagen encontrada - Proyecto listo para ejecutar
) else (
    echo [ADVERTENCIA] lente.png NO existe
    echo [ACCION] Debes copiar la imagen manualmente:
    echo.
    echo   ORIGEN:  C:\Users\Usuario\Downloads\lente.png
    echo   DESTINO: %CD%\src\assets\images\lente.png
    echo.
    echo   COMANDO:
    echo   copy "C:\Users\Usuario\Downloads\lente.png" "%CD%\src\assets\images\lente.png"
    echo.
)
echo.

echo [7/7] Verificando dependencias...
if exist "node_modules" (
    echo [OK] node_modules existe - Dependencias instaladas
) else (
    echo [ADVERTENCIA] node_modules NO existe
    echo [ACCION] Ejecuta: npm install
)
echo.

echo ============================================================
echo   Resumen de Verificacion
echo ============================================================
echo.
echo Archivos principales:
dir /B src\pages\Welcome.* 2>nul
echo.
echo Sistema de diseno:
dir /B src\theme\*.css 2>nul
echo.
echo Documentacion:
dir /B *.md 2>nul
echo.

echo ============================================================
echo   Siguiente Paso
echo ============================================================
echo.

if exist "src\assets\images\lente.png" (
    echo Proyecto completo - Ejecuta: ionic serve
) else (
    echo 1. Copia lente.png a src\assets\images\
    echo 2. Ejecuta: ionic serve
)
echo.

echo ============================================================
pause
