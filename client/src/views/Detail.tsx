import { Content } from 'antd/lib/layout/layout'
import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

export const Detail: FC = () => {
  const params = useParams()

  return (
    <Content style={{ padding: '20px 50px' }}>
      <Link to={'/'}>
        <Button>
          <ArrowLeftOutlined />
          Назад
        </Button>
      </Link>
      <h1>Детальная страница</h1>
      <h3>Идентификатор страницы: {params.id}</h3>
    </Content>
  )
}
