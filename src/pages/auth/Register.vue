<template>
  <div class="min-h-screen flex items-center justify-center bg-purple-100">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-center text-purple-700 mb-6">Register</h2>
      <form @submit.prevent="handleRegister" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama</label>
          <input type="text" v-model="nama" required class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="masukkan nama" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" v-model="email" required class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="masukkan email" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" v-model="password" required class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="masukkan password" />
            <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <span v-if="showPassword">🙈</span>
              <span v-else>👁️</span>
            </button>
          </div>
        </div>
        <!-- Hapus pilihan role, role otomatis user di backend -->
        <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition" :disabled="loading">
          {{ loading ? 'Loading...' : 'Register' }}
        </button>
        <p v-if="error" class="text-sm text-red-600 mt-2">{{ error }}</p>
        <p v-if="success" class="text-sm text-green-600 mt-2">{{ success }}</p>
      </form>
      <p class="text-sm text-center text-gray-500 mt-5">
        Sudah punya akun?
        <router-link to="/login" class="text-purple-600 hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from './../../api/axios'

const nama = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const error = ref(null)
const success = ref(null)
const loading = ref(false)
const router = useRouter()

async function handleRegister() {
  error.value = null
  success.value = null
  loading.value = true
  try {
    await api.post('/users/register', { nama: nama.value, email: email.value.trim().toLowerCase(), password: password.value })
    success.value = 'Registrasi berhasil! Silakan login.'
    setTimeout(() => router.push('/login'), 1500)
  } catch (err) {
    error.value = err.response?.data?.error || 'Gagal register'
  } finally {
    loading.value = false
  }
}
</script>
