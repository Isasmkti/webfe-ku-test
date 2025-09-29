<template>
  <div class="mt-20 w-full h-full mx-auto px-4 py-5">
    <h2 class="text-4xl font-bold text-purple-700 mb-6 text-center">Daftar Produk</h2>

    <!-- Loading state -->
    <div v-if="loading" class="w-full h-screen flex items-center justify-center">
      <p class="text-purple-500 text-lg animate-pulse">Sedang memuat data...</p>
    </div>

    <!-- Kosong setelah selesai loading -->
    <div v-else-if="produkList.length === 0" class="w-full h-screen flex items-center justify-center">
      <p class="text-purple-400 text-lg">Belum ada produk yang tersedia.</p>
    </div>

    <!-- Daftar produk -->
    <div v-else class="grid md:grid-cols-2 2xl:grid-cols-3 gap-6 max-w-4xl max-h-xl mx-auto">
      <div 
        v-for="produk in produkList" 
        :key="produk.id" 
        class="p-6 border border-purple-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-purple-400 transition"
      >
        <h3 class="text-xl font-semibold text-purple-700 mb-2">{{ produk.nama }}</h3>
        <p class="text-purple-600 font-medium mb-1">Rp {{ produk.harga }}</p>
        <p class="text-gray-600 mb-4">{{ produk.deskripsi }}</p>
        <button 
          @click="pesanViaWA(produk)" 
          class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl shadow transition"
        >
          Pesan via WhatsApp
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const produkList = ref([])
const loading = ref(true)

const fetchProduk = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/produk')
    const data = await res.json()
    produkList.value = data
  } catch (err) {
    console.error('Gagal memuat produk:', err)
  } finally {
    loading.value = false
  }
}

const pesanViaWA = (produk) => {
  const nomorToko = '6283110656441' // ganti dengan nomor WA tujuan
  const pesan = `Halo, saya ingin memesan produk:\n\nNama: ${produk.nama}\nHarga: Rp ${produk.harga}\n\nApakah masih tersedia?`
  const url = `https://wa.me/${nomorToko}?text=${encodeURIComponent(pesan)}`
  window.open(url, '_blank')
}

onMounted(() => {
  fetchProduk()
})
</script>
