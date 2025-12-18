import './Page.css'

function About() {
  return (
    <div className="page">
      <h1>Acerca de</h1>
      <div className="content">
        <section className="section">
          <h2>Descripción del Proyecto</h2>
          <p>
            Este proyecto es una aplicación web de tipo Single Page Application (SPA)
            desarrollada utilizando React. El objetivo es demostrar las capacidades
            de desarrollo frontend moderno con tecnologías actuales.
          </p>
        </section>
        <section className="section">
          <h2>Tecnologías Utilizadas</h2>
          <ul>
            <li>React 18 - Biblioteca de JavaScript para construir interfaces</li>
            <li>React Router - Enrutamiento para aplicaciones React</li>
            <li>Vite - Herramienta de construcción y desarrollo</li>
            <li>CSS3 - Estilos y diseño responsive</li>
          </ul>
        </section>
        <section className="section">
          <h2>Estructura del Proyecto</h2>
          <p>
            El proyecto está organizado en componentes reutilizables, páginas para
            diferentes rutas, y estilos modulares. Esta estructura facilita el
            mantenimiento y la escalabilidad de la aplicación.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About

