import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCart, removeFromCart, updateCartItemQuantity, getCartTotal, clearCart } from '../utils/cart'
import { isLoggedIn } from '../utils/auth'
import { formatPrice } from '../data/products'
import './Page.css'
import './Cart.css'

function Cart() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    loadCart()
  }, [])

  const loadCart = () => {
    const cart = getCart()
    setCartItems(cart)
    setTotal(getCartTotal())
  }

  const handleRemoveItem = (productId) => {
    removeFromCart(productId)
    loadCart()
  }

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId)
    } else {
      updateCartItemQuantity(productId, newQuantity)
      loadCart()
    }
  }

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      clearCart()
      loadCart()
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="page cart-page">
        <h1>Carrito de Compras</h1>
        <div className="empty-cart">
          <p>Tu carrito está vacío</p>
          <Link to="/catalog" className="cta-button">Explorar Catálogo</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page cart-page">
      <div className="cart-header">
        <h1>Carrito de Compras</h1>
        {cartItems.length > 0 && (
          <button className="clear-cart-button" onClick={handleClearCart}>
            Vaciar Carrito
          </button>
        )}
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <div className="cart-item-price">{formatPrice(item.price)}</div>
              </div>
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  {formatPrice(item.price * item.quantity)}
                </div>
                <button 
                  className="remove-item-button"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h2>Resumen</h2>
            <div className="summary-row">
              <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button 
              className="checkout-button"
              onClick={() => {
                if (!isLoggedIn()) {
                  navigate('/profile?redirect=checkout')
                } else {
                  navigate('/checkout')
                }
              }}
            >
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
