import { FC, useEffect } from 'react'
import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { Login } from './views/Login'
import { PrivateLayout } from './components/PrivateLayout'
import httpClient from './http-client'
import { STRAPI_ADDRESS } from './http-client/constants'
import appState from './store/appState'
import { Home } from './views/Home'
import { Detail } from './views/Detail'
import axios from 'axios'

const AppRouter: FC = () => {
  useEffect(() => {
    ;(async () => {
      try {
        const userResponse = await httpClient.get(
          `${STRAPI_ADDRESS}/api/users/me/?populate=role`,
        )

        if (userResponse.status === 200) {
          appState.setUser(userResponse.data)
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 401) {
            localStorage.removeItem('access_token')
          }
        }
      }

      appState.setIsUserLoaded(true)
    })()
  }, [])

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default AppRouter
