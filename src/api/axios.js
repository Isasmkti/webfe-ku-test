// src/api/axios.js
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:3000/api',
  timeout: 10000,
})

// request: attach token (reads dari localStorage untuk memastikan persistence across reload)
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, err => Promise.reject(err))

// response: jika 401, logout di client (redir ke /login)
api.interceptors.response.use(
  res => res,
  err => {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      // pakai window.location untuk memastikan reload kalau router belum ter-inject
      window.location.href = '/login'
    }
    return Promise.reject(err)
  }
)

export default api
