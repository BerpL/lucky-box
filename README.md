# LuckyBox - Tienda de Cajas Misteriosas

Aplicación web SPA (Single Page Application) desarrollada con React para la venta de cajas misteriosas.

## Descripción

LuckyBox es una tienda online donde los usuarios pueden explorar y comprar cajas misteriosas. La aplicación ofrece una experiencia de usuario moderna con un diseño dark theme y efectos visuales neón.

## Características

- **Navegación SPA**: Navegación fluida sin recargar la página
- **Sistema de autenticación**: Inicio de sesión con localStorage
- **Menú flotante**: Menú lateral con iconos SVG y tooltips
- **Diseño dark theme**: Tema oscuro con efectos neón y gradientes
- **Responsive**: Diseño adaptable a diferentes tamaños de pantalla
- **Carrito de compras**: Gestión de productos en el carrito
- **Perfil de usuario**: Gestión de cuenta y sesión

## Páginas

- **Home**: Página principal
- **Catálogo**: Listado de cajas misteriosas disponibles
- **Detalle de Producto**: Información detallada de cada caja
- **Carrito**: Productos agregados al carrito
- **Checkout**: Proceso de pago
- **Perfil**: Inicio de sesión y gestión de cuenta

## Tecnologías

- React 18
- React Router DOM
- Vite
- CSS3 (Variables CSS, Animaciones)

## Instalación

1. Instalar las dependencias:
```bash
npm install
```

2. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

3. Abrir el navegador en `http://localhost:3000`

## Credenciales de Acceso

Para iniciar sesión en la aplicación:
- **Email**: ejemplo
- **Contraseña**: ejemplo

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción

## Estructura del Proyecto

```
src/
  components/     # Componentes reutilizables (Layout, etc.)
  pages/          # Páginas de la aplicación
  App.jsx         # Componente principal con rutas
  main.jsx        # Punto de entrada
  index.css       # Estilos globales y variables CSS
```

## Características del Diseño

- Tema dark con colores neón (cian y magenta)
- Efectos de glassmorphism
- Animaciones suaves y transiciones
- Menú flotante con iconos SVG
- Tooltips informativos
- Gradientes animados

## Uso del Tema en Nuevos Componentes

El proyecto utiliza variables CSS para mantener la consistencia del tema. Al crear nuevos componentes, utiliza estas variables en lugar de valores hardcodeados.

### Variables de Color

```css
/* Colores principales */
--primary-color: #00f5ff;        /* Cian neón */
--primary-dark: #00d4ff;         /* Cian oscuro */
--primary-light: #5ff0ff;        /* Cian claro */
--secondary-color: #ff00ff;      /* Magenta neón */
--secondary-dark: #e600e6;       /* Magenta oscuro */
--accent-color: #ffd700;         /* Dorado */

/* Fondos */
--background-color: #0a0a0f;     /* Fondo base oscuro */
--background-gradient: linear-gradient(...);  /* Gradiente de fondo */
--surface-color: #1a1a2e;        /* Color de superficie */
--surface-hover: #252547;        /* Hover de superficie */

/* Textos */
--text-primary: #ffffff;         /* Texto principal */
--text-secondary: #b8b8d4;       /* Texto secundario */
--text-light: #8b8ba8;           /* Texto claro */

/* Bordes */
--border-color: #2d2d44;         /* Color de borde */
--border-glow: rgba(0, 245, 255, 0.3);  /* Brillo de borde */
```

### Variables de Sombras

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.5);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.6);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.7);
--shadow-neon: 0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.3);
```

### Ejemplo de Componente

```css
/* Componente.css */
.mi-componente {
  background: var(--surface-color);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
}

.mi-componente h2 {
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
}

.mi-componente p {
  color: var(--text-secondary);
}

.mi-boton {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.4);
  transition: all 0.3s;
}

.mi-boton:hover {
  box-shadow: 0 0 30px rgba(0, 245, 255, 0.6);
  filter: brightness(1.1);
}
```

### Mejores Prácticas

1. **Usa variables CSS**: Siempre utiliza `var(--variable-name)` en lugar de valores directos
2. **Fondos**: Usa `var(--surface-color)` para contenedores y `var(--background-gradient)` para el fondo general
3. **Textos**: Usa `var(--text-primary)` para texto principal y `var(--text-secondary)` para texto secundario
4. **Bordes**: Usa `var(--border-color)` para mantener consistencia
5. **Sombras**: Utiliza las variables de sombra según el nivel de elevación necesario
6. **Efectos neón**: Aplica `box-shadow` con colores neón para elementos interactivos
7. **Gradientes**: Usa gradientes con `var(--primary-color)` y `var(--secondary-color)` para elementos destacados

### Estructura de Archivo CSS

```css
/* Importa los estilos globales si es necesario */
@import '../index.css';

.mi-componente {
  /* Usa variables del tema */
  background: var(--surface-color);
  color: var(--text-primary);
  /* ... */
}
```

## Licencia

Este proyecto es de uso educativo.
