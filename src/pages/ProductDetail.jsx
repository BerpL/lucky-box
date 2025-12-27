import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProductById, formatPrice, getRarityColor } from '../data/products'
import { addToCart } from '../utils/cart'
import './Page.css'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const [showProbabilities, setShowProbabilities] = useState(true)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="page">
        <h1>Producto no encontrado</h1>
        <Link to="/catalog" className="back-link">Volver al catálogo</Link>
      </div>
    )
  }

  // Función para obtener el orden de rareza (menor número = más raro)
  const getRarityOrder = (rarity) => {
    const rarityOrder = {
      'legendario': 1,
      'épico': 2,
      'raro': 3,
      'poco común': 4,
      'común': 5
    }
    return rarityOrder[rarity] || 99
  }

  // Ordenar por rareza (más raros primero), y si tienen la misma rareza, por probabilidad (menor primero)
  const sortedItems = [...product.items].sort((a, b) => {
    const rarityDiff = getRarityOrder(a.rarity) - getRarityOrder(b.rarity)
    if (rarityDiff !== 0) return rarityDiff
    return a.probability - b.probability
  })

  const handleAddToCart = () => {
    addToCart(product)
    setAddedToCart(true)
    setTimeout(() => {
      setAddedToCart(false)
    }, 2000)
  }

  return (
    <div className="page product-detail-page">
      <Link to="/catalog" className="back-link">← Volver al catálogo</Link>
      
      <div className="product-layout">
        <div className="product-content">
          <section className="section">
            <h2>¿Qué puedes encontrar dentro de esta Caja?</h2>
            <div className="probability-toggle">
              <label className="toggle-switch">
                <input 
                  type="checkbox"
                  checked={showProbabilities}
                  onChange={() => setShowProbabilities(!showProbabilities)}
                />
                <span className="toggle-slider"></span>
                <span className="toggle-label">Mostrar probabilidades</span>
              </label>
            </div>
            
            <div className="items-list">
            {sortedItems.map((item, index) => {
              const rarityColor = getRarityColor(item.rarity)
              return (
              <div 
                key={index} 
                className="item-row"
                style={{ '--rarity-color': rarityColor }}
              >
                {item.image && (
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                )}
                {showProbabilities && (
                <div className="item-probability">
                  {item.probability.toFixed(4)}%
                </div>
                )}
                <div className="item-info">
                  <div className="item-name-row">
                    <span className="item-name">{item.name}</span>
                    <span 
                      className="item-rarity"
                      style={{ 
                        color: getRarityColor(item.rarity),
                        borderColor: getRarityColor(item.rarity),
                        boxShadow: `0 0 10px ${getRarityColor(item.rarity)}40`
                      }}
                    >
                      {item.rarity}
                    </span>
                  </div>
                  <div className="item-price">{formatPrice(item.price)}</div>
                </div>
              </div>
              )
            })}
            </div>
          </section>
        </div>

        <div className="product-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <h3 className="sidebar-product-name">{product.name}</h3>
            <div className="product-pricing-large">
              {product.originalPrice && (
                <span className="product-original-price-large">{formatPrice(product.originalPrice)}</span>
              )}
              <div className="product-price-large">{formatPrice(product.price)}</div>
            </div>
            <button 
              className={`buy-button ${addedToCart ? 'added' : ''}`}
              onClick={handleAddToCart}
              disabled={addedToCart}
            >
              {addedToCart ? '✓ Agregado' : 'Agregar al Carrito'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
