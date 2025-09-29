<template>
  <footer class="bg-gray-800 text-white py-10 w-full">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-8">
      
      <!-- Kolom 1: Brand -->
      <div>
        <h2 class="text-xl font-bold mb-3">Webs<span class="text-purple-500">Fe</span>-Ku</h2>
        <p class="text-gray-400 text-sm">
          Solusi pembelian web portofolio anda. Modern, secure, and responsive. 
        </p>
      </div>

      <!-- Kolom 2: Navigasi Produk -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Produk</h3>
        <ul class="space-y-2 text-gray-300 text-sm">
          <li><router-link to="/kategori/portofolio" class="hover:text-white">Portofolio Website</router-link></li>
          <li><router-link to="/kategori/organization" class="hover:text-white">Organization Website</router-link></li>
          <li><router-link to="/kategori/ppdb" class="hover:text-white">PPDB Website</router-link></li>
          <li><router-link to="/promo" class="hover:text-white">Promo</router-link></li>
        </ul>
      </div>

      <!-- Kolom 3: Layanan Pelanggan -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Bantuan</h3>
        <ul class="space-y-2 text-gray-300 text-sm">
          <li><router-link to="/faq" class="hover:text-white">FAQ</router-link></li>
          <li><router-link to="/pemesanan" class="hover:text-white">Pemesanan</router-link></li>
          <li><router-link to="/retur" class="hover:text-white">Retur & Refund</router-link></li>
          <li><router-link to="/kontak" class="hover:text-white">Kontak Kami</router-link></li>
        </ul>
      </div>

      <!-- Kolom 4: Media Sosial -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Ikuti Kami</h3>
<ul class="flex space-x-4">
  <li>
    <router-link to="/sosmed/instagram" class="hover:text-white flex items-center space-x-1">
      <i class="fa-brands fa-instagram"></i>
      <span>Instagram</span>
    </router-link>
  </li>
  <li>
    <router-link to="/sosmed/facebook" class="hover:text-white flex items-center space-x-1">
      <i class="fa-brands fa-facebook"></i>
      <span>Facebook</span>
    </router-link>
  </li>
  <li>
    <router-link to="/sosmed/tiktok" class="hover:text-white flex items-center space-x-1">
      <i class="fa-brands fa-tiktok"></i>
      <span>TikTok</span>
    </router-link>
  </li>
</ul>

     <div class="mt-4">
  <p class="text-gray-300 text-sm mb-2">Kirimkan feedback Anda:</p>
  <div class="flex">
    <input 
      type="text" 
      placeholder="Tulis masukan Anda di sini..." 
      class="flex-1 px-3 py-2 rounded-l bg-gray-700 text-white text-sm focus:outline-none"
    >
    <button class="px-4 py-2 bg-purple-600 rounded-r text-sm hover:bg-purple-500">
      Kirim
    </button>
  </div>
</div>
      </div>
    </div>

    <div class="container mx-auto px-4 text-center border-t border-gray-700 mt-10 pt-4 text-gray-400 text-sm">
      <p>&copy; 2025 WebFe-Ku. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
