# RETRO24 - Guía Rápida de Inicio

## 3 Pasos para Ejecutar el Proyecto

### 1. Copiar la Imagen del Lente
```bash
copy "C:\Users\Usuario\Downloads\lente.png" "C:\Proyectos\photoparty\retro24\src\assets\images\lente.png"
```

### 2. Navegar al Proyecto
```bash
cd C:\Proyectos\photoparty\retro24
```

### 3. Ejecutar el Servidor de Desarrollo
```bash
ionic serve
```

**¡Listo!** Tu app debería abrirse en `http://localhost:8100`

---

## Estructura Visual del Welcome Screen

```
┌─────────────────────────────────────┐
│                                     │
│           Welcome!                  │  ← Título 48px Inter Semibold
│                                     │
│   ║█║█║█║█║█║█║                    │  ← Rainbow Stripes (fondo)
│   ║█║█║█║█║█║█║                    │
│   ║█║█║█║█║█║█║                    │
│   ║█║[LENS]║█║█║                    │  ← Camera Lens 363x363
│   ║█║█║█║█║█║█║                    │
│   ║█║█║█║█║█║█║                    │
│                                     │
│   Give your events the             │  ← Subtítulo 32px
│   retro vibe                       │
│                                     │
│   Immortalize your memories        │  ← Descripción 16px (75% opacidad)
│   in a unique way                  │
│                                     │
│   ┌─────────────────────────┐     │
│   │     Let's Start         │     │  ← Botón 339x59px
│   └─────────────────────────┘     │
│                                     │
└─────────────────────────────────────┘
```

---

## Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `ionic serve` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `ionic capacitor add ios` | Agrega plataforma iOS |
| `ionic capacitor add android` | Agrega plataforma Android |
| `ionic capacitor sync` | Sincroniza cambios con plataformas nativas |

---

## Checklist de Verificación

- [ ] Imagen `lente.png` copiada a `src/assets/images/`
- [ ] Proyecto ejecutándose con `ionic serve`
- [ ] Pantalla Welcome visible en el navegador
- [ ] Rainbow stripes visibles en el fondo
- [ ] Imagen del lente centrada y visible
- [ ] Fuente Inter cargada correctamente
- [ ] Botón "Let's Start" con estilo correcto
- [ ] Diseño responsive funcionando

---

## Colores Rainbow Stripes (de izquierda a derecha)

1. 🩷 **Pink** - #FA2CAF
2. ❤️ **Red** - #FF383C
3. 🧡 **Orange** - #FEB200
4. 💛 **Yellow** - #FDF400
5. 💚 **Green** - #3EBF5F
6. 💙 **Blue** - #02B4EF

---

## Archivos Principales

```
src/
├── pages/
│   └── Welcome.tsx         # Componente principal
│   └── Welcome.css         # Estilos
├── theme/
│   └── design-tokens.css   # Variables de diseño
└── App.tsx                 # Configuración de rutas
```

---

## Si algo no funciona...

1. **Verifica que la imagen esté en el lugar correcto:**
   ```bash
   ls src/assets/images/lente.png
   ```

2. **Reinicia el servidor:**
   ```bash
   # Ctrl+C para detener
   ionic serve
   ```

3. **Limpia el cache del navegador:**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

4. **Reinstala dependencias (último recurso):**
   ```bash
   rm -rf node_modules
   npm install
   ```

---

**¿Todo listo?** Revisa `INSTRUCCIONES_SETUP.md` para detalles completos y siguientes pasos.
