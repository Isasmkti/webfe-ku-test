<template>
  <div class="h-full w-full mt-6 xs:mt-8 sm:mt-15 md:mt-15 xl:mt-10 ">
    <div class="flex flex-col justify-around items-center bg-white">

      <!-- section top -->
      <div
        class="flex flex-col justify-center xl:flex-row items-center md:justify-between lg:justify-center   md:min-h-auto w-full min-h-screen lg:h-auto xl:h-screen px-4 xs:px-5 sm:px-6 md:px-10  xl:px-16 py-8 xs:py-8 sm:py-10 xl:py-0">

        <!-- Left Content -->
        <div class="flex flex-col justify-center gap-4 xs:gap-5 sm:gap-6 xl:gap-10 w-full xl:w-2/3 text-center xl:text-left">
          <h1
            class="text-2xl  sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Online Web Shop <br class="hidden sm:block" />
            Modern Design With Tailwind CSS
          </h1>

          <p class="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl max-w-2xl mx-auto xl:mx-0">
            Online Web Shop dengan desain modern, ringan, dan responsif menggunakan Tailwind CSS. Dibangun untuk
            memberikan pengalaman belanja online yang cepat, elegan, dan mudah diakses di semua perangkat. Dengan
            tampilan minimalis namun profesional, toko online ini menghadirkan kenyamanan pengguna sekaligus performa
            optimal.
          </p>

          <div class="flex justify-center xl:justify-start gap-2 xs:gap-3">
            <button
              class="bg-white rounded-2xl shadow-lg px-4 py-2  sm:px-7 sm:py-3 font-medium lg:text-lgl hover:shadow-xl transition">
              Review
            </button>
            <button
              class="bg-purple-500 hover:bg-white border-2 border-transparent hover:border-purple-500 hover:text-purple-500 text-white lg:text-lg rounded-3xl px-5 py-2 xs:px-6 xs:py-2 sm:px-8 sm:py-3 font-medium transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>

        <!-- Right Content -->
        <div class="w-full xl:w-1/3 mt-8 xs:mt-8 sm:mt-10 xl:mt-0 flex justify-center items-center">
          <div
            class="w-full max-w-[260px] xs:max-w-sm h-52 xs:h-56 sm:h-64 xl:h-[450px] bg-gray-200 flex justify-center items-center rounded-2xl shadow-lg">
            <p>Img Hero</p>
          </div>
        </div>

      </div>


    <!-- section bottom -->
<div
  class="flex justify-center w-full min-h-[50vh] items-center mt-8 xs:mt-10 xl:mt-20 px-4 xs:px-5 sm:px-6"
  v-fade="'fadeIn'"
>
  <div class="flex flex-col xl:flex-row justify-around items-stretch gap-8 xs:gap-10 w-full max-w-7xl">
    
    <!-- Card 1 -->
    <div
      class="text-center w-full xl:w-1/3 border-b-4 xl:border-b-0 xl:border-r-4 border-purple-400 pb-6 xl:pb-0 xl:pr-10"
    >
      <h1 class="text-lg xs:text-xl sm:text-2xl font-bold mb-2">Dibuat dengan Vue.js</h1>
      <p class="text-gray-600 text-sm xs:text-base sm:text-xl">
        Website ini dikembangkan menggunakan framework Vue.js yang ringan, modern, dan mudah dikustomisasi.
      </p>
    </div>

    <!-- Card 2 -->
    <div
      class="text-center w-full xl:w-1/3 border-b-4 xl:border-b-0 xl:border-r-4 border-purple-400 pb-6 xl:pb-0 xl:pr-10"
    >
      <h1 class="text-lg xs:text-xl sm:text-2xl font-bold mb-2">UI Interaktif</h1>
      <p class="text-gray-600 text-sm xs:text-base sm:text-xl">
        Tampilan antarmuka dirancang responsif dan dinamis sehingga pengguna dapat berinteraksi dengan mudah.
      </p>
    </div>

    <!-- Card 3 -->
    <div class="text-center w-full xl:w-1/3 xl:pr-10">
      <h1 class="text-lg xs:text-xl sm:text-2xl font-bold mb-2">UX yang Baik</h1>
      <p class="text-gray-600 text-sm xs:text-base sm:text-xl">
        Fokus pada pengalaman pengguna yang intuitif, cepat, dan menyenangkan dalam setiap halaman.
      </p>
    </div>
    
  </div>
</div>



      <!-- Carousel Component -->
      <Carousel :items="carouselImages" :speed="30" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
        @touchend="handleTouchEnd" class="my-15"/>


      <!-- Wrapper untuk semua section -->
      <div class="flex flex-col w-full h-full">

        <!-- section tambahan 1 -->
        <div
          class="flex flex-col xl:flex-row relative items-center justify-between w-full md:h-[50vh] lg:h-screen lg:justify-center xl:h-screen 2xl:h-screen xl:gap-6 sm:gap-8 px-4 xs:px-6 sm:px-8 xl:px-15 py-8 sm:py-10 xl:py-0 text-center xl:text-right">

          <!-- img -->
          <div class="flex justify-center items-center relative lg:p-5 xl:p-7 2xl:p-7">
            <img src="../assets/graphic-design.png" alt="" class="w-28 xs:w-36 sm:w-40 lg:w-70 xl:w-70 2xl:w-70 h-auto"
              v-fade="'fadeIn'" />
            <img src="../assets/color-layout.png" alt=""
              class="w-14 xs:w-18 sm:w-20 lg:w-30 xl:w-30 2xl:w-30 h-auto absolute top-0 right-0 lg:top-5 xl:top-5 2xl:top-5 lg:right-0 xl:right-0 2xl:right-0"
              v-fade="'fadeIn'" />
          </div>

          <!-- content -->
          <div class="max-w-4xl px-2 sm:px-0" v-fade="'right'">
            <h1
              class="text-3xl xs:text-4xl sm:text-6xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-bold mb-6 bg-gradient-to-br from-purple-600 via-purple-300 to-blue-600 bg-clip-text text-transparent p-2 sm:p-4">
              Modern Design
            </h1>
            <h3 class="text-base xs:text-lg sm:text-2xl lg:text-2xl xl:text-4xl 2xl:text-4xl leading-relaxed">
              Desain modern mengutamakan tampilan bersih, tipografi tegas, dan tata letak sederhana namun elegan.
              Fokusnya adalah memberikan kesan profesional sekaligus estetis tanpa elemen yang berlebihan.
            </h3>
          </div>
        </div>

        <!-- section tambahan 2 -->
        <div
          class="flex flex-col-reverse xl:flex-row items-center justify-between w-full  lg:h-screen lg:justify-center xl:h-screen 2xl:h-screen xl:gap-6 sm:gap-8 px-4 xs:px-6 sm:px-8 xl:px-15 py-8 sm:py-10 xl:py-0 text-center xl:text-left">

          <!-- content -->
          <div class="max-w-4xl px-2 sm:px-0" v-fade="'left'">
            <h1
              class="text-3xl xs:text-4xl sm:text-6xl lg:text-5xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00033d] via-[#0600AB] to-[#0033ff] bg-clip-text text-transparent p-2 sm:p-4">
              Responsive Layout
            </h1>
            <h3 class="text-base xs:text-lg sm:text-2xl  lg:text-2xl xl:text-4xl leading-relaxed">
              Desain responsif memastikan tampilan website menyesuaikan berbagai ukuran layar,
              dari ponsel hingga desktop, sehingga pengalaman pengguna tetap optimal di semua perangkat.
            </h3>
          </div>

          <!-- img -->
          <div class="flex justify-center items-center relative lg:p-5 xl:p-7 2xl:p-7" v-fade="'fadeIn'">
            <img src="../assets/layout.png" alt="" class="w-28 xs:w-36 sm:w-35 md:w-40 lg:w-70 xl:w-70 2xl:w-70 h-auto" />
          </div>
        </div>

        <!-- section tambahan 3 -->
        <div
          class="flex flex-col xl:flex-row items-center justify-between w-full  lg:h-screen lg:justify-center xl:h-screen 2xl:h-screen xl:gap-6 sm:gap-8 px-4 xs:px-6 sm:px-8 xl:px-20 py-8 sm:py-10 xl:py-0 text-center xl:text-right">

          <!-- img -->
          <div class="flex justify-center items-center relative lg:p-5 xl:p-7 2xl:p-7">
            <img src="../assets/layers.png" alt="" class="w-28 xs:w-36 sm:w-40 md:w-50 lg:w-70 xl:w-70 2xl:w-70 h-auto" v-fade="'fadeIn'" />
          </div>

          <!-- content -->
          <div class="max-w-4xl px-2 sm:px-0" v-fade="'right'">
            <h1
              class="text-3xl xs:text-4xl sm:text-6xl lg:text-5xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-pink-600 to-blue-400 bg-clip-text text-transparent p-2 sm:p-4">
              Fresh & Colorfull
            </h1>
            <h3 class="text-base xs:text-lg sm:text-2xl lg:text-2xl xl:text-4xl leading-relaxed">
              "Desain colorfull menghadirkan kombinasi warna cerah dan kontras untuk menciptakan nuansa segar,
              menarik perhatian, dan memberi energi positif bagi pengguna."
            </h3>
          </div>

        </div>

      </div>



    </div>
  </div>
</template>



<script>
import Carousel from "../components/CarouselComponent.vue";


export default {
  components: { Carousel },
 data() {
  return {
    carouselImages: [
      {
        desktopSrc: "https://i.pinimg.com/1200x/29/a7/23/29a7235d9dc8c469b521d2d280ab46dd.jpg",
        mobileSrc: "https://i.pinimg.com/736x/83/03/39/830339656c7a33fa27d0e528af32ae70.jpg",
        title: "Slide Pertama",
        desc: "Deskripsi untuk desktop & mobile"
      },
      {
        desktopSrc: "https://i.pinimg.com/1200x/bd/da/02/bdda02c644f4fea42ded6cb28d448cfb.jpg",
        mobileSrc: "https://i.pinimg.com/736x/a1/d9/8d/a1d98ddc03faeccba6dfb0f57245a537.jpg",
        title: "Slide Kedua",
        desc: "Deskripsi lain"
      }
    ]
  }
}

};

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

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll linear infinite var(--scroll-duration, 20s);
}
</style>
