<template>
  <div class="p-8 min-h-screen bg-gradient-to-br from-purple-50 to-white mt-20">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-extrabold text-purple-700 tracking-tight">
        🛍️ Admin — Manage Products
      </h1>
      <div class="space-x-2">
        <button
          @click="openNew"
          class="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 shadow-md transition"
        >
          + New Product
        </button>
        <button
          @click="logout"
          class="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 shadow-md transition"
        >
          Logout
        </button>
      </div>
    </div>

    <!-- Search -->
    <div class="mb-6">
      <input
        v-model="q"
        placeholder="🔍 Search product..."
        class="px-4 py-2 border border-purple-200 rounded-lg w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
        @input="filterProducts"
      />
    </div>

    <!-- Table -->
    <div class="overflow-x-auto bg-white rounded-xl shadow-lg border border-purple-100">
      <table class="min-w-full divide-y divide-purple-100">
        <thead class="bg-purple-100/60">
          <tr>
            <th class="px-4 py-3 text-left text-sm font-semibold text-purple-700">No</th>
            <th class="px-4 py-3 text-left text-sm font-semibold text-purple-700">Nama</th>
            <th class="px-4 py-3 text-left text-sm font-semibold text-purple-700">Harga</th>
            <th class="px-4 py-3 text-left text-sm font-semibold text-purple-700">Stok</th>
            <th class="px-4 py-3 text-left text-sm font-semibold text-purple-700">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr
            v-for="(p, idx) in displayed"
            :key="p.id"
            class="hover:bg-purple-50 transition"
          >
            <td class="px-4 py-3 text-gray-700">{{ idx + 1 }}</td>
            <td class="px-4 py-3 text-gray-800 font-medium">{{ p.nama }}</td>
            <td class="px-4 py-3 text-gray-700">Rp {{ formatCurrency(p.harga) }}</td>
            <td class="px-4 py-3 text-gray-700">{{ p.stok }}</td>
            <td class="px-4 py-3 space-x-2">
              <button
                @click="editProduct(p)"
                class="px-3 py-1.5 rounded-lg bg-purple-500 text-white hover:bg-purple-600 shadow-sm transition"
              >
                Edit
              </button>
              <button
                @click="confirmDelete(p)"
                class="px-3 py-1.5 rounded-lg bg-red-500 text-white hover:bg-red-600 shadow-sm transition"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Form Modal -->
    <div
      v-if="showForm"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
    >
      <div class="bg-white rounded-2xl p-8 w-full max-w-xl shadow-2xl">
        <h2 class="text-2xl font-semibold mb-4 text-purple-700">
          {{ isEditing ? '✏️ Edit Product' : '✨ Create Product' }}
        </h2>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Nama</label>
            <input
              v-model="form.nama"
              required
              class="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">Harga</label>
              <input
                v-model.number="form.harga"
                type="number"
                min="0"
                required
                class="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">Stok</label>
              <input
                v-model.number="form.stok"
                type="number"
                min="0"
                required
                class="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Deskripsi</label>
            <textarea
              v-model="form.deskripsi"
              class="w-full px-3 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              rows="3"
            ></textarea>
          </div>

          <div class="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              @click="closeForm"
              class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 shadow-md transition"
            >
              {{ isEditing ? 'Update' : 'Create' }}
            </button>
          </div>

          <p v-if="formError" class="text-red-600 text-sm pt-2">{{ formError }}</p>
        </form>
      </div>
    </div>

    <!-- Delete Confirmation -->
    <div
      v-if="deleteTarget"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
    >
      <div class="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <h3 class="text-lg font-semibold text-purple-700 mb-3">Hapus Produk</h3>
        <p class="text-gray-700">
          Apakah anda yakin ingin menghapus
          <strong>{{ deleteTarget.name }}</strong>?
        </p>
        <div class="mt-5 flex justify-end space-x-3">
          <button
            @click="deleteTarget = null"
            class="px-4 py-2 rounded-lg border hover:bg-gray-50 transition"
          >
            Batal
          </button>
          <button
            @click="deleteProduct"
            class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 shadow-sm transition"
          >
            Hapus
          </button>
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
  nama: '',
  harga: 0,
  stok: 0,
  deskripsi: ''
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
    const res = await api.get('/produk')
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
  form.nama = p.nama
  form.harga = p.harga
  form.stok = p.stok
  form.deskripsi = p.deskripsi || ''
  formError.value = null
  showForm.value = true
}

async function submitForm() {
  formError.value = null
  try {
    if (isEditing.value && editedId.value) {
      const res = await api.put(`/produk/${editedId.value}`, { ...form })
      // update local list
      const idx = products.value.findIndex(x => x.id === editedId.value)
      if (idx !== -1) products.value.splice(idx, 1, { id: editedId.value, ...form })
    } else {
      const res = await api.post('/produk', { ...form })
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
    await api.delete(`/produk/${deleteTarget.value.id}`)
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
