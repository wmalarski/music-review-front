export function isBrowser() {
  return typeof window !== 'undefined'
}

export function getToken(): string | null {
  if (!isBrowser()) {
    return null
  }
  const value = window.localStorage.getItem('token')
  if (!value) return null
  return JSON.parse(value)?.token
}
