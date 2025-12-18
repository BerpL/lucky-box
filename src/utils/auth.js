export const isLoggedIn = () => {
  const session = localStorage.getItem('luckybox_session')
  return session === 'true'
}

export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem('luckybox_user')
    return user ? JSON.parse(user) : null
  } catch {
    return null
  }
}

export const getUserId = () => {
  const user = getCurrentUser()
  return user ? user.email : null
}

