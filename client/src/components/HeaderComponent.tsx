import { LogoutOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import appState from '../store/appState'
import { observer } from 'mobx-react-lite'

export const HeaderComponent: FC = observer(() => {
  const navigate = useNavigate()

  return (
    <Header
      style={{
        background: '#d9d9d9',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {appState.user?.username ?? 'Имя пользователя'}
      <div>
        <Button
          size="middle"
          type="primary"
          onClick={() => {
            localStorage.removeItem('access_token')
            appState.setUser(null)
            navigate('/login')
          }}
        >
          <LogoutOutlined />
        </Button>
      </div>
    </Header>
  )
})
