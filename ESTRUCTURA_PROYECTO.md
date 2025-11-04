# RETRO24 - Estructura del Proyecto

## Árbol de Archivos Completo

```
retro24/
│
├── 📄 INSTRUCCIONES_SETUP.md       # Instrucciones detalladas de configuración
├── 📄 QUICK_START.md               # Guía rápida de inicio
├── 📄 ESTRUCTURA_PROYECTO.md       # Este archivo
│
├── 📄 package.json                 # Dependencias del proyecto
├── 📄 tsconfig.json                # Configuración TypeScript
├── 📄 vite.config.ts               # Configuración Vite bundler
├── 📄 capacitor.config.ts          # Configuración Capacitor
├── 📄 ionic.config.json            # Configuración Ionic CLI
├── 📄 index.html                   # HTML principal (con Google Fonts)
│
├── 📁 public/                      # Archivos públicos estáticos
│   ├── favicon.png
│   └── manifest.json
│
├── 📁 src/                         # Código fuente principal
│   │
│   ├── 📄 App.tsx                  # ✨ MODIFICADO - Componente raíz con rutas
│   ├── 📄 App.test.tsx             # Tests del componente App
│   ├── 📄 main.tsx                 # Punto de entrada de la aplicación
│   ├── 📄 setupTests.ts            # Configuración de tests
│   ├── 📄 vite-env.d.ts            # Tipos para Vite
│   │
│   ├── 📁 assets/                  # Recursos multimedia
│   │   └── 📁 images/              # ✨ CREADO - Carpeta de imágenes
│   │       └── 📄 lente.png        # ⚠️ AGREGAR MANUALMENTE
│   │
│   ├── 📁 components/              # Componentes reutilizables
│   │   ├── 📄 ExploreContainer.tsx # Componente de ejemplo (Ionic)
│   │   └── 📄 ExploreContainer.css # Estilos del componente
│   │
│   ├── 📁 pages/                   # Páginas/Pantallas de la app
│   │   ├── 📄 Home.tsx             # Pantalla Home (original Ionic)
│   │   ├── 📄 Home.css             # Estilos Home
│   │   ├── 📄 Welcome.tsx          # ✨ CREADO - Pantalla de bienvenida
│   │   └── 📄 Welcome.css          # ✨ CREADO - Estilos Welcome pixel-perfect
│   │
│   └── 📁 theme/                   # Sistema de diseño y tema
│       ├── 📄 variables.css        # Variables Ionic (colores, etc.)
│       ├── 📄 design-tokens.css    # ✨ CREADO - Sistema de tokens Retro24
│       └── 📄 fonts.css            # ✨ CREADO - Configuración fuentes
│
└── 📁 node_modules/                # Dependencias (generado por npm)
```

---

## Archivos Clave del Proyecto

### 🎨 Sistema de Diseño

| Archivo | Descripción | Estado |
|---------|-------------|--------|
| `src/theme/design-tokens.css` | Variables CSS con colores, tipografía, espaciado | ✅ Creado |
| `src/theme/fonts.css` | Importación y configuración de Inter font | ✅ Creado |
| `src/theme/variables.css` | Variables Ionic predeterminadas | ✅ Original |

### 📱 Componentes y Páginas

| Archivo | Descripción | Estado |
|---------|-------------|--------|
| `src/pages/Welcome.tsx` | Componente Welcome Screen (TypeScript + React) | ✅ Creado |
| `src/pages/Welcome.css` | Estilos responsive pixel-perfect | ✅ Creado |
| `src/pages/Home.tsx` | Pantalla Home (placeholder para siguiente paso) | ✅ Original |
| `src/App.tsx` | Configuración de rutas y navegación | ✅ Modificado |

### 🖼️ Assets

| Archivo | Descripción | Estado |
|---------|-------------|--------|
| `src/assets/images/lente.png` | Imagen del lente de cámara 363x363px | ⚠️ **PENDIENTE** |

---

## Dependencias Principales

### Producción:
- `@ionic/react` - Framework UI para React
- `@ionic/react-router` - Router para Ionic React
- `@capacitor/core` - Runtime nativo multiplataforma
- `@capacitor/app` - Plugin de aplicación
- `@capacitor/haptics` - Feedback háptico
- `@capacitor/keyboard` - Control del teclado
- `@capacitor/status-bar` - Control de barra de estado
- `react` - Librería React 18
- `react-dom` - React DOM
- `react-router` - Enrutamiento
- `react-router-dom` - Router para web

### Desarrollo:
- `@capacitor/cli` - CLI de Capacitor
- `@ionic/cli` - CLI de Ionic
- `@vitejs/plugin-react` - Plugin React para Vite
- `typescript` - Lenguaje TypeScript
- `vite` - Bundler y dev server ultra-rápido

---

## Rutas Configuradas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | Redirect → `/welcome` | Redirección a Welcome |
| `/welcome` | `<Welcome />` | Pantalla de bienvenida |
| `/home` | `<Home />` | Pantalla Home (placeholder) |

---

## Sistema de Tokens de Diseño

### Categorías de Variables CSS:

```css
:root {
  /* COLORES */
  --retro24-bg-primary: #E5E2D5
  --retro24-text-primary: #2C2A2B
  --retro24-rainbow-[color]: ...

  /* TIPOGRAFÍA */
  --retro24-font-family: 'Inter', sans-serif
  --retro24-font-size-[size]: ...
  --retro24-font-weight-[weight]: ...

  /* ESPACIADO (base 8px) */
  --retro24-space-xs: 4px
  --retro24-space-sm: 8px
  --retro24-space-md: 16px
  ...

  /* DIMENSIONES */
  --retro24-stripe-width: 21px
  --retro24-lens-size: 363px
  --retro24-button-height: 59px

  /* BORDER RADIUS */
  --retro24-radius-lg: 16px
  ...

  /* TRANSICIONES */
  --retro24-transition-base: 250ms ease-in-out
  ...
}
```

---

## Flujo de Importación de Estilos

```
App.tsx
  │
  ├─→ @ionic/react/css/core.css          (Ionic core)
  ├─→ @ionic/react/css/normalize.css      (Reset CSS)
  ├─→ @ionic/react/css/structure.css      (Estructura Ionic)
  ├─→ @ionic/react/css/typography.css     (Tipografía Ionic)
  ├─→ @ionic/react/css/utilities.css      (Utilidades)
  │
  ├─→ theme/design-tokens.css             (✨ Sistema Retro24)
  ├─→ theme/fonts.css                     (✨ Fuentes Inter)
  └─→ theme/variables.css                 (Variables Ionic)

Welcome.tsx
  │
  └─→ Welcome.css                         (✨ Estilos específicos)
```

---

## Componentes del Welcome Screen

### Estructura JSX:

```tsx
<IonPage>
  <IonContent>
    <div className="welcome-container">

      {/* Rainbow Stripes Background */}
      <div className="rainbow-stripes">
        <div className="stripe stripe-pink"></div>
        <div className="stripe stripe-red"></div>
        <div className="stripe stripe-orange"></div>
        <div className="stripe stripe-yellow"></div>
        <div className="stripe stripe-green"></div>
        <div className="stripe stripe-blue"></div>
      </div>

      {/* Main Content */}
      <div className="welcome-main">
        <div className="welcome-header">
          <h1>Welcome!</h1>
        </div>

        <div className="welcome-lens-container">
          <img src="lente.png" />
        </div>

        <div className="welcome-text">
          <h2>Give your events the retro vibe</h2>
          <p>Immortalize your memories in a unique way</p>
        </div>

        <div className="welcome-cta">
          <IonButton>Let's Start</IonButton>
        </div>
      </div>

    </div>
  </IonContent>
</IonPage>
```

---

## Características CSS Implementadas

### 1. Posicionamiento Absoluto
- Rainbow stripes centradas con `position: absolute`
- Contenido principal con `position: relative` y `z-index` más alto

### 2. Flexbox Layout
- Contenedor principal con `flex-direction: column`
- Distribución `space-between` para separar elementos
- Alineación `center` para centrado horizontal

### 3. Responsive Design
```css
/* Breakpoints */
@media (max-width: 320px)  { /* iPhone SE */ }
@media (max-width: 375px)  { /* iPhone 12/13 mini */ }
@media (min-width: 376px) and (max-width: 428px) { /* iPhone 12/13/14 */ }
@media (min-width: 429px)  { /* iPhone Plus/Max */ }
@media (orientation: landscape) { /* Modo horizontal */ }
```

### 4. Accesibilidad
```css
@media (prefers-reduced-motion: reduce) { /* Sin animaciones */ }
@media (prefers-contrast: high) { /* Alto contraste */ }
```

---

## Compatibilidad de Navegadores

| Navegador | Versión Mínima | Estado |
|-----------|----------------|--------|
| Chrome | 90+ | ✅ Soportado |
| Safari | 14+ | ✅ Soportado |
| Firefox | 88+ | ✅ Soportado |
| Edge | 90+ | ✅ Soportado |
| iOS Safari | 14+ | ✅ Soportado |
| Chrome Android | 90+ | ✅ Soportado |

---

## Performance

### Optimizaciones Implementadas:

- ✅ Fuente Inter con `display=swap` (evita FOIT)
- ✅ Imágenes con `object-fit: contain`
- ✅ CSS Variables (rápido, sin JavaScript)
- ✅ Transiciones CSS nativas (GPU-accelerated)
- ✅ Sin librerías pesadas de animación
- ✅ Vite dev server (HMR ultra-rápido)

### Métricas Esperadas:

- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Bundle Size:** ~500KB (gzipped)

---

## Siguientes Pasos en el Desarrollo

### Inmediato:
1. ⚠️ Copiar `lente.png` a `src/assets/images/`
2. ✅ Ejecutar `ionic serve` y verificar
3. ✅ Testear en diferentes tamaños de pantalla

### Próximas Pantallas:
4. 🔲 Implementar segunda pantalla (evento/cámara)
5. 🔲 Agregar navegación entre pantallas
6. 🔲 Implementar funcionalidad de cámara con Capacitor
7. 🔲 Diseñar y crear galería de fotos

### Futuro:
8. 🔲 Integración con backend
9. 🔲 Autenticación de usuarios
10. 🔲 Cloud storage para fotos
11. 🔲 Compartir en redes sociales

---

## Comandos de Desarrollo Útiles

```bash
# Desarrollo
ionic serve                    # Servidor de desarrollo
ionic serve --lab            # Simulador multi-dispositivo
ionic serve --external       # Accesible desde red local

# Build
npm run build                # Compilar para producción
ionic build                  # Build con Ionic CLI

# Capacitor
ionic cap add ios            # Agregar iOS
ionic cap add android        # Agregar Android
ionic cap sync              # Sincronizar cambios
ionic cap open ios          # Abrir Xcode
ionic cap open android      # Abrir Android Studio
ionic cap run ios           # Ejecutar en iOS
ionic cap run android       # Ejecutar en Android

# Utilidades
ionic info                  # Info del sistema
ionic doctor                # Verificar instalación
npm outdated                # Verificar actualizaciones
npm audit                   # Verificar vulnerabilidades
```

---

## Git Workflow Recomendado

```bash
# Inicializar Git
git init
git add .
git commit -m "feat: initial commit with Welcome screen"

# Crear branches para features
git checkout -b feature/camera-screen
git checkout -b feature/gallery-screen

# Commits semánticos
git commit -m "feat: add camera functionality"
git commit -m "fix: rainbow stripes positioning"
git commit -m "style: adjust button spacing"
git commit -m "docs: update setup instructions"
```

---

**Estructura completa y lista para desarrollo 🚀**

Para dudas sobre algún archivo específico, consulta los comentarios en el código fuente.
