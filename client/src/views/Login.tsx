import { Form, Input, Button, message } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import httpClient from '../http-client'
import { STRAPI_ADDRESS } from '../http-client/constants'
import appState from '../store/appState'
import { useAuthGuard } from '../hooks/useAuthGuard'
import { observer } from 'mobx-react-lite'

interface IAuthFormValues {
  identifier: string
  password: string
}

export const Login: FC = observer(() => {
  const navigate = useNavigate()

  useAuthGuard(appState.isUserLoaded, appState.user)

  const onFinish = async (values: IAuthFormValues) => {
    try {
      const authRequest = await httpClient.post(
        `${STRAPI_ADDRESS}/api/auth/local/`,
        { ...values },
      )

      if (authRequest.status === 200) {
        localStorage.setItem('access_token', authRequest.data.jwt)

        const userRequest = await httpClient.get(
          `${STRAPI_ADDRESS}/api/users/me/?populate=role`,
        )

        message.info(`Вы вошли как ${userRequest.data.role.name}`, 3)

        appState.setUser(userRequest.data)

        navigate('/')
      }
    } catch (error) {
      message.error('Введены неверные данные', 3)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Form
        name="auth"
        onFinish={onFinish}
        layout="vertical"
        style={{
          width: 400,
          maxWidth: 'calc(100vw - 16px)',
          padding: 40,
          background: '#fff',
        }}
      >
        <Form.Item
          label="Имя пользователя"
          name="identifier"
          rules={[{ required: true, message: 'Поле обязательно' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Поле обязательно' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Подтвердить
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})
