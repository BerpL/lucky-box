import { getUserId } from './auth'

const CREDITS_STORAGE_KEY = 'luckybox_credits'

export const getCredits = () => {
  try {
    const userId = getUserId()
    if (!userId) return 0
    
    const creditsData = localStorage.getItem(CREDITS_STORAGE_KEY)
    if (!creditsData) return 0
    
    const credits = JSON.parse(creditsData)
    return credits[userId] || 0
  } catch {
    return 0
  }
}

export const addCredits = (amount) => {
  try {
    const userId = getUserId()
    if (!userId) return false
    
    const creditsData = localStorage.getItem(CREDITS_STORAGE_KEY)
    const credits = creditsData ? JSON.parse(creditsData) : {}
    
    credits[userId] = (credits[userId] || 0) + amount
    localStorage.setItem(CREDITS_STORAGE_KEY, JSON.stringify(credits))
    return true
  } catch {
    return false
  }
}

export const subtractCredits = (amount) => {
  try {
    const userId = getUserId()
    if (!userId) return false
    
    const creditsData = localStorage.getItem(CREDITS_STORAGE_KEY)
    const credits = creditsData ? JSON.parse(creditsData) : {}
    
    const currentCredits = credits[userId] || 0
    if (currentCredits < amount) {
      return false // No hay suficientes créditos
    }
    
    credits[userId] = currentCredits - amount
    localStorage.setItem(CREDITS_STORAGE_KEY, JSON.stringify(credits))
    return true
  } catch {
    return false
  }
}

export const hasEnoughCredits = (amount) => {
  const currentCredits = getCredits()
  return currentCredits >= amount
}

// Sincronizar créditos basándose en las compras existentes
// Calcula: créditos ganados (de items abiertos) - créditos gastados (de compras pagadas con créditos)
export const syncCreditsFromPurchases = (purchases) => {
  try {
    const userId = getUserId()
    if (!userId) return false
    
    let creditsEarned = 0
    let creditsSpent = 0
    
    // Recorrer todas las compras
    purchases.forEach(purchase => {
      if (purchase.userId === userId) {
        // Sumar créditos gastados si se pagó con créditos
        if (purchase.paidWithCredits && purchase.creditsAmount) {
          creditsSpent += purchase.creditsAmount
        }
        
        // Sumar créditos ganados de items abiertos
        if (purchase.items) {
          purchase.items.forEach(item => {
            if (item.openedItems && item.openedItems.length > 0) {
              item.openedItems.forEach(openedItem => {
                if (openedItem.name && openedItem.name.includes('Créditos LuckyBox')) {
                  creditsEarned += openedItem.price || 0
                }
              })
            }
          })
        }
      }
    })
    
    // Calcular saldo final: créditos ganados - créditos gastados
    const totalCredits = creditsEarned - creditsSpent
    
    // Guardar los créditos calculados
    const creditsData = localStorage.getItem(CREDITS_STORAGE_KEY)
    const credits = creditsData ? JSON.parse(creditsData) : {}
    credits[userId] = Math.max(0, totalCredits) // Asegurar que no sea negativo
    localStorage.setItem(CREDITS_STORAGE_KEY, JSON.stringify(credits))
    
    return true
  } catch {
    return false
  }
}

