import { getProductById } from '../data/products'

// Función para seleccionar un item aleatorio basado en las probabilidades
export const openBox = (productId) => {
  const product = getProductById(productId)
  
  if (!product || !product.items || product.items.length === 0) {
    return null
  }

  // Generar un número aleatorio entre 0 y 100
  const random = Math.random() * 100
  
  // Acumular probabilidades para encontrar el item ganador
  let accumulatedProbability = 0
  
  for (const item of product.items) {
    accumulatedProbability += item.probability
    
    if (random <= accumulatedProbability) {
      return {
        ...item,
        openedAt: new Date().toISOString()
      }
    }
  }
  
  // Si por alguna razón no se seleccionó ningún item, devolver el último
  return {
    ...product.items[product.items.length - 1],
    openedAt: new Date().toISOString()
  }
}

