import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getPurchases } from '../utils/purchases'
import { isLoggedIn, getUserId } from '../utils/auth'
import { formatPrice } from '../data/products'
import './Page.css'
import './PurchaseHistory.css'

function PurchaseHistory() {
  const navigate = useNavigate()
  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/profile?redirect=history')
      return
    }

    const userId = getUserId()
    const userPurchases = getPurchases(userId)
    // Ordenar por fecha más reciente primero
    userPurchases.sort((a, b) => new Date(b.date) - new Date(a.date))
    setPurchases(userPurchases)
  }, [navigate])

  const getTotalItems = (purchase) => {
    return purchase.items.reduce((sum, item) => sum + item.quantity, 0)
  }

  const getTotalPrice = (purchase) => {
    return purchase.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  const getOpenedBoxesCount = (purchase) => {
    return purchase.items.reduce((sum, item) => {
      return sum + (item.openedItems ? item.openedItems.length : 0)
    }, 0)
  }

  const getUnopenedBoxesCount = (purchase) => {
    return purchase.items.reduce((sum, item) => {
      const openedCount = item.openedItems ? item.openedItems.length : 0
      return sum + (item.quantity - openedCount)
    }, 0)
  }

  if (!isLoggedIn()) {
    return null
  }

  return (
    <div className="page purchase-history-page">
      <h1>Historial de Compras</h1>

      {purchases.length === 0 ? (
        <div className="empty-history">
          <p>No tienes compras realizadas</p>
          <Link to="/catalog" className="cta-button">Explorar Catálogo</Link>
        </div>
      ) : (
        <div className="purchases-list">
          {purchases.map(purchase => {
            const totalItems = getTotalItems(purchase)
            const totalPrice = getTotalPrice(purchase)
            const openedCount = getOpenedBoxesCount(purchase)
            const unopenedCount = getUnopenedBoxesCount(purchase)

            return (
              <div key={purchase.id} className="purchase-card">
                <div className="purchase-header">
                  <div className="purchase-info">
                    <h3>Compra #{purchase.id.slice(-6)}</h3>
                    <p className="purchase-date">
                      {new Date(purchase.date).toLocaleDateString('es-PE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="purchase-total">
                    <span className="total-label">Total</span>
                    <span className="total-price">{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                <div className="purchase-stats">
                  <div className="stat-item">
                    <span className="stat-label">Cajas</span>
                    <span className="stat-value">{totalItems}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Abiertas</span>
                    <span className="stat-value opened">{openedCount}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Por Abrir</span>
                    <span className="stat-value unopened">{unopenedCount}</span>
                  </div>
                </div>

                <div className="purchase-items-preview">
                  {purchase.items.slice(0, 3).map((item, index) => (
                    <div key={index} className="preview-item">
                      <img src={item.image} alt={item.name} />
                      <span className="preview-name">{item.name}</span>
                      <span className="preview-quantity">x{item.quantity}</span>
                    </div>
                  ))}
                  {purchase.items.length > 3 && (
                    <div className="preview-more">
                      +{purchase.items.length - 3} más
                    </div>
                  )}
                </div>

                <Link 
                  to={`/purchases/${purchase.id}`}
                  className="view-purchase-button"
                >
                  Ver Detalles
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default PurchaseHistory

