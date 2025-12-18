# Guía de Despliegue en GitHub Pages

## Configuración Inicial

1. Ve a tu repositorio en GitHub: https://github.com/BerpL/lucky-box
2. Ve a **Settings** > **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Guarda los cambios

## Despliegue Automático

El proyecto está configurado para desplegarse automáticamente cuando hagas push a la rama `main`.

### Pasos:

1. Los cambios se suben automáticamente con:
```bash
git add .
git commit -m "Tu mensaje"
git push origin main
```

2. GitHub Actions construirá y desplegará automáticamente
3. Tu sitio estará disponible en: `https://berpl.github.io/lucky-box/`

## Despliegue Manual (Alternativa)

Si prefieres desplegar manualmente:

```bash
npm run deploy
```

Esto construirá el proyecto y lo subirá a la rama `gh-pages`.

## Notas Importantes

- El base path está configurado como `/lucky-box/` en `vite.config.js`
- Si cambias el nombre del repositorio, actualiza el `base` en `vite.config.js`
- El archivo `404.html` permite que las rutas de React Router funcionen correctamente
- El despliegue puede tardar unos minutos en completarse

