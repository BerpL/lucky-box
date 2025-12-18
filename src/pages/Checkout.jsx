import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getCart, getCartTotal, clearCart } from '../utils/cart'
import { addPurchase, getPurchases } from '../utils/purchases'
import { isLoggedIn, getUserId } from '../utils/auth'
import { getCredits, hasEnoughCredits, syncCreditsFromPurchases } from '../utils/credits'
import { formatPrice } from '../data/products'
import './Page.css'
import './Checkout.css'

function Checkout() {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('card') // 'card' o 'credits'
  const [userCredits, setUserCredits] = useState(0)
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })
  const [errors, setErrors] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    // Verificar autenticación
    if (!isLoggedIn()) {
      navigate('/profile?redirect=checkout')
      return
    }
    setIsAuthenticated(true)
    
    const cart = getCart()
    if (cart.length === 0) {
      navigate('/cart')
      return
    }
    setCartItems(cart)
    setTotal(getCartTotal())
    setUserCredits(getCredits())
  }, [navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    let formattedValue = value
    
    // Formatear número de tarjeta (agregar espacios cada 4 dígitos, máximo 16 dígitos)
    if (name === 'cardNumber') {
      // Remover todos los espacios y caracteres no numéricos
      const numbers = value.replace(/\D/g, '')
      // Limitar a 16 dígitos
      const limitedNumbers = numbers.slice(0, 16)
      // Agregar espacios cada 4 dígitos
      formattedValue = limitedNumbers.replace(/(.{4})/g, '$1 ').trim()
    }
    
    // Formatear fecha de expiración (MM/AA) con máscara automática
    if (name === 'expiryDate') {
      // Remover todo excepto números
      const numbers = value.replace(/\D/g, '')
      // Limitar a 4 dígitos (2 para mes, 2 para año)
      const limitedNumbers = numbers.slice(0, 4)
      
      if (limitedNumbers.length === 0) {
        formattedValue = ''
      } else if (limitedNumbers.length <= 2) {
        // Solo mes
        formattedValue = limitedNumbers
      } else {
        // Mes y año con "/" automático
        formattedValue = limitedNumbers.slice(0, 2) + '/' + limitedNumbers.slice(2, 4)
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }))
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Validar datos de tarjeta solo si se paga con tarjeta
    if (paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = 'El número de tarjeta es requerido'
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'El número de tarjeta debe tener 16 dígitos'
      }
      if (!formData.cardName.trim()) {
        newErrors.cardName = 'El nombre en la tarjeta es requerido'
      }
      if (!formData.expiryDate.trim()) {
        newErrors.expiryDate = 'La fecha de expiración es requerida'
      } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = 'Formato: MM/AA'
      }
      if (!formData.cvv.trim()) {
        newErrors.cvv = 'El CVV es requerido'
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = 'El CVV debe tener 3 o 4 dígitos'
      }
    } else if (paymentMethod === 'credits') {
      if (!hasEnoughCredits(total)) {
        newErrors.credits = 'No tienes suficientes créditos'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsProcessing(true)
    
    let paidWithCredits = false
    let creditsAmount = 0
    
    // Si se paga con créditos, verificar que tenga suficientes
    if (paymentMethod === 'credits') {
      if (!hasEnoughCredits(total)) {
        setErrors({ credits: 'No tienes suficientes créditos' })
        setIsProcessing(false)
        return
      }
      paidWithCredits = true
      creditsAmount = total
    } else {
      // Simular procesamiento de pago con tarjeta
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
    
    // Guardar la compra con información de pago
    const purchase = addPurchase(cartItems, paidWithCredits, creditsAmount)
    
    // Sincronizar créditos después de la compra (esto restará los créditos gastados)
    if (paidWithCredits) {
      const userId = getUserId()
      const purchases = getPurchases(userId)
      syncCreditsFromPurchases(purchases)
      setUserCredits(getCredits())
    }
    
    // Limpiar el carrito
    clearCart()
    
    // Redirigir a la página de cajas compradas
    navigate(`/purchases/${purchase.id}`)
  }

  if (cartItems.length === 0) {
    return null
  }

  return (
    <div className="page checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-layout">
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h2>Método de Pago</h2>
              
              {hasEnoughCredits(total) && (
                <div className="payment-method-selector">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Tarjeta de Crédito/Débito</span>
                  </label>
                  <label className="payment-option credits-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credits"
                      checked={paymentMethod === 'credits'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>
                      Créditos LuckyBox ({formatPrice(userCredits)} disponibles)
                    </span>
                  </label>
                </div>
              )}
              
              {paymentMethod === 'card' && (
                <>
              <div className="form-group">
                <label htmlFor="cardNumber">Número de Tarjeta *</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className={errors.cardNumber ? 'error' : ''}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  inputMode="numeric"
                />
                {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="cardName">Nombre en la Tarjeta *</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className={errors.cardName ? 'error' : ''}
                  placeholder="JUAN PEREZ"
                />
                {errors.cardName && <span className="error-message">{errors.cardName}</span>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Fecha de Expiración *</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className={errors.expiryDate ? 'error' : ''}
                    placeholder="MM/AA"
                    maxLength="5"
                    inputMode="numeric"
                  />
                  {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="cvv">CVV *</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className={errors.cvv ? 'error' : ''}
                    placeholder="123"
                    maxLength="4"
                  />
                  {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                </div>
              </div>
                </>
              )}
              
              {paymentMethod === 'credits' && (
                <div className="credits-payment-info">
                  <p>Pagarás con tus Créditos LuckyBox</p>
                  <p className="credits-balance">
                    Saldo disponible: <strong>{formatPrice(userCredits)}</strong>
                  </p>
                  {errors.credits && <span className="error-message">{errors.credits}</span>}
                </div>
              )}
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isProcessing}
            >
              {isProcessing ? 'Procesando...' : 'Confirmar Compra'}
            </button>
          </form>
        </div>

        <div className="checkout-summary-section">
          <div className="summary-card">
            <h2>Resumen de Compra</h2>
            <div className="summary-items">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="summary-item-info">
                    <span className="summary-item-name">{item.name}</span>
                    <span className="summary-item-quantity">x{item.quantity}</span>
                  </div>
                  <span className="summary-item-price">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
