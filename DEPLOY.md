# Guía de Despliegue en GitHub Pages

## Configuración Inicial

1. Ve a tu repositorio en GitHub: https://github.com/BerpL/lucky-box
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. Selecciona la rama **gh-pages** y la carpeta **/ (root)**
5. Guarda los cambios

## Despliegue Manual

Para desplegar tu aplicación:

```bash
npm run deploy
```

Este comando:
1. Construye el proyecto (`npm run build`)
2. Sube el contenido de `dist/` a la rama `gh-pages`
3. GitHub Pages automáticamente servirá el contenido

## Notas Importantes

- El base path está configurado como `/lucky-box/` en `vite.config.js`
- Si cambias el nombre del repositorio, actualiza el `base` en `vite.config.js`
- El archivo `404.html` se copia automáticamente durante el build
- El despliegue puede tardar unos minutos en completarse
- Tu sitio estará disponible en: `https://berpl.github.io/lucky-box/`
