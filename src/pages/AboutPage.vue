<template>
  <NavbarComponent/>
  <div class="h-full w-full mt-20">
    <div class="flex flex-col bg-white">

      <!-- Hero About (baru) -->
      <div
        class="relative flex flex-col items-center justify-center text-center w-full h-screen px-6 md:px-10 lg:px-20 bg-gradient-to-br from-purple-600 via-blue-400/85 to-purple-700"
      >
        <h1
          class="text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg leading-tight"
          v-fade="'fadeIn'"
        >
          Tentang Kami
        </h1>
        <p
          class="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-white max-w-xl sm:max-w-2xl md:max-w-3xl leading-relaxed"
          v-fade="'fadeIn'"
        >
          Kami adalah tim kreatif yang menggabungkan desain modern dan teknologi terbaru untuk
          menciptakan website yang cepat, responsif, dan memikat.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10">
          <button
            class="bg-white rounded-2xl shadow-2xl px-6 py-3 font-light text-purple-600 hover:shadow-xl transition"
          >
            Hubungi Kami
          </button>
          <button
            class="bg-purple-900 hover:bg-white duration-300 transition-all ease-in border-2 border-transparent hover:text-purple-900 hover:border-purple-900 rounded-3xl px-7 py-3 text-white font-light"
          >
            Learn Our Team
          </button>
        </div>
      </div>

      <!-- Core Values Section -->
      <div class="flex justify-center w-full py-20 md:py-28 bg-gray-50" v-fade="'fadeIn'">
        <div
          class="flex flex-col md:flex-row justify-around items-start gap-10 md:gap-16 max-w-6xl flex-wrap"
        >
          <div class="text-center w-full sm:w-80">
            <h1
              class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent"
            >
              Desain Modern
            </h1>
            <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
              Fokus pada estetika bersih, tipografi tegas, dan layout rapi untuk kesan profesional.
            </p>
          </div>
          <div class="text-center w-full sm:w-80">
            <h1
              class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent"
            >
              Teknologi Terbaru
            </h1>
            <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
              Menggunakan framework modern seperti Vue.js dan Tailwind CSS untuk kecepatan & fleksibilitas.
            </p>
          </div>
          <div class="text-center w-full sm:w-80">
            <h1
              class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent"
            >
              Fokus pada UX
            </h1>
            <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
              Menciptakan pengalaman pengguna yang intuitif, responsif, dan menyenangkan di setiap halaman.
            </p>
          </div>
        </div>
      </div>

      <!-- Short Story Section -->
      <div class="flex justify-center w-full px-6 sm:px-10 md:px-20 py-20 md:py-32" v-fade="'fadeIn'">
        <div class="max-w-4xl md:max-w-5xl text-center">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-br from-purple-600 via-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            Visi & Misi Kami
          </h1>
          <h3 class="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            Kami percaya website bukan hanya tampilan digital, tapi representasi merek yang kuat.
            Dengan desain modern dan teknologi terkini, kami membantu bisnis Anda tampil beda,
            menarik perhatian, dan tumbuh lebih cepat.
          </h3>
        </div>
      </div>

    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  components: { NavbarComponent, FooterComponent }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: Poppins;
}

p,
button {
  font-family: Lato;
}

h3 {
  font-family: Inter;
}
</style>
