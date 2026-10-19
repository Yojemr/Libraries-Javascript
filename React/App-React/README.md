# React Lab — Landing interactivo

Ejemplo educativo construido con **React 19 y Vite 8**. La interfaz conserva el contador, los enlaces a React/Vite y el enfoque del proyecto original, ahora organizada por funcionalidades.

## Requisitos y ejecución

- Node.js compatible con Vite 8 (Node 20.19+ o 22.12+).
- Desde la carpeta `React/App-React`:

```bash
npm ci
npm run dev
```

Abre la URL local que muestra Vite. Para comprobar y previsualizar la compilación:

```bash
npm run lint
npm run build
npm run preview
```

No se configura el inicio automático del servidor.

## Funcionalidades

- Presentación del ecosistema React y Vite con componentes reutilizables.
- Seis fundamentos: componentes, JSX, props, estado, eventos y HMR.
- Laboratorio con contador interactivo basado en `useState` y ejemplos de código seleccionables.
- Documentación oficial de React, Vite y React Developer Tools.
- Diseño adaptable, navegación mediante anclas, etiquetas accesibles y respeto por el movimiento reducido.

## Arquitectura Feature-Based

```text
src/
  App.jsx
  App.css
  index.css
  main.jsx
  features/
    landing/
      Landing.jsx
      landing.css
      components/
        Navbar.jsx
        Hero.jsx
        FeatureCard.jsx
        Features.jsx
        CounterDemo.jsx
        CodePlayground.jsx
        Resources.jsx
        Footer.jsx
```

`App.jsx` monta `Landing.jsx`, que compone las secciones. Cada componente tiene una responsabilidad. Las imágenes originales siguen en `src/assets`.

## PWA

La aplicación incorpora un manifest (`public/manifest.webmanifest`) y un service worker básico (`public/sw.js`). No utiliza `vite-plugin-pwa`, ya que faltaba en las dependencias y lockfile. El registro del service worker solo se hace en producción, bajo HTTPS o localhost.

Para probar producción usa `npm run build` y `npm run preview`. Los recursos se almacenan conforme se cargan: el modo sin conexión requiere que los archivos se hayan visitado previamente. La posibilidad de instalación depende del navegador y del soporte para iconos SVG.

## Directorio de repaso

`React/Repaso javascript` permanece separado y no forma parte del landing.
