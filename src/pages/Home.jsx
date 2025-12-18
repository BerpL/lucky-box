import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import './Page.css'
import './Home.css'

// URL de la escena 3D de Spline
const SPLINE_SCENE_URL = "https://prod.spline.design/EabsweGUVw6zy3Ry/scene.splinecode"

function Home() {
  const [splineError, setSplineError] = useState(false)

  const handleSplineError = () => {
    setSplineError(true)
  }

  return (
    <div className="page home-page">
      <div className="home-hero">
        <div className="hero-content">
          <h1>Bienvenido a LuckyBox</h1>
          <p className="hero-subtitle">
            Descubre cajas misteriosas llenas de sorpresas. 
            Cada caja es una nueva aventura esperando ser descubierta.
          </p>
          <div className="hero-cta">
            <a href="/catalog" className="cta-button">
              Explorar Catálogo
            </a>
          </div>
        </div>
        {SPLINE_SCENE_URL && !splineError && (
          <div className="hero-3d">
            <Spline 
              scene={SPLINE_SCENE_URL}
              className="spline-container"
              onError={handleSplineError}
            />
          </div>
        )}
        {(!SPLINE_SCENE_URL || splineError) && (
          <div className="hero-3d placeholder-3d">
            <div className="placeholder-content">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Escena 3D</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
