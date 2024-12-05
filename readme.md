# 🕵️‍♂️ **XenForo User Hider**  
¡Dile adiós a los usuarios que no quieres ver en tu XenForo! Esta extensión oculta automáticamente a los ignorados del ranking, los usuarios conectados y los que más reacciones tienen, porque... ¿quién necesita drama, verdad? 🚫🧍‍♂️  

---

## 🎉 **Características**  
- **API-Friendly**: Se conecta a la API de XenForo para detectar a tus usuarios ignorados.  
- **Modo Ninja**: Oculta nombres del ranking, usuarios conectados y más. No sabrán lo que pasó. 🥷  
- **Personalizable**: Configura la URL de tu API y tu API Key en la página de opciones.  
- **Plug & Play**: Bueno, más bien *Plug & Laugh*, pero tú entiendes. 😜  

---

## 🚀 **Cómo usarlo**  

### **1. Modifica el archivo `manifest.json`**  
Asegúrate de que la URL de tu API esté configurada correctamente. Porque sin API no hay fiesta, shur. 🥳  
```json
"host_permissions": ["https://tu-xenforo.com/*"]
```

### **2. Asegúrate de que tu API tenga un endpoint**  
Necesitas un endpoint para obtener la lista de usuarios ignorados, tipo:  
`GET https://tu-xenforo.com/api/ignored-users`.  
Si no lo tienes, ya sabes, toca hablar con el admin o hacer magia. 🔮  

### **3. Carga la extensión como un pro**  

- **En Chrome**:  
  1. Ve a `chrome://extensions`.  
  2. Activa el **modo desarrollador** (sí, ese botoncito de la esquina).  
  3. Carga la carpeta de tu proyecto y siéntete como un hacker de película. 🕶️  

- **En Firefox**:  
  1. Abre `about:debugging`.  
  2. Dale a "Cargar extensión temporal".  
  3. Elige la carpeta del proyecto y boom, listo para la acción. 💥  

### **4. ¡Disfruta del drama-free zone!**  
Tu foro estará limpio de esos usuarios que preferirías no ver. Porque ignorar no es suficiente, hay que eliminar visualmente. 😎  

---

## ⚙️ **Configuración**  
Puedes personalizar la API Key y la URL de la API desde la página de opciones:  
1. Haz clic derecho en la extensión.  
2. Ve a "Opciones".  
3. Configura tu **API Key** y **URL**, porque el control es tuyo, shur. 👑  

---

## 🐞 **Problemas conocidos**  
- Si la API falla, no es culpa nuestra, ¡habla con tu admin!  
- Firefox es un poco más *piqui*, así que no olvides recargar la extensión al reiniciar.  

---

## 🥳 **Contribuciones bienvenidas**  
¿Ideas para mejorar? ¿Quieres añadir más funciones? ¡Haz un PR y déjanos impresionados! 💡  

---

### **¡Descarga, configura y vive tu mejor vida en XenForo!** ✨
