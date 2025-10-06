<template>
  <nav ref="navRef" :class="['text-purple-300 shadow-lg fixed z-10 top-0 left-0 right-0 transition-all', bgClass]">
    <div class="max-w-7xl mx-auto px-4 py-2">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="text-xl font-bold tracking-wide text-purple-400">
          <img v-if="scrollY" src="../assets/hitam.png" alt="" class="h-auto w-30" />
          <img v-else src="../assets/putih.png" alt="WebFe-Ku" class="h-auto w-30" />
        </div>

        <!-- Burger Button (Mobile) -->
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="focus:outline-none">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Menu Links (Desktop) -->
        <div class="hidden md:flex space-x-6">
          <router-link to="/"
            class="hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300">
            Home
          </router-link>
          <router-link to="/about"
            class="hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300">
            About Us
          </router-link>
          <router-link to="/product"
            class="hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300">
            Product
          </router-link>
          <router-link to="/contact"
            class="hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300">
            Contact
          </router-link>
          <router-link to="/customer-service"
            class="hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300">
            Customer Service
          </router-link>
          <router-link v-if="auth.isAdmin" to="/admin" class="hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300">
            Admin Panel
          </router-link>
          <router-link v-if="!auth.isAuthenticated" to="/login" class="hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300">
            Login
          </router-link>
          <button v-else @click="handleLogout" class="hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </div>

    <!-- Dropdown Menu (Mobile) -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
      <router-link
        to="/"
        :class="['block hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300', isActive('/')]"
      >
        Home
      </router-link>
      <router-link
        to="/about"
        :class="['block hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300', isActive('/about')]"
      >
        About Us
      </router-link>
      <router-link
        to="/product"
        :class="['block hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300', isActive('/product')]"
      >
        Product
      </router-link>
      <router-link
        to="/contact"
        :class="['block hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300', isActive('/contact')]"
      >
        Contact
      </router-link>
      <router-link
        to="/customer-service"
        :class="['block hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300', isActive('/customer-service')]"
      >
        Customer Service
      </router-link>
      <router-link
        v-if="auth.isAdmin"
        to="/admin"
        :class="['block hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300', isActive('/admin')]"
      >
        Admin Panel
      </router-link>
      <router-link
        v-if="!auth.isAuthenticated"
        to="/login"
        :class="['block hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300', isActive('/login')]"
      >
        Login
      </router-link>
      <button
        v-else
        @click="handleLogout"
        class="block w-full text-left hover:text-white hover:bg-purple-700 px-3 py-2 rounded-lg transition duration-300"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

export default {
  setup() {
    const isOpen = ref(false)
    const bgClass = ref('bg-black')
    const scrollY = ref(false)
    const route = useRoute()
  const navRef = ref(null)
  const auth = useAuthStore()
  const router = useRouter()

  const handleScroll = () => {
      bgClass.value = window.scrollY > 30
        ? 'bg-white rounded-b-2xl xl:rounded-b-4xl transition duration-700 shadow-lg shadow-purple-200/70 ease-out text-purple-500'
        : 'bg-black '
      scrollY.value = window.scrollY > 30
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const isActive = (path) => {
      return route.path === path
        ? 'bg-purple-700 text-white'
        : 'bg-purple-700 hover:text-white'
    }

    function handleLogout() {
      auth.logout()
      router.push('/login')
    }

    return { isOpen, bgClass, scrollY, isActive, navRef, auth, handleLogout }
  }
}

</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif;
}
</style>
