import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getCredits, syncCreditsFromPurchases } from '../utils/credits'
import { getPurchases } from '../utils/purchases'
import { getUserId } from '../utils/auth'
import { formatPrice } from '../data/products'
import './Page.css'
import './Profile.css'

const EXAMPLE_USER = {
  email: 'ejemplo',
  password: 'ejemplo'
}

function Profile() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState('')
  const [credits, setCredits] = useState(0)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    const session = localStorage.getItem('luckybox_session')
    if (session === 'true') {
      setIsLoggedIn(true)
      // Sincronizar créditos desde las compras existentes
      const userId = getUserId()
      if (userId) {
        const purchases = getPurchases(userId)
        syncCreditsFromPurchases(purchases)
      }
      setCredits(getCredits())
    }
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      // Actualizar créditos periódicamente
      const interval = setInterval(() => {
        setCredits(getCredits())
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isLoggedIn])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (formData.email === EXAMPLE_USER.email && formData.password === EXAMPLE_USER.password) {
      setIsLoggedIn(true)
      localStorage.setItem('luckybox_session', 'true')
      localStorage.setItem('luckybox_user', JSON.stringify({ email: EXAMPLE_USER.email }))
      setFormData({ email: '', password: '' })
      
      // Redirigir si hay un redirect en los parámetros
      const redirect = searchParams.get('redirect')
      if (redirect === 'checkout') {
        navigate('/checkout')
      } else if (redirect === 'history') {
        navigate('/history')
      }
    } else {
      setError('Credenciales incorrectas. Usa: ejemplo / ejemplo')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('luckybox_session')
    localStorage.removeItem('luckybox_user')
  }

  const getUserEmail = () => {
    const user = localStorage.getItem('luckybox_user')
    if (user) {
      try {
        return JSON.parse(user).email
      } catch {
        return 'ejemplo'
      }
    }
    return 'ejemplo'
  }

  return (
    <div className="page profile-page">
      <h1>Perfil</h1>
      <div className="profile-container">
        {!isLoggedIn ? (
          <div className="login-card">
            <div className="login-header">
              <div className="login-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>Iniciar Sesión</h2>
              <p className="login-subtitle">Accede a tu cuenta de LuckyBox</p>
            </div>
            <form className="login-form" onSubmit={handleLogin}>
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="ejemplo"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="ejemplo"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Iniciar Sesión
              </button>
            </form>
          </div>
        ) : (
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>Mi Perfil</h2>
              <p className="profile-welcome">Bienvenido a LuckyBox</p>
            </div>
            <div className="profile-info">
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">{getUserEmail()}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Miembro desde</span>
                <span className="info-value">2025</span>
              </div>
              <div className="info-item credits-item">
                <span className="info-label">Créditos LuckyBox</span>
                <span className="info-value credits-value">{formatPrice(credits)}</span>
              </div>
            </div>
            <div className="profile-actions">
              <button onClick={handleLogout} className="logout-btn">
                Cerrar Sesión
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
