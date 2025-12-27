const CART_STORAGE_KEY = 'luckybox_cart'

export const getCart = () => {
  try {
    const cart = localStorage.getItem(CART_STORAGE_KEY)
    return cart ? JSON.parse(cart) : []
  } catch {
    return []
  }
}

export const addToCart = (product) => {
  const cart = getCart()
  
  // Verificar si el producto ya está en el carrito
  const existingItem = cart.find(item => item.id === product.id)
  
  if (existingItem) {
    // Si ya existe, incrementar la cantidad
    existingItem.quantity += 1
  } else {
    // Si no existe, agregarlo con cantidad 1
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
  }
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  return cart
}

export const removeFromCart = (productId) => {
  const cart = getCart()
  const updatedCart = cart.filter(item => item.id !== productId)
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart))
  return updatedCart
}

export const updateCartItemQuantity = (productId, quantity) => {
  const cart = getCart()
  const updatedCart = cart.map(item => {
    if (item.id === productId) {
      return { ...item, quantity: Math.max(1, quantity) }
    }
    return item
  })
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart))
  return updatedCart
}

export const clearCart = () => {
  localStorage.removeItem(CART_STORAGE_KEY)
}

export const getCartTotal = () => {
  const cart = getCart()
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
}

export const getCartItemsCount = () => {
  const cart = getCart()
  return cart.reduce((count, item) => count + item.quantity, 0)
}


