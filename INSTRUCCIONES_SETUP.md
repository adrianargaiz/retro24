# RETRO24 - Instrucciones de Configuración

## Proyecto Inicializado Exitosamente

La pantalla de bienvenida (Welcome Screen) de Retro24 ha sido implementada con todas las especificaciones de diseño.

---

## Estructura del Proyecto

```
retro24/
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── lente.png          # AGREGAR MANUALMENTE (ver instrucciones abajo)
│   ├── pages/
│   │   ├── Welcome.tsx            # Componente Welcome Screen
│   │   ├── Welcome.css            # Estilos Welcome Screen
│   │   └── Home.tsx               # Pantalla Home (original)
│   ├── theme/
│   │   ├── design-tokens.css      # Sistema de diseño (colores, tipografía, espaciado)
│   │   ├── fonts.css              # Configuración de fuentes
│   │   └── variables.css          # Variables Ionic
│   └── App.tsx                    # Configuración de rutas (actualizado)
├── index.html                     # HTML principal (actualizado con Google Fonts)
└── package.json
```

---

## PASO 1: Agregar la Imagen del Lente de Cámara

**IMPORTANTE:** Debes copiar manualmente el archivo de la imagen del lente.

### Instrucciones:

1. Localiza el archivo en tu computadora:
   ```
   C:\Users\Usuario\Downloads\lente.png
   ```

2. Cópialo a la carpeta de assets del proyecto:
   ```
   C:\Proyectos\photoparty\retro24\src\assets\images\lente.png
   ```

3. Verifica que la ruta final sea exactamente:
   ```
   retro24/src/assets/images/lente.png
   ```

### Comando para copiar (ejecutar en terminal):

```bash
# Opción 1: Usando copy (Windows)
copy "C:\Users\Usuario\Downloads\lente.png" "C:\Proyectos\photoparty\retro24\src\assets\images\lente.png"

# Opción 2: Usando PowerShell
Copy-Item "C:\Users\Usuario\Downloads\lente.png" -Destination "C:\Proyectos\photoparty\retro24\src\assets\images\lente.png"
```

---

## PASO 2: Instalar Dependencias (si es necesario)

El proyecto ya fue inicializado con todas las dependencias, pero si necesitas reinstalar:

```bash
cd C:/Proyectos/photoparty/retro24
npm install
```

---

## PASO 3: Ejecutar el Proyecto en Desarrollo

```bash
cd C:/Proyectos/photoparty/retro24
ionic serve
```

O también puedes usar:

```bash
npm run dev
```

Esto abrirá el navegador automáticamente en `http://localhost:8100` y verás la pantalla de bienvenida.

---

## PASO 4: Verificar la Implementación

Una vez que ejecutes `ionic serve`, deberías ver:

- ✅ Fondo color beige (#E5E2D5)
- ✅ Rainbow stripes verticales (6 colores)
- ✅ Título "Welcome!" en Inter Semibold 48px
- ✅ Imagen del lente de cámara (363x363px)
- ✅ Subtítulo "Give your events the retro vibe" en Inter Semibold 32px
- ✅ Descripción con opacidad 75%
- ✅ Botón "Let's Start" con fondo oscuro (#2C2A2B)
- ✅ Diseño responsive para diferentes tamaños de iPhone

---

## Sistema de Diseño Implementado

### Colores

| Token | Valor | Uso |
|-------|-------|-----|
| `--retro24-bg-primary` | #E5E2D5 | Fondo principal |
| `--retro24-text-primary` | #2C2A2B | Texto principal |
| `--retro24-button-bg` | #2C2A2B | Fondo de botones |
| `--retro24-rainbow-pink` | #FA2CAF | Stripe 1 |
| `--retro24-rainbow-red` | #FF383C | Stripe 2 |
| `--retro24-rainbow-orange` | #FEB200 | Stripe 3 |
| `--retro24-rainbow-yellow` | #FDF400 | Stripe 4 |
| `--retro24-rainbow-green` | #3EBF5F | Stripe 5 |
| `--retro24-rainbow-blue` | #02B4EF | Stripe 6 |

### Tipografía

| Elemento | Tamaño | Peso | Fuente |
|----------|---------|------|--------|
| Título | 48px | Semibold (600) | Inter |
| Subtítulo | 32px | Semibold (600) | Inter |
| Descripción | 16px | Regular (400) | Inter |
| Botón | 18px | Semibold (600) | Inter |

### Dimensiones

| Elemento | Ancho | Alto |
|----------|-------|------|
| Rainbow Stripe | 21px | 852px |
| Camera Lens | 363px | 363px |
| Botón | 339px | 59px |
| Border Radius (botón) | - | 16px |

---

## Características Implementadas

### 1. Responsive Design
- Adaptación automática para diferentes tamaños de iPhone
- Breakpoints específicos: 320px, 375px, 428px+
- Soporte para orientación landscape
- Escalado inteligente de elementos

### 2. Accesibilidad
- Soporte para `prefers-reduced-motion`
- Soporte para `prefers-contrast: high`
- Estructura semántica HTML5
- Contraste de colores WCAG AA compliant

### 3. Performance
- Fuentes optimizadas con `display=swap`
- Imágenes con `object-fit: contain`
- Transiciones CSS optimizadas
- Sin JavaScript pesado en la UI

### 4. Sistema de Tokens
- Variables CSS reutilizables
- Fácil actualización de colores
- Espaciado consistente (base 8px)
- Tipografía escalable

---

## Navegación (Para Implementar)

La navegación está preparada pero comentada en `Welcome.tsx`:

```typescript
const handleStart = () => {
  // Descomenta cuando tengas la siguiente pantalla lista
  // history.push('/home');
};
```

Cuando tengas la siguiente pantalla lista, simplemente descomenta esa línea.

---

## Build para Producción

### Para Web:

```bash
npm run build
```

### Para iOS (usando Appflow o Capacitor):

```bash
# Agregar plataforma iOS
ionic capacitor add ios

# Sincronizar cambios
ionic capacitor sync ios

# Abrir en Xcode (requiere Mac)
ionic capacitor open ios
```

### Para Android:

```bash
# Agregar plataforma Android
ionic capacitor add android

# Sincronizar cambios
ionic capacitor sync android

# Abrir en Android Studio
ionic capacitor open android
```

### Usando Appflow (recomendado, no requiere Mac):

1. Crea una cuenta en [Ionic Appflow](https://dashboard.ionicframework.com/)
2. Conecta tu repositorio Git
3. Configura builds nativos desde el dashboard
4. Appflow compilará tu app para iOS y Android en la nube

---

## Próximos Pasos

1. ✅ **Welcome Screen** - COMPLETADO
2. ⏳ **Agregar imagen lente.png** - PENDIENTE (manual)
3. ⏳ **Segunda pantalla** - Por implementar
4. ⏳ **Funcionalidad de cámara** - Por implementar
5. ⏳ **Backend** - Por implementar más adelante

---

## Archivos Creados/Modificados

### Nuevos Archivos:
- `src/pages/Welcome.tsx` - Componente principal Welcome
- `src/pages/Welcome.css` - Estilos pixel-perfect
- `src/theme/design-tokens.css` - Sistema de diseño completo
- `src/theme/fonts.css` - Configuración fuentes Inter
- `src/assets/images/` - Carpeta para imágenes (vacía, agregar lente.png)

### Archivos Modificados:
- `src/App.tsx` - Rutas actualizadas, Welcome como pantalla inicial
- `index.html` - Google Fonts Inter agregado (también en fonts.css como fallback)

---

## Solución de Problemas

### La imagen del lente no aparece:
- Verifica que `lente.png` esté en `src/assets/images/`
- Verifica que el nombre del archivo sea exactamente `lente.png` (minúsculas)
- Reinicia el servidor de desarrollo (`ionic serve`)

### Los colores no se ven correctos:
- Verifica que `design-tokens.css` esté importado en `App.tsx`
- Limpia el cache del navegador (Ctrl+Shift+R)

### La fuente Inter no se carga:
- Verifica tu conexión a internet (Google Fonts requiere conexión)
- Alternativamente usa el fallback system fonts

### El proyecto no arranca:
```bash
# Reinstalar dependencias
rm -rf node_modules
npm install

# Limpiar cache de Ionic
ionic serve --clear-cache
```

---

## Soporte y Documentación

- [Ionic Framework Docs](https://ionicframework.com/docs)
- [Ionic React Docs](https://ionicframework.com/docs/react)
- [Capacitor Docs](https://capacitorjs.com/docs)
- [Appflow Docs](https://ionic.io/docs/appflow)

---

## Notas Técnicas

### Stack Tecnológico:
- **Framework:** Ionic 8 + React 18
- **Bundler:** Vite
- **Mobile Runtime:** Capacitor
- **Lenguaje:** TypeScript
- **Estilos:** CSS Variables + Ionic CSS Utilities

### Compatibilidad:
- iOS 13+
- Android 5.0+ (API 21+)
- Navegadores modernos (Chrome, Safari, Firefox, Edge)

---

**¡Proyecto listo para desarrollar! 🚀📸**

Si tienes dudas o encuentras algún problema, revisa primero la sección de Solución de Problemas.
