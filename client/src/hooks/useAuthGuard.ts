import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IUser } from '../store/appState'

export const useAuthGuard = (isUserLoaded: boolean, user: IUser | null) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (isUserLoaded) {
      if (user === null) {
        navigate('/login')
      } else if (user !== null && location.pathname === '/login') {
        navigate('/')
      }
    }
    // eslint-disable-next-line
  }, [isUserLoaded, user, navigate])
}
