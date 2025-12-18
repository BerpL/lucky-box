# Guía de Despliegue en GitHub Pages

## ⚠️ IMPORTANTE: Configuración de GitHub Pages

**CRÍTICO**: Debes configurar GitHub Pages para usar **GitHub Actions**, NO la rama main directamente.

### Pasos de Configuración:

1. Ve a tu repositorio en GitHub: https://github.com/BerpL/lucky-box
2. Ve a **Settings** > **Pages**
3. En la sección **Source**, selecciona **GitHub Actions** (NO "Deploy from a branch")
4. Si no aparece la opción "GitHub Actions", primero ejecuta el workflow manualmente o haz un push
5. Guarda los cambios

## Despliegue Automático

El proyecto está configurado para desplegarse automáticamente cuando hagas push a la rama `main`.

### Pasos:

1. Los cambios se suben automáticamente con:
```bash
git add .
git commit -m "Tu mensaje"
git push origin main
```

2. GitHub Actions construirá y desplegará automáticamente desde la carpeta `dist/`
3. Tu sitio estará disponible en: `https://berpl.github.io/lucky-box/`

## Verificación del Deployment

Después de cada push, verifica:
1. Ve a la pestaña **Actions** en GitHub
2. Espera a que el workflow "Deploy to GitHub Pages" complete
3. Verifica que todos los pasos sean exitosos (✓)
4. El sitio debería estar disponible en unos minutos

## Notas Importantes

- El base path está configurado como `/lucky-box/` en `vite.config.js`
- Si cambias el nombre del repositorio, actualiza el `base` en `vite.config.js`
- El archivo `404.html` permite que las rutas de React Router funcionen correctamente
- El despliegue puede tardar 1-2 minutos en completarse
- **NO uses "Deploy from a branch"** - esto servirá el código fuente en lugar del build compilado

## Solución de Problemas

### Error: "Failed to load module script"
- **Causa**: GitHub Pages está sirviendo el `index.html` fuente en lugar del compilado
- **Solución**: Asegúrate de que GitHub Pages esté configurado para usar **GitHub Actions**, no la rama main

### El sitio no se actualiza
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
- Verifica que el workflow de GitHub Actions haya completado exitosamente
- Espera 1-2 minutos después del deployment
