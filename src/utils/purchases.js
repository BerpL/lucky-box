import { getUserId } from './auth'

const PURCHASES_STORAGE_KEY = 'luckybox_purchases'

export const getPurchases = (userId = null) => {
  try {
    const purchases = localStorage.getItem(PURCHASES_STORAGE_KEY)
    const allPurchases = purchases ? JSON.parse(purchases) : []
    
    // Si se proporciona un userId, filtrar por usuario
    if (userId) {
      return allPurchases.filter(p => p.userId === userId)
    }
    
    return allPurchases
  } catch {
    return []
  }
}

export const addPurchase = (cartItems, paidWithCredits = false, creditsAmount = 0) => {
  const userId = getUserId()
  if (!userId) {
    throw new Error('Usuario no autenticado')
  }
  
  const purchases = getPurchases()
  const purchaseId = Date.now().toString()
  
  const purchase = {
    id: purchaseId,
    userId: userId,
    date: new Date().toISOString(),
    items: cartItems.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: item.quantity,
      opened: false,
      openedItems: []
    })),
    paidWithCredits: paidWithCredits,
    creditsAmount: creditsAmount
  }
  
  purchases.push(purchase)
  localStorage.setItem(PURCHASES_STORAGE_KEY, JSON.stringify(purchases))
  return purchase
}

export const saveOpenedBox = (purchaseId, boxId, item) => {
  const purchases = getPurchases()
  const purchase = purchases.find(p => p.id === purchaseId)
  
  if (purchase) {
    const box = purchase.items.find(b => b.id === boxId)
    if (box) {
      if (!box.openedItems) {
        box.openedItems = []
      }
      box.openedItems.push({
        ...item,
        openedAt: new Date().toISOString()
      })
      localStorage.setItem(PURCHASES_STORAGE_KEY, JSON.stringify(purchases))
    }
  }
  
  return purchases
}

export const getUnopenedBoxes = () => {
  const purchases = getPurchases()
  const unopenedBoxes = []
  
  purchases.forEach(purchase => {
    purchase.items.forEach(item => {
      for (let i = 0; i < item.quantity; i++) {
        if (!item.opened || item.openedItems.length < item.quantity) {
          unopenedBoxes.push({
            purchaseId: purchase.id,
            boxId: item.id,
            boxName: item.name,
            boxImage: item.image,
            boxPrice: item.price,
            purchaseDate: purchase.date
          })
        }
      }
    })
  })
  
  return unopenedBoxes
}

