# 🚀 COMANDOS PARA EJECUTAR - Siguientes Pasos

## ✅ YA COMPLETADO

```bash
# Git y GitHub - ✅ HECHO
git config --global user.email "adrian.argaiz.martinez@gmail.com"
git config --global user.name "adrianargaiz"
git commit -m "Initial commit: Retro24 app with Welcome screen and iOS platform"
git branch -M main
git remote add origin https://github.com/adrianargaiz/retro24.git
git push -u origin main

# Bundle ID actualizado a: com.adrianargaiz.retro24 ✅
```

---

## 📱 PASO 1: VINCULAR CON APPFLOW

### Abre tu terminal (CMD, PowerShell o Git Bash) y ejecuta:

```bash
cd C:\Proyectos\photoparty\retro24
```

### Comando 1: Login en Ionic
```bash
ionic login
```

**Introduce:**
- Email: `adrian.argaiz.martinez@gmail.com`
- Password: `[tu contraseña de Ionic Appflow]`

**Resultado esperado:**
```
[OK] You are logged in!
```

---

### Comando 2: Vincular el proyecto
```bash
ionic link
```

**Responde a los prompts:**
1. Si pregunta "Would you like to create a new app?" → **Y**
2. App name → **Retro24**
3. App type → **Production** (selecciona con flechas)

**Resultado esperado:**
```
[OK] Your app has been linked to Ionic Appflow!
App ID: xxxxxxxx
```

---

### Comando 3: Añadir remote de Appflow
```bash
ionic git remote
```

**Resultado esperado:**
```
[OK] Added remote ionic.
```

---

### Comando 4: Verificar
```bash
git remote -v
```

**Deberías ver:**
```
ionic   https://git.ionicjs.com/[app-id].git (fetch)
ionic   https://git.ionicjs.com/[app-id].git (push)
origin  https://github.com/adrianargaiz/retro24.git (fetch)
origin  https://github.com/adrianargaiz/retro24.git (push)
```

---

## 🍎 PASO 2: OBTENER UDID DEL iPHONE

### Opción A: iTunes (Recomendado)

1. **Conecta tu iPhone al PC** con cable USB

2. **Abre iTunes**

3. **Haz clic en el ícono del iPhone** (arriba a la izquierda)

4. **En "General" → haz clic varias veces en "Número de serie"**
   - Cambiará a mostrar "UDID"
   - Formato: `00008030-XXXXXXXXXXXX` (40 caracteres hexadecimales)

5. **Clic derecho sobre el UDID → "Copiar UDID"**

6. **Guarda el UDID** en un archivo de texto o en un lugar seguro

### Opción B: iMazing (si no tienes iTunes)

1. Descarga iMazing: https://imazing.com/download
2. Conecta el iPhone
3. El UDID se muestra directamente en la interfaz

---

## 🔐 PASO 3: APPLE DEVELOPER PORTAL

### 3.1 Registrar Bundle ID

1. Ve a: **https://developer.apple.com/account**

2. Navega a: **Certificates, Identifiers & Profiles**

3. Selecciona: **Identifiers** → Botón **"+"**

4. Configura:
   ```
   Type: App IDs
   Platform: iOS
   Description: Retro24 Camera App
   Bundle ID (Explicit): com.adrianargaiz.retro24
   ```

5. **Continue** → **Register**

### 3.2 Registrar tu iPhone

1. En el portal, ve a: **Devices**

2. Clic en botón **"+"**

3. Introduce:
   ```
   Platform: iOS
   Device Name: iPhone de Adrian
   Device ID (UDID): [pega aquí el UDID que copiaste]
   ```

4. **Continue** → **Register**

---

## 🏗️ PASO 4: CONFIGURAR BUILD EN APPFLOW

### 4.1 Acceder al Dashboard

1. Ve a: **https://dashboard.ionicframework.com/**

2. Inicia sesión (usa las mismas credenciales de `ionic login`)

3. Selecciona tu app: **Retro24**

### 4.2 Gestión de Certificados (Appflow te ayuda)

**Opción Recomendada: Usar Appflow Certificate Signing**

1. En el dashboard → **Settings** → **Certificates**

2. Sigue el asistente de Appflow para:
   - Generar certificado de desarrollo
   - Crear provisioning profile automáticamente
   - Appflow se encarga de todo el proceso tedioso

3. Proporciona cuando se solicite:
   - Apple ID
   - Password de Apple Developer
   - Appflow descargará y configurará todo

### 4.3 Crear el Primer Build

1. En el dashboard → **Builds**

2. Clic en **"New Build"**

3. Configura:
   ```
   Commit: Latest (main branch)
   Target Platform: iOS
   Build Type: Development
   Certificate: [El que Appflow generó]
   ```

4. Clic en **"Build"**

5. **Espera 5-15 minutos** mientras Appflow compila tu app

---

## 📲 PASO 5: INSTALAR EN EL iPHONE

### Una vez que el build termine con éxito:

1. En Appflow, verás el build marcado como **"Success"**

2. Clic en el build → **"Download"**

3. **Opciones:**

#### Opción A: QR Code (Más fácil)
- Clic en **"Install on Device"**
- Escanea el QR con la cámara de tu iPhone
- Sigue las instrucciones en pantalla

#### Opción B: Descargar IPA
- Clic en **"Download IPA"**
- Usa iTunes o iMazing para instalar el archivo en tu iPhone

---

## 🔓 PASO 6: CONFIAR EN EL DESARROLLADOR (iPhone)

### Si al abrir la app ves "Untrusted Developer":

1. En tu iPhone: **Settings** (Ajustes)

2. **General** → **VPN & Device Management**

3. Bajo "DEVELOPER APP", verás tu nombre de Apple ID

4. Toca tu nombre → **"Trust [Tu nombre]"**

5. Confirma → **"Trust"**

6. **Ahora abre la app Retro24** y debería funcionar

---

## 🎉 PASO 7: VERIFICAR QUE TODO FUNCIONA

### En tu iPhone:

1. ✅ La app Retro24 se abre correctamente
2. ✅ Se ve la pantalla Welcome con el diseño correcto
3. ✅ El botón "Let's Start" responde
4. ✅ La navegación funciona

---

## 🔄 COMANDOS PARA FUTUROS CAMBIOS

```bash
# Cuando hagas cambios en el código:
cd C:\Proyectos\photoparty\retro24

# 1. Commit local
git add .
git commit -m "Descripción de tus cambios"

# 2. Push a GitHub
git push origin main

# 3. Push a Appflow (esto triggerea un nuevo build automáticamente)
git push ionic main

# 4. Ve al dashboard de Appflow para ver el progreso del build
ionic dashboard
```

---

## 📊 INFORMACIÓN DE REFERENCIA

```
Bundle ID: com.adrianargaiz.retro24
App Name: Retro24
GitHub Repo: https://github.com/adrianargaiz/retro24.git
Appflow Dashboard: https://dashboard.ionicframework.com/
Apple Developer: https://developer.apple.com/account
```

---

## 🆘 SI ALGO NO FUNCIONA

### Ionic CLI no encontrado
```bash
npm install -g @ionic/cli
```

### Ver información del sistema
```bash
ionic info
```

### Ver apps vinculadas
```bash
ionic apps
```

### Reautenticarse en Ionic
```bash
ionic logout
ionic login
```

### Ver el dashboard en el navegador
```bash
ionic dashboard
```

---

## 📞 SOPORTE

- **Ionic Appflow Docs**: https://ionic.io/docs/appflow
- **Ionic Forum**: https://forum.ionicframework.com/
- **Apple Developer Support**: https://developer.apple.com/support/

---

## ✅ CHECKLIST

```
Tareas completadas:
[x] Git configurado
[x] GitHub conectado
[x] Commit inicial subido
[x] Bundle ID actualizado
[x] Capacitor iOS instalado

Tareas pendientes:
[ ] ionic login
[ ] ionic link
[ ] ionic git remote
[ ] Obtener UDID del iPhone
[ ] Registrar Bundle ID en Apple Developer
[ ] Registrar iPhone en Apple Developer
[ ] Configurar certificados en Appflow
[ ] Generar primer build
[ ] Instalar en iPhone
[ ] Trust developer profile
[ ] Verificar app funciona
```

---

**¡IMPORTANTE!**

Guarda este archivo como referencia. Los pasos están en orden y son los comandos exactos que necesitas ejecutar.

**Siguiente comando a ejecutar:** `ionic login`
