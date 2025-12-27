import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getCredits, syncCreditsFromPurchases } from '../utils/credits'
import { getPurchases } from '../utils/purchases'
import { getUserId, isLoggedIn } from '../utils/auth'
import { formatPrice } from '../data/products'
import Countdown from './Countdown'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()
  const [credits, setCredits] = useState(0)
  const [loggedIn, setLoggedIn] = useState(false)
  
  // Normalizar el pathname removiendo el base path de GitHub Pages
  const normalizePath = (pathname) => {
    return pathname.replace(/^\/lucky-box/, '') || '/'
  }
  
  const currentPath = normalizePath(location.pathname)

  // Verificar estado de sesión y actualizar créditos
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = isLoggedIn()
      setLoggedIn(authStatus)
      
      if (authStatus) {
        const userId = getUserId()
        if (userId) {
          const purchases = getPurchases(userId)
          syncCreditsFromPurchases(purchases)
        }
        setCredits(getCredits())
      } else {
        setCredits(0)
      }
    }
    
    // Verificar inmediatamente
    checkAuth()
    
    // Verificar periódicamente para detectar cambios de sesión
    const interval = setInterval(checkAuth, 500)
    
    return () => clearInterval(interval)
  }, [location.pathname])

  return (
    <div className="layout">
      <header className="navbar">
        <Link to="/" className="navbar-logo">
          <h1 className="logo">LuckyBox</h1>
        </Link>
        
        {loggedIn ? (
          <div className="navbar-credits">
            <span className="credits-label">Créditos:</span>
            <span className="credits-amount">{formatPrice(credits)}</span>
          </div>
        ) : (
          <Link to="/profile" className="navbar-login-button">
            Iniciar Sesión
          </Link>
        )}
      </header>
      <Countdown />
      <nav className="floating-menu">
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-item ${currentPath === '/' ? 'active' : ''}`}
            title="Inicio"
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="nav-tooltip">Inicio</span>
            <span className="nav-glow"></span>
          </Link>
          <Link 
            to="/catalog" 
            className={`nav-item ${currentPath === '/catalog' || currentPath.startsWith('/product/') ? 'active' : ''}`}
            title="Catálogo"
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="nav-tooltip">Catálogo</span>
            <span className="nav-glow"></span>
          </Link>
          <Link 
            to="/cart" 
            className={`nav-item ${currentPath === '/cart' || currentPath === '/checkout' ? 'active' : ''}`}
            title="Carrito"
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="nav-tooltip">Carrito</span>
            <span className="nav-glow"></span>
          </Link>
          <Link 
            to="/history" 
            className={`nav-item ${currentPath === '/history' || currentPath.startsWith('/purchases/') ? 'active' : ''}`}
            title="Historial"
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="nav-tooltip">Historial</span>
            <span className="nav-glow"></span>
          </Link>
          <Link 
            to="/profile" 
            className={`nav-item ${currentPath === '/profile' ? 'active' : ''}`}
            title="Perfil"
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="nav-tooltip">Perfil</span>
            <span className="nav-glow"></span>
          </Link>
        </div>
      </nav>
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 LuckyBox. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
