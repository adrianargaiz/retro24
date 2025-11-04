#!/bin/bash
# RETRO24 - Script de Verificación del Proyecto
# Verifica que todos los archivos necesarios estén presentes

echo "============================================================"
echo "  RETRO24 - Verificación del Proyecto"
echo "============================================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para verificar archivo/directorio
check_exists() {
    if [ -e "$1" ]; then
        echo -e "${GREEN}[OK]${NC} $2"
        return 0
    else
        echo -e "${RED}[ERROR]${NC} $2 NO existe"
        return 1
    fi
}

check_warning() {
    if [ -e "$1" ]; then
        echo -e "${GREEN}[OK]${NC} $2"
        return 0
    else
        echo -e "${YELLOW}[ADVERTENCIA]${NC} $2 NO existe"
        return 1
    fi
}

# Verificación 1: Estructura de directorios
echo "[1/7] Verificando estructura de directorios..."
check_exists "src/pages" "Directorio src/pages"
check_exists "src/theme" "Directorio src/theme"
check_exists "src/assets/images" "Directorio src/assets/images"
echo ""

# Verificación 2: Componente Welcome
echo "[2/7] Verificando componente Welcome..."
check_exists "src/pages/Welcome.tsx" "Welcome.tsx"
check_exists "src/pages/Welcome.css" "Welcome.css"
echo ""

# Verificación 3: Sistema de diseño
echo "[3/7] Verificando sistema de diseño..."
check_exists "src/theme/design-tokens.css" "design-tokens.css"
check_exists "src/theme/fonts.css" "fonts.css"
echo ""

# Verificación 4: App.tsx
echo "[4/7] Verificando App.tsx..."
check_exists "src/App.tsx" "App.tsx"
echo ""

# Verificación 5: Documentación
echo "[5/7] Verificando documentación..."
check_exists "README.md" "README.md"
check_exists "QUICK_START.md" "QUICK_START.md"
check_exists "INSTRUCCIONES_SETUP.md" "INSTRUCCIONES_SETUP.md"
echo ""

# Verificación 6: Imagen del lente
echo "[6/7] Verificando imagen del lente..."
if check_warning "src/assets/images/lente.png" "lente.png"; then
    echo -e "${GREEN}[INFO]${NC} Imagen encontrada - Proyecto listo para ejecutar"
else
    echo -e "${YELLOW}[ACCIÓN]${NC} Debes copiar la imagen manualmente:"
    echo ""
    echo "  ORIGEN:  /c/Users/Usuario/Downloads/lente.png"
    echo "  DESTINO: $(pwd)/src/assets/images/lente.png"
    echo ""
    echo "  COMANDO:"
    echo "  cp /c/Users/Usuario/Downloads/lente.png src/assets/images/lente.png"
    echo ""
fi
echo ""

# Verificación 7: Dependencias
echo "[7/7] Verificando dependencias..."
if check_warning "node_modules" "node_modules - Dependencias instaladas"; then
    echo -e "${GREEN}[OK]${NC} Dependencias instaladas"
else
    echo -e "${YELLOW}[ACCIÓN]${NC} Ejecuta: npm install"
fi
echo ""

# Resumen
echo "============================================================"
echo "  Resumen de Verificación"
echo "============================================================"
echo ""

echo "Archivos principales:"
ls -lh src/pages/Welcome.* 2>/dev/null || echo "No encontrados"
echo ""

echo "Sistema de diseño:"
ls -lh src/theme/*.css 2>/dev/null || echo "No encontrados"
echo ""

echo "Documentación:"
ls -lh *.md 2>/dev/null || echo "No encontrados"
echo ""

# Siguiente paso
echo "============================================================"
echo "  Siguiente Paso"
echo "============================================================"
echo ""

if [ -f "src/assets/images/lente.png" ]; then
    echo -e "${GREEN}Proyecto completo${NC} - Ejecuta: ${YELLOW}ionic serve${NC}"
else
    echo "1. Copia lente.png a src/assets/images/"
    echo "2. Ejecuta: ${YELLOW}ionic serve${NC}"
fi
echo ""

echo "============================================================"
