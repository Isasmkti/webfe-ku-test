<template>
  <div class="min-h-screen flex items-center justify-center bg-purple-100">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-center text-purple-700 mb-6">Login</h2>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            v-model="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder="masukkan email"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="masukkan password"
            />
            <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <span v-if="showPassword">🙈</span>
              <span v-else>👁️</span>
            </button>
  </div>
</div>

<button
  type="submit"
          class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl transition"
          :disabled="loading"
        >
          {{ loading ? 'Loading...' : 'Login' }}
        </button>

        <p v-if="error" class="text-sm text-red-600 mt-2">{{ error }}</p>
      </form>

      <p class="text-sm text-center text-gray-500 mt-5">
  Belum punya akun?
  <router-link to="/register" class="text-purple-600 hover:underline">Daftar</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from './../../stores/auth'


const email = ref('')
const password = ref('')
const error = ref(null)
const loading = ref(false)
const showPassword = ref(false)
const auth = useAuthStore()
const router = useRouter()
const route = useRoute()

async function handleLogin() {
  error.value = null
  loading.value = true
  try {
    await auth.login(email.value.trim().toLowerCase(), password.value)
    // redirect: jika ada query.redirect gunakan itu, else kalau admin bawa ke /admin, kalau bukan ke /
    const redirect = route.query.redirect || (auth.isAdmin ? '/admin' : '/')
    await router.replace(redirect)
  } catch (err) {
    console.error(err)
    // coba ambil pesan error dari response
    error.value = err.response?.data?.message || 'Gagal login — cek email/password'
  } finally {
    loading.value = false
  }
}
</script>
