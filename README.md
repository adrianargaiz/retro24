# 📸 RETRO24 - Vintage Polaroid Camera App

> Aplicación móvil estilo cámara Polaroid vintage con efectos retro para eventos

[![Ionic](https://img.shields.io/badge/Ionic-8.x-3880FF?logo=ionic)](https://ionicframework.com/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-6.x-119EFF?logo=capacitor)](https://capacitorjs.com/)

---

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ instalado
- Ionic CLI instalado: `npm install -g @ionic/cli`

### 3 Pasos para Ejecutar

```bash
# 1. Copiar imagen del lente
copy "C:\Users\Usuario\Downloads\lente.png" "C:\Proyectos\photoparty\retro24\src\assets\images\lente.png"

# 2. Navegar al proyecto
cd C:\Proyectos\photoparty\retro24

# 3. Ejecutar servidor de desarrollo
ionic serve
```

🎉 **¡Listo!** Abre http://localhost:8100 en tu navegador

---

## 📱 Estado del Proyecto

### ✅ Completado

- [x] Proyecto Ionic + React inicializado
- [x] Sistema de diseño con tokens CSS
- [x] Fuente Inter (Google Fonts) configurada
- [x] Welcome Screen implementado pixel-perfect
- [x] Rainbow stripes background
- [x] Diseño responsive (iPhone screens)
- [x] Rutas y navegación configuradas
- [x] Documentación completa

### ⏳ Pendiente

- [ ] Copiar imagen `lente.png` manualmente (ver instrucciones)
- [ ] Segunda pantalla (eventos/cámara)
- [ ] Funcionalidad de cámara con Capacitor
- [ ] Galería de fotos
- [ ] Efectos Polaroid/vintage en fotos
- [ ] Backend (por implementar más adelante)

---

## 📖 Documentación

| Archivo | Descripción |
|---------|-------------|
| [QUICK_START.md](./QUICK_START.md) | Guía rápida para empezar en 3 pasos |
| [INSTRUCCIONES_SETUP.md](./INSTRUCCIONES_SETUP.md) | Instrucciones detalladas de configuración |
| [ESTRUCTURA_PROYECTO.md](./ESTRUCTURA_PROYECTO.md) | Estructura completa del proyecto |
| [COPIAR_IMAGEN_LENTE.txt](./COPIAR_IMAGEN_LENTE.txt) | Instrucciones para copiar la imagen |

---

## 🎨 Welcome Screen - Diseño Implementado

### Vista Previa

```
┌─────────────────────────────────────┐
│                                     │
│           Welcome!                  │
│                                     │
│   ║█║█║█║█║█║█║                    │
│   ║█║█║█║█║█║█║                    │
│   ║█║[LENS]█║█║                    │
│   ║█║█║█║█║█║█║                    │
│   ║█║█║█║█║█║█║                    │
│                                     │
│   Give your events the             │
│   retro vibe                       │
│                                     │
│   Immortalize your memories        │
│   in a unique way                  │
│                                     │
│   ┌─────────────────────────┐     │
│   │     Let's Start         │     │
│   └─────────────────────────┘     │
│                                     │
└─────────────────────────────────────┘
```

### Especificaciones Técnicas

**Colores:**
- Fondo: `#E5E2D5` (beige/cream)
- Texto: `#2C2A2B` (dark gray)
- Botón: `#2C2A2B` (dark gray)
- Rainbow: 6 colores vibrantes

**Tipografía:**
- Fuente: Inter (Regular, Medium, Semibold)
- Título: 48px Semibold
- Subtítulo: 32px Semibold
- Descripción: 16px Regular (75% opacidad)

**Elementos:**
- Rainbow Stripes: 6x21px verticales
- Camera Lens: 363x363px
- Botón: 339x59px con border-radius 16px

---

## 🛠️ Tecnologías

### Frontend
- **Framework:** Ionic 8 + React 18
- **Lenguaje:** TypeScript 5
- **Bundler:** Vite (ultra-rápido)
- **Estilos:** CSS Variables + Ionic CSS Utilities

### Mobile Runtime
- **Capacitor 6:** Multiplataforma (iOS + Android)
- **Plugins:**
  - Camera API (por implementar)
  - Filesystem (por implementar)
  - Haptics (instalado)
  - Keyboard (instalado)
  - Status Bar (instalado)

### Build & Deploy
- **Appflow:** Builds nativos sin Mac
- **Web:** Deployment estático (Netlify, Vercel, etc.)

---

## 📂 Estructura del Proyecto

```
retro24/
├── src/
│   ├── pages/
│   │   ├── Welcome.tsx         # ✨ Pantalla de bienvenida
│   │   ├── Welcome.css         # ✨ Estilos pixel-perfect
│   │   └── Home.tsx            # Placeholder siguiente pantalla
│   ├── theme/
│   │   ├── design-tokens.css   # ✨ Sistema de diseño
│   │   ├── fonts.css           # ✨ Configuración Inter
│   │   └── variables.css       # Variables Ionic
│   ├── assets/
│   │   └── images/
│   │       └── lente.png       # ⚠️ AGREGAR MANUALMENTE
│   └── App.tsx                 # ✨ Rutas configuradas
├── QUICK_START.md              # ✨ Guía rápida
├── INSTRUCCIONES_SETUP.md      # ✨ Setup detallado
├── ESTRUCTURA_PROYECTO.md      # ✨ Estructura completa
└── README.md                   # Este archivo
```

---

## 🎯 Características Implementadas

### Diseño
- ✅ Sistema de tokens de diseño reutilizable
- ✅ Responsive design para todos los iPhones
- ✅ Breakpoints específicos (320px, 375px, 428px+)
- ✅ Soporte landscape y portrait
- ✅ Rainbow stripes animables

### Accesibilidad
- ✅ WCAG 2.1 AA compliant
- ✅ `prefers-reduced-motion` support
- ✅ `prefers-contrast: high` support
- ✅ Estructura HTML semántica

### Performance
- ✅ Fuentes optimizadas (`display=swap`)
- ✅ CSS Variables (sin JavaScript en estilos)
- ✅ Vite HMR (hot module replacement)
- ✅ Bundle size optimizado

### Developer Experience
- ✅ TypeScript strict mode
- ✅ Comentarios extensos en código
- ✅ Estructura de carpetas organizada
- ✅ Documentación completa

---

## 🚧 Próximos Pasos

### Inmediato
1. ⚠️ **Copiar `lente.png`** (ver [COPIAR_IMAGEN_LENTE.txt](./COPIAR_IMAGEN_LENTE.txt))
2. Ejecutar `ionic serve` y verificar
3. Testear en diferentes dispositivos

### Corto Plazo
4. Implementar segunda pantalla (selector de eventos)
5. Integrar Capacitor Camera API
6. Crear galería de fotos tomadas
7. Agregar filtros/efectos vintage

### Mediano Plazo
8. Sistema de eventos (crear/unirse)
9. Storage local de fotos
10. Compartir en redes sociales
11. Diseño de la "Polaroid frame"

### Largo Plazo
12. Backend con autenticación
13. Cloud storage (AWS S3 / Firebase)
14. Álbumes compartidos
15. Impresión física de fotos

---

## 📱 Comandos Útiles

### Desarrollo
```bash
ionic serve                    # Dev server
ionic serve --lab            # Multi-device simulator
npm run build                # Production build
```

### Testing
```bash
npm test                     # Run tests
npm run test:coverage       # Coverage report
```

### Capacitor (Mobile)
```bash
ionic cap add ios            # Add iOS platform
ionic cap add android        # Add Android platform
ionic cap sync              # Sync changes
ionic cap run ios           # Run on iOS
ionic cap run android       # Run on Android
```

### Utilities
```bash
ionic info                  # System info
ionic doctor                # Check installation
npm outdated                # Check updates
```

---

## 🎨 Sistema de Diseño

Todos los tokens están definidos en `src/theme/design-tokens.css`:

```css
/* Colores */
--retro24-bg-primary: #E5E2D5;
--retro24-text-primary: #2C2A2B;
--retro24-rainbow-pink: #FA2CAF;
/* ... más colores ... */

/* Tipografía */
--retro24-font-family: 'Inter', sans-serif;
--retro24-font-size-title: 48px;
/* ... más tamaños ... */

/* Espaciado (base 8px) */
--retro24-space-sm: 8px;
--retro24-space-md: 16px;
/* ... más espaciados ... */
```

Usar en cualquier componente:

```css
.mi-componente {
  background: var(--retro24-bg-primary);
  font-size: var(--retro24-font-size-body);
  padding: var(--retro24-space-md);
}
```

---

## 🐛 Solución de Problemas

### La imagen del lente no aparece
```bash
# Verificar que existe
ls src/assets/images/lente.png

# Reiniciar servidor
ionic serve
```

### Fuente Inter no se carga
- Verificar conexión a internet (usa Google Fonts)
- Revisar console del navegador por errores
- Fallback: usará system fonts automáticamente

### Errores de compilación TypeScript
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Puerto 8100 ya en uso
```bash
# Usar otro puerto
ionic serve --port 8101
```

---

## 📄 Licencia

Este proyecto es privado y pertenece al equipo de desarrollo de Retro24.

---

## 👥 Equipo de Desarrollo

- **Frontend:** Ionic + React + TypeScript
- **Mobile:** Capacitor
- **Build:** Appflow (sin necesidad de Mac)
- **Backend:** Por definir (futuro)

---

## 📞 Soporte

Para preguntas o problemas:
1. Revisar [INSTRUCCIONES_SETUP.md](./INSTRUCCIONES_SETUP.md)
2. Revisar sección "Solución de Problemas" arriba
3. Consultar documentación de Ionic: https://ionicframework.com/docs

---

## 🎉 Estado Actual

```
✅ Proyecto inicializado
✅ Welcome Screen implementado pixel-perfect
✅ Sistema de diseño completo
✅ Documentación exhaustiva
⚠️ Pendiente: Copiar imagen lente.png

Progreso: [████████░░] 80% (Welcome Screen)
```

---

**Desarrollado con ❤️ usando Ionic + React + Capacitor**

¿Listo para empezar? → Sigue [QUICK_START.md](./QUICK_START.md)
