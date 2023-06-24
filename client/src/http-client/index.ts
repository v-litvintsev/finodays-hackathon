import axios from 'axios'

const httpClient = axios.create()

httpClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access_token')

    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

httpClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default httpClient
