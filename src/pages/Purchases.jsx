import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getPurchases, saveOpenedBox } from '../utils/purchases'
import { openBox as selectRandomItem } from '../utils/boxOpener'
import { isLoggedIn, getUserId } from '../utils/auth'
import { addCredits, syncCreditsFromPurchases } from '../utils/credits'
import { formatPrice, getRarityColor } from '../data/products'
import './Page.css'
import './Purchases.css'

function Purchases() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [purchase, setPurchase] = useState(null)
  const [openingBox, setOpeningBox] = useState(null)
  const [openedItem, setOpenedItem] = useState(null)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/profile?redirect=history')
      return
    }

    if (id) {
      const userId = getUserId()
      const purchases = getPurchases(userId)
      const foundPurchase = purchases.find(p => p.id === id)
      
      if (!foundPurchase) {
        navigate('/history')
        return
      }
      
      setPurchase(foundPurchase)
    }
  }, [id, navigate])

  const handleOpenBox = (purchaseId, boxId, boxName, boxImage) => {
    setOpeningBox({ purchaseId, boxId, boxName, boxImage })
    setShowResult(false)
    setOpenedItem(null)

    // Simular animación de apertura
    setTimeout(() => {
      const item = selectRandomItem(boxId)
      if (item) {
        setOpenedItem(item)
        saveOpenedBox(purchaseId, boxId, item)
        setShowResult(true)
        
        // Actualizar la compra
        const userId = getUserId()
        const purchases = getPurchases(userId)
        const updatedPurchase = purchases.find(p => p.id === purchaseId)
        if (updatedPurchase) {
          setPurchase(updatedPurchase)
        }
        
        // Sincronizar créditos desde todas las compras (incluye el nuevo item abierto)
        syncCreditsFromPurchases(getPurchases(userId))
      }
      setOpeningBox(null)
    }, 2000)
  }

  const getUnopenedBoxes = () => {
    if (!purchase) return []
    
    const unopenedBoxes = []
    purchase.items.forEach(item => {
      const openedCount = item.openedItems ? item.openedItems.length : 0
      const remaining = item.quantity - openedCount
      
      for (let i = 0; i < remaining; i++) {
        unopenedBoxes.push({
          purchaseId: purchase.id,
          boxId: item.id,
          boxName: item.name,
          boxImage: item.image,
          boxPrice: item.price
        })
      }
    })
    
    return unopenedBoxes
  }

  const getOpenedBoxes = () => {
    if (!purchase) return []
    
    const openedBoxes = []
    purchase.items.forEach(item => {
      if (item.openedItems && item.openedItems.length > 0) {
        item.openedItems.forEach(openedItem => {
          openedBoxes.push({
            purchaseId: purchase.id,
            boxId: item.id,
            boxName: item.name,
            boxImage: item.image,
            openedItem: openedItem
          })
        })
      }
    })
    
    return openedBoxes
  }

  if (!purchase) {
    return (
      <div className="page purchases-page">
        <h1>Compra no encontrada</h1>
        <Link to="/catalog" className="back-link">Volver al catálogo</Link>
      </div>
    )
  }

  const unopenedBoxes = getUnopenedBoxes()
  const openedBoxes = getOpenedBoxes()

  return (
    <div className="page purchases-page">
      <Link to="/catalog" className="back-link">← Volver al catálogo</Link>
      
      <div className="purchase-header">
        <h1>¡Compra Exitosa!</h1>
        <p className="purchase-date">
          Fecha: {new Date(purchase.date).toLocaleDateString('es-PE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>

      {openingBox && (
        <div className="opening-overlay">
          <div className="opening-animation">
            <div className="box-opening">
              <img src={openingBox.boxImage} alt={openingBox.boxName} />
            </div>
            <p>Abriendo caja...</p>
          </div>
        </div>
      )}

      {showResult && openedItem && (
        <div className="result-overlay" onClick={() => setShowResult(false)}>
          <div className="result-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-result" onClick={() => setShowResult(false)}>×</button>
            <h2>¡Felicidades!</h2>
            <div className="result-item">
              <div 
                className="result-rarity-badge"
                style={{ 
                  color: getRarityColor(openedItem.rarity),
                  borderColor: getRarityColor(openedItem.rarity),
                  boxShadow: `0 0 20px ${getRarityColor(openedItem.rarity)}40`
                }}
              >
                {openedItem.rarity.toUpperCase()}
              </div>
              <h3 className="result-item-name">{openedItem.name}</h3>
              <div className="result-item-price">{formatPrice(openedItem.price)}</div>
            </div>
          </div>
        </div>
      )}

      {unopenedBoxes.length > 0 && (
        <section className="section">
          <h2>Cajas por Abrir ({unopenedBoxes.length})</h2>
          <div className="boxes-grid">
            {unopenedBoxes.map((box, index) => (
              <div key={`${box.boxId}-${index}`} className="box-card unopened">
                <div className="box-image">
                  <img src={box.boxImage} alt={box.boxName} />
                </div>
                <h3 className="box-name">{box.boxName}</h3>
                <button
                  className="open-box-button"
                  onClick={() => handleOpenBox(box.purchaseId, box.boxId, box.boxName, box.boxImage)}
                  disabled={openingBox !== null}
                >
                  Abrir Caja
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {openedBoxes.length > 0 && (
        <section className="section">
          <h2>Cajas Abiertas ({openedBoxes.length})</h2>
          <div className="boxes-grid">
            {openedBoxes.map((box, index) => {
              const rarityColor = getRarityColor(box.openedItem.rarity)
              return (
                <div key={`opened-${box.boxId}-${index}`} className="box-card opened">
                  <div className="box-image">
                    <img src={box.boxImage} alt={box.boxName} />
                  </div>
                  <h3 className="box-name">{box.boxName}</h3>
                  <div className="opened-item-info">
                    <div 
                      className="item-rarity-badge"
                      style={{ 
                        color: rarityColor,
                        borderColor: rarityColor,
                        boxShadow: `0 0 15px ${rarityColor}40`
                      }}
                    >
                      {box.openedItem.rarity}
                    </div>
                    <div className="item-name">{box.openedItem.name}</div>
                    <div className="item-price">{formatPrice(box.openedItem.price)}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {unopenedBoxes.length === 0 && openedBoxes.length === 0 && (
        <div className="empty-purchase">
          <p>No hay cajas en esta compra</p>
        </div>
      )}
    </div>
  )
}

export default Purchases

