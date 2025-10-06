// src/stores/auth.js
import { defineStore } from 'pinia'
import api from './../api/axios' // atau relative './api/axios' sesuai struktur

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => Boolean(state.user && state.user.role === 'admin'),
  },
  actions: {
    async login(email, password) {
      // backend harus mengembalikan { token, user: { id, email, role } }
      const res = await api.post('/users/login', { email, password })
      const { token, user } = res.data
      this.token = token
      this.user = user
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      // set default header agar request berikutnya memakai token langsung
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      return res
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      delete api.defaults.headers.common.Authorization
    },
    // optional: update user dari server (refresh)
    setUser(user) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
    }
  }
})
