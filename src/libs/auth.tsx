export function isBrowser() {
  return typeof window !== 'undefined'
}

export function getToken(): string | null {
  if (!isBrowser()) {
    return null
  }
  return window.localStorage.getItem('token')
}

export function setToken(token: string) {
  window.localStorage.setItem('token', token)
}

export function removeToken() {
  window.localStorage.removeItem('token')
}
