<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold">Admin — Manage Products</h1>
      <div>
        <button @click="openNew" class="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">New Product</button>
        <button @click="logout" class="ml-2 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">Logout</button>
      </div>
    </div>

    <div class="mb-4">
      <input v-model="q" placeholder="Search product..." class="px-3 py-2 border rounded w-full max-w-sm" @input="filterProducts" />
    </div>

    <div class="overflow-x-auto bg-white rounded shadow">
      <table class="min-w-full divide-y">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-2 text-left">#</th>
            <th class="px-4 py-2 text-left">Name</th>
            <th class="px-4 py-2 text-left">Price</th>
            <th class="px-4 py-2 text-left">Stock</th>
            <th class="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="(p, idx) in displayed" :key="p.id">
            <td class="px-4 py-2">{{ idx + 1 }}</td>
            <td class="px-4 py-2">{{ p.name }}</td>
            <td class="px-4 py-2">Rp {{ formatCurrency(p.price) }}</td>
            <td class="px-4 py-2">{{ p.stock }}</td>
            <td class="px-4 py-2">
              <button @click="editProduct(p)" class="mr-2 px-3 py-1 rounded bg-blue-500 text-white">Edit</button>
              <button @click="confirmDelete(p)" class="px-3 py-1 rounded bg-red-500 text-white">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Form modal / inline -->
    <div v-if="showForm" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl p-6 w-full max-w-2xl">
        <h2 class="text-xl font-semibold mb-4">{{ isEditing ? 'Edit Product' : 'Create Product' }}</h2>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <input v-model="form.name" required class="w-full px-3 py-2 border rounded" />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Price</label>
            <input v-model.number="form.price" type="number" min="0" required class="w-full px-3 py-2 border rounded" />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Stock</label>
            <input v-model.number="form.stock" type="number" min="0" required class="w-full px-3 py-2 border rounded" />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Description</label>
            <textarea v-model="form.description" class="w-full px-3 py-2 border rounded"></textarea>
          </div>

          <div class="flex justify-end space-x-2">
            <button type="button" @click="closeForm" class="px-4 py-2 rounded border">Cancel</button>
            <button type="submit" class="px-4 py-2 rounded bg-purple-600 text-white">{{ isEditing ? 'Update' : 'Create' }}</button>
          </div>

          <p v-if="formError" class="text-red-600">{{ formError }}</p>
        </form>
      </div>
    </div>

    <!-- optional delete confirm -->
    <div v-if="deleteTarget" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 class="font-semibold mb-4">Hapus Produk</h3>
        <p>Apakah anda yakin ingin menghapus <strong>{{ deleteTarget.name }}</strong> ?</p>
        <div class="mt-4 flex justify-end space-x-2">
          <button @click="deleteTarget = null" class="px-4 py-2 rounded border">Batal</button>
          <button @click="deleteProduct" class="px-4 py-2 rounded bg-red-600 text-white">Hapus</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import api from './../../api/axios'
import { useAuthStore } from './../../stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

// Protect again on-mount (guard should already handle but untuk safety)
if (!auth.isAuthenticated) {
  router.replace({ name: 'Login' })
} else if (!auth.isAdmin) {
  router.replace({ name: 'Home' })
}

const products = ref([])
const displayed = ref([])
const q = ref('')

const showForm = ref(false)
const isEditing = ref(false)
const form = reactive({
  name: '',
  price: 0,
  stock: 0,
  description: ''
})
const editedId = ref(null)
const formError = ref(null)
const deleteTarget = ref(null)

function formatCurrency(n) {
  if (n == null) return '-'
  return new Intl.NumberFormat('id-ID').format(n)
}

async function fetchProducts() {
  try {
    const res = await api.get('/products')
    products.value = res.data // asumsi array
    displayed.value = [...products.value]
  } catch (err) {
    console.error('fetchProducts error', err)
    // Jika 403/401, axios interceptor akan redirect ke login
  }
}

function filterProducts() {
  const qv = q.value.trim().toLowerCase()
  if (!qv) {
    displayed.value = [...products.value]
    return
  }
  displayed.value = products.value.filter(p =>
    (p.name || '').toLowerCase().includes(qv) ||
    (p.description || '').toLowerCase().includes(qv)
  )
}

function openNew() {
  isEditing.value = false
  editedId.value = null
  form.name = ''
  form.price = 0
  form.stock = 0
  form.description = ''
  formError.value = null
  showForm.value = true
}

function closeForm() {
  showForm.value = false
  formError.value = null
}

function editProduct(p) {
  isEditing.value = true
  editedId.value = p.id
  form.name = p.name
  form.price = p.price
  form.stock = p.stock
  form.description = p.description || ''
  formError.value = null
  showForm.value = true
}

async function submitForm() {
  formError.value = null
  try {
    if (isEditing.value && editedId.value) {
      const res = await api.put(`/products/${editedId.value}`, { ...form })
      // update local list
      const idx = products.value.findIndex(x => x.id === editedId.value)
      if (idx !== -1) products.value.splice(idx, 1, res.data)
    } else {
      const res = await api.post('/products', { ...form })
      // push returned product
      products.value.unshift(res.data)
    }
    filterProducts()
    closeForm()
  } catch (err) {
    console.error(err)
    formError.value = err.response?.data?.message || 'Gagal menyimpan produk'
  }
}

function confirmDelete(p) {
  deleteTarget.value = p
}

async function deleteProduct() {
  if (!deleteTarget.value) return
  try {
    await api.delete(`/products/${deleteTarget.value.id}`)
    products.value = products.value.filter(x => x.id !== deleteTarget.value.id)
    filterProducts()
    deleteTarget.value = null
  } catch (err) {
    console.error('delete error', err)
    alert(err.response?.data?.message || 'Gagal menghapus produk')
  }
}

function logout() {
  auth.logout()
  router.push({ name: 'Login' })
}

onMounted(() => {
  fetchProducts()
})
</script>
