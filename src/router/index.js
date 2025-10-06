import { createRouter, createWebHistory } from 'vue-router'

// Import langsung komponen (atau bisa pakai lazy load)
import HomeView from '../pages/HomePage.vue'
import AboutView from '../pages/AboutPage.vue'
import ContactView from '../pages/ContactPage.vue'
import CustomerView from '../pages/CustomerSerPage.vue'
import ProductView from '../pages/ProductPage.vue'
import LoginView from '../pages/auth/Login.vue'
import AdminView from '../pages/admin/AdminPage.vue'
import { useAuthStore } from './../stores/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/customer-service',
    name: 'customer-service',
    component: CustomerView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/auth/Register.vue')
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminView,
    meta: { requiresAuth: true, requiresAdmin: true }
  },

]

const router = createRouter({
  history: createWebHistory(), // gunakan mode history (URL tanpa hash)
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})


router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next({ name: 'Login', query: { redirect: to.fullPath } })
  }
  if (to.meta.requiresAdmin) {
    // double check user role
    if (!auth.isAuthenticated) {
      return next({ name: 'Login', query: { redirect: to.fullPath } })
    }
    if (!auth.isAdmin) {
      // not permitted
      // redirect to home (atau tampilkan halaman Forbidden)
      return next({ name: 'Home' })
    }
  }
  next()
})


export default router
