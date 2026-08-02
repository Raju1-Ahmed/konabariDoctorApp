import axios from 'axios'

const fallbackBaseUrl = 'https://konabarilabaidserver-psi.vercel.app/api'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || fallbackBaseUrl,
  timeout: 10000,
})

export default apiClient
