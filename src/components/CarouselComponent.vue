<template>
  <div class="relative sm:w-full min-w-80 sm:max-w-7xl mx-auto mt-12 overflow-hidden rounded-xl shadow-xl bg-cover">
    <!-- Wrapper slide -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="carousel-slide min-w-full  h-64 sm:h-80 md:h-96 flex-shrink-0 relative"
      >
        <!-- Gunakan <picture> agar beda gambar mobile & desktop -->
        <picture>
          <source :srcset="item.mobileSrc" media="(max-width: 768px)" />
          <img
            :src="item.desktopSrc"
            alt="carousel image"
            class="w-full h-full object-cover object-center"
          />
        </picture>

        <!-- Teks deskripsi di atas gambar -->
        <div
          v-if="item.title || item.desc"
          class="absolute bottom-0 left-0 w-full bg-black/40 text-white p-4 text-center"
        >
          <h3 class="text-lg font-semibold" v-if="item.title">{{ item.title }}</h3>
          <p class="text-sm" v-if="item.desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Tombol Prev -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-purple-600 bg-opacity-70 hover:bg-opacity-50 text-white p-4 rounded-full shadow-lg transition"
    >
      <i class="fa-solid fa-chevron-left"></i>
    </button>

    <!-- Tombol Next -->
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-purple-600 bg-opacity-70 hover:bg-opacity-100 text-white p-4 rounded-full shadow-lg transition"
    >
      <i class="fa-solid fa-chevron-right"></i>
    </button>

    <!-- Indicator -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span
        v-for="(item, idx) in items"
        :key="'indicator-' + idx"
        class="w-3 h-3 rounded-full transition"
        :class="currentIndex === idx ? 'bg-purple-500' : 'bg-gray-300'"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselComponent",
  props: {
    items: {
      type: Array,
      required: true // contoh: [{desktopSrc:'...', mobileSrc:'...', title:'...', desc:'...'}, {...}]
    },
    interval: {
      type: Number,
      default: 4000 // auto scroll setiap 4 detik
    }
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
      touchStartX: 0,
      touchEndX: 0
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    startAutoSlide() {
      this.timer = setInterval(this.nextSlide, this.interval);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    handleTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX;
    },
    handleTouchMove(e) {
      this.touchEndX = e.changedTouches[0].screenX;
    },
    handleTouchEnd() {
      const swipeDistance = this.touchEndX - this.touchStartX;
      const swipeThreshold = 50;
      if (swipeDistance > swipeThreshold) {
        this.prevSlide();
      } else if (swipeDistance < -swipeThreshold) {
        this.nextSlide();
      }
    }
  }
};
</script>

<style scoped>
/* Responsive tinggi carousel */
.carousel-slide {
  height: 16rem; /* default h-64 */
}

@media (min-width: 640px) {
  .carousel-slide {
    height: 20rem; /* sm:h-80 */
  }
}

@media (min-width: 768px) {
  .carousel-slide {
    height: 24rem; /* md:h-96 */
  }
}

@media (min-width: 1024px) {
  .carousel-slide {
    height: 28rem; /* lg */
  }
}

@media (min-width: 1280px) {
  .carousel-slide {
    height: 32rem; /* xl */
  }
}

/* contoh custom XS untuk layar kecil (<=480px) */
@media (max-width: 344px) {
  .carousel-slide {
    height: 15rem; /* lebih kecil biar muat di hp kecil */
    width: 100px;
  }

  .carousel-slide img {
    object-fit: cover;
  }

  .carousel-slide h3 {
    font-size: 0.875rem; /* text-sm */
  }

  .carousel-slide p {
    font-size: 0.75rem; /* text-xs */
  }
}
</style>
