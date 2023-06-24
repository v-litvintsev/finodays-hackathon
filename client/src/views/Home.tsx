import { FC } from 'react'
import { Content } from 'antd/lib/layout/layout'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

export const Home: FC = () => {
  return (
    <Content style={{ padding: '20px 50px' }}>
      <h1>Домашняя страница</h1>
      <Link to={'/detail/1382'}>
        <Button>Детальная страница</Button>
      </Link>
    </Content>
  )
}
