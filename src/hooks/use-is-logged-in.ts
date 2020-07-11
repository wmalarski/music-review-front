import useLocalStorage from './use-local-storage'

export default function useIsLoggedId(): boolean {
  const [token] = useLocalStorage('token', {})
  return token?.token !== undefined
}
