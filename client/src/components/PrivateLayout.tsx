import { FC } from 'react'
import { HeaderComponent } from './HeaderComponent'
import { Outlet } from 'react-router-dom'
import { useAuthGuard } from '../hooks/useAuthGuard'
import { observer } from 'mobx-react-lite'
import appState from '../store/appState'

export const PrivateLayout: FC = observer(() => {
  useAuthGuard(appState.isUserLoaded, appState.user)

  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  )
})
