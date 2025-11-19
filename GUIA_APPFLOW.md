# 🚀 GUÍA COMPLETA: Ionic Appflow y Configuración iOS

## 📋 RESUMEN DE LO COMPLETADO

### ✅ Configuración Git y GitHub - COMPLETADO
- Usuario Git configurado: `adrianargaiz`
- Email configurado: `adrian.argaiz.martinez@gmail.com`
- Repositorio GitHub conectado: `https://github.com/adrianargaiz/retro24.git`
- Commit inicial creado y pusheado a la rama `main`
- Bundle ID actualizado: `com.adrianargaiz.retro24`

### ✅ Capacitor iOS - COMPLETADO
- Plataforma iOS instalada (carpeta `ios/` presente)
- Configuración básica lista

---

## 📱 PASO 1: VINCULAR CON IONIC APPFLOW

### 1.1 Login en Ionic Appflow

Ejecuta el siguiente comando en tu terminal:

```bash
cd C:\Proyectos\photoparty\retro24
ionic login
```

**¿Qué verás?**
```
? Email: adrian.argaiz.martinez@gmail.com
? Password: ********
```

**Introduce:**
- Tu email de Ionic Appflow
- Tu contraseña

**Salida esperada:**
```
[OK] You are logged in!
```

---

### 1.2 Vincular el Proyecto

Una vez logueado, ejecuta:

```bash
ionic link
```

**Prompts que verás:**

#### Opción 1: Si NO tienes una app creada en Appflow
```
? Would you like to create a new app on Ionic Appflow? (Y/n)
```
Respuesta: **Y** (Sí)

```
? What would you like to name your app?
```
Respuesta: **Retro24**

```
? Create which type of app?
  ❯ Production - Full featured app
    Development - Limited features for testing
```
Respuesta: **Production** (usa flechas ↑↓ y Enter)

#### Opción 2: Si YA tienes una app creada en Appflow
```
? Which app would you like to link?
  ❯ Retro24
    Create new app
```
Selecciona tu app existente o "Create new app"

**Salida esperada:**
```
[OK] Your app has been linked to Ionic Appflow!
App ID: xxxxxxxx
```

---

### 1.3 Configurar el Remote de Git para Appflow

Ejecuta:

```bash
ionic git remote
```

**Salida esperada:**
```
[OK] Added remote ionic.
```

Esto añade un remote llamado `ionic` que apunta a Appflow.

---

### 1.4 Verificar Configuración

Comprueba que todo está correctamente configurado:

```bash
git remote -v
```

**Salida esperada:**
```
ionic   https://git.ionicjs.com/[tu-app-id].git (fetch)
ionic   https://git.ionicjs.com/[tu-app-id].git (push)
origin  https://github.com/adrianargaiz/retro24.git (fetch)
origin  https://github.com/adrianargaiz/retro24.git (push)
```

---

## 🍎 PASO 2: OBTENER UDID DEL iPHONE (Windows)

### Método 1: iTunes (Recomendado para Windows)

1. **Instalar iTunes** (si no lo tienes):
   - Descarga desde: https://www.apple.com/itunes/download/
   - O desde Microsoft Store

2. **Conectar el iPhone al PC** con cable USB

3. **Abrir iTunes** y hacer clic en el ícono del iPhone

4. **Ver información del dispositivo:**
   - Haz clic en "Número de serie" varias veces hasta que aparezca "UDID"
   - El UDID aparecerá en formato: `00008030-XXXXXXXXXXXX`

5. **Copiar el UDID:**
   - Clic derecho sobre el UDID → "Copiar UDID"
   - Guárdalo en un archivo de texto

### Método 2: iMazing (Alternativa gratuita)

1. **Descargar iMazing**:
   - https://imazing.com/download
   - Versión gratuita funciona para ver UDID

2. **Instalar y ejecutar iMazing**

3. **Conectar el iPhone** y hacer clic en el dispositivo

4. El UDID aparece claramente en la interfaz

### Método 3: 3uTools (Alternativa gratuita)

1. **Descargar 3uTools**:
   - http://www.3u.com/
   - Herramienta gratuita muy popular

2. **Conectar el iPhone** al PC

3. El UDID se muestra en la pantalla principal

---

## 🔐 PASO 3: CONFIGURACIÓN EN APPLE DEVELOPER

### 3.1 Acceder al Portal

1. Ve a: https://developer.apple.com/account
2. Inicia sesión con tu Apple ID
3. Verifica que tienes una suscripción activa de Apple Developer Program ($99/año)

### 3.2 Registrar el Bundle ID (App ID)

1. **Ir a "Certificates, Identifiers & Profiles"**

2. **Seleccionar "Identifiers"** en el menú izquierdo

3. **Clic en el botón "+" (agregar)**

4. **Seleccionar "App IDs"** → Continue

5. **Configurar el App ID:**
   ```
   Platform: iOS
   Description: Retro24 Camera App
   Bundle ID: Explicit
   Bundle ID: com.adrianargaiz.retro24
   ```

6. **Capabilities (opcional por ahora):**
   - Puedes dejar las opciones por defecto
   - Más adelante activarás las que necesites (Camera, Push Notifications, etc.)

7. **Clic en "Continue" y luego "Register"**

---

### 3.3 Registrar el Dispositivo (iPhone)

1. **En el portal, ir a "Devices"**

2. **Clic en el botón "+" (agregar)**

3. **Ingresar datos del iPhone:**
   ```
   Platform: iOS
   Device Name: iPhone de Adrian (o el nombre que quieras)
   Device ID (UDID): [pegar el UDID que copiaste]
   ```

4. **Clic en "Continue" y luego "Register"**

---

### 3.4 Crear Certificado de Desarrollo

#### Opción A: Generar CSR desde Windows (más complejo)

**NO RECOMENDADO** - Requiere OpenSSL en Windows

#### Opción B: Usar Appflow para gestionar certificados (RECOMENDADO)

**Ionic Appflow puede gestionar esto automáticamente. Sigue al Paso 4 directamente.**

---

### 3.5 Crear Provisioning Profile (Manual)

**NOTA:** Appflow puede generar esto automáticamente. Si prefieres hacerlo manual:

1. **En el portal, ir a "Profiles"**

2. **Clic en el botón "+" (agregar)**

3. **Seleccionar "iOS App Development"** → Continue

4. **Seleccionar el App ID:**
   - Busca y selecciona `com.adrianargaiz.retro24`
   - Continue

5. **Seleccionar certificados:**
   - Marca el certificado de desarrollo que tienes
   - Continue

6. **Seleccionar dispositivos:**
   - Marca tu iPhone registrado
   - Continue

7. **Nombre del perfil:**
   ```
   Provisioning Profile Name: Retro24 Development
   ```

8. **Generate y descargar** el archivo `.mobileprovision`

---

## 🏗️ PASO 4: CONFIGURAR BUILD EN APPFLOW

### 4.1 Acceder a Appflow Dashboard

1. Ve a: https://dashboard.ionicframework.com/
2. Inicia sesión
3. Selecciona tu app "Retro24"

### 4.2 Subir Certificados y Provisioning Profile

1. **En el dashboard, ir a "Settings" → "Certificates"**

2. **Clic en "Add Certificate"**

3. **Seleccionar tipo:**
   - Type: **iOS Development**
   - Usar asistente de Appflow para generar certificado

4. **O subir manualmente:**
   - Subir tu `.p12` file (certificado)
   - Subir tu `.mobileprovision` file (perfil de aprovisionamiento)
   - Ingresar password del certificado

### 4.3 Configurar Build

1. **Ir a "Builds" en el menú izquierdo**

2. **Clic en "New Build"**

3. **Configurar:**
   ```
   Commit: Latest commit (main branch)
   Target Platform: iOS
   Build Type: Development
   Certificate: [Selecciona el que subiste]
   Provisioning Profile: [Selecciona el que subiste]
   ```

4. **Clic en "Build"**

5. **Esperar** (5-15 minutos aproximadamente)

---

## 📲 PASO 5: INSTALAR EN EL iPHONE

### 5.1 Una vez completado el build

1. En Appflow, verás el build completado con estado "Success"

2. **Opciones de instalación:**

#### Opción A: Instalar via QR Code (Más fácil)
- Clic en "Download" → "Install on Device"
- Escanea el QR con tu iPhone
- Sigue las instrucciones en pantalla

#### Opción B: Descargar IPA y usar iTunes
- Clic en "Download IPA"
- Usa iTunes o iMazing para instalar el `.ipa` en tu iPhone

#### Opción C: TestFlight (Para distribución más amplia)
- Requiere configuración adicional en App Store Connect
- Más complejo pero mejor para testing con múltiples usuarios

---

## 🔍 PASO 6: VERIFICACIÓN FINAL

### En tu iPhone:

1. **Si ves error "Untrusted Developer":**
   ```
   Settings → General → VPN & Device Management
   → [Tu nombre de desarrollador]
   → Trust
   ```

2. **Abrir la app Retro24**

3. **Verificar que funciona:**
   - Debe aparecer la pantalla Welcome
   - El diseño debe verse correcto
   - El botón "Let's Start" debe funcionar

---

## 📊 COMANDOS DE RESUMEN

```bash
# Ubicación del proyecto
cd C:\Proyectos\photoparty\retro24

# Verificar estado de Git
git status
git remote -v

# Verificar configuración de Ionic
ionic info

# Ver builds en Appflow (abre el navegador)
ionic dashboard

# Push de cambios futuros
git add .
git commit -m "Tu mensaje"
git push origin main        # Sube a GitHub
git push ionic main         # Sube a Appflow (trigger build)
```

---

## 🎯 DATOS IMPORTANTES PARA REFERENCIA

```
Bundle ID: com.adrianargaiz.retro24
App Name: Retro24
GitHub: https://github.com/adrianargaiz/retro24.git
Git User: adrianargaiz
Git Email: adrian.argaiz.martinez@gmail.com
```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### "ionic: command not found"
```bash
npm install -g @ionic/cli
```

### "git: command not found"
Instala Git for Windows: https://git-scm.com/download/win

### "Cannot find module..."
```bash
cd C:\Proyectos\photoparty\retro24
rm -rf node_modules package-lock.json
npm install
```

### Build falla en Appflow
- Verifica que el Bundle ID coincide en `capacitor.config.ts`
- Verifica que los certificados no hayan expirado
- Revisa los logs del build en Appflow dashboard

### App no se instala en iPhone
- Verifica que el UDID del iPhone está registrado en el provisioning profile
- Verifica que el certificado es de tipo "Development"
- Trust el perfil de desarrollador en el iPhone (Settings)

---

## 📚 RECURSOS ADICIONALES

- **Ionic Appflow Docs**: https://ionic.io/docs/appflow
- **Capacitor iOS Docs**: https://capacitorjs.com/docs/ios
- **Apple Developer Portal**: https://developer.apple.com/account
- **Ionic Forum**: https://forum.ionicframework.com/

---

## ✅ CHECKLIST COMPLETO

- [x] Git configurado localmente
- [x] Repositorio GitHub creado y conectado
- [x] Commit inicial pusheado
- [x] Bundle ID actualizado a `com.adrianargaiz.retro24`
- [x] Capacitor iOS instalado
- [ ] Login en Ionic Appflow
- [ ] Proyecto vinculado a Appflow
- [ ] UDID del iPhone obtenido
- [ ] Bundle ID registrado en Apple Developer
- [ ] iPhone registrado en Apple Developer
- [ ] Certificado de desarrollo creado
- [ ] Provisioning profile creado
- [ ] Certificados subidos a Appflow
- [ ] Primer build generado en Appflow
- [ ] App instalada en iPhone físico
- [ ] App funciona correctamente en el dispositivo

---

**Última actualización:** 2025-11-04
**Estado:** Listo para vincular con Appflow
