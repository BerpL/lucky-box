import './Page.css'

function Home() {
  return (
    <div className="page">
      <h1>Bienvenido</h1>
      <p className="lead">
        Esta es una aplicación de página única (SPA) desarrollada con React.
      </p>
      <div className="content">
        <section className="section">
          <h2>Características</h2>
          <ul>
            <li>Navegación mediante React Router</li>
            <li>Interfaz de usuario moderna y responsive</li>
            <li>Arquitectura de componentes reutilizables</li>
            <li>Optimización de rendimiento</li>
          </ul>
        </section>
        <section className="section">
          <h2>Información</h2>
          <p>
            Esta aplicación demuestra las capacidades de una Single Page Application
            utilizando React como biblioteca principal. La navegación se realiza sin
            recargar la página completa, proporcionando una experiencia de usuario fluida.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Home

