import 'antd/dist/antd.min.css'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import { QueryClient, QueryClientProvider } from 'react-query'
import './styles/globals.scss'

export const queryClient = new QueryClient()

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
