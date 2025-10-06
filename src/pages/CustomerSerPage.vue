<template>
    <NavbarComponent/>
    <div class="min-h-screen   flex flex-col items-center px-6 py-12 mt-20">
        <!-- Judul -->
        <div class="flex flex-col items-center  xl:flex-row xl:justify-between w-full max-w-3xl mb-10 px-2">
            <div>
                <h1 class="text-4xl text-purple-600 sm:text-5xl font-extrabold mb-6">
                    Customer Service
                </h1>
                <p class="text-gray-400 text-lg max-w-2xl mb-10">
                    Punya pertanyaan? Lihat jawaban di FAQ atau hubungi tim CS kami langsung lewat WhatsApp.
                </p>
            </div>
            <div>
                <img src="../assets/travel-agent.png" alt="png" class="w-30 h-auto mx-auto mb-6 rounded-2xl" />
            </div>
        </div>

        <!-- Kontainer -->
        <div class="w-full max-w-3xl bg-white shadow-xl overflow-hidden">
            <!-- FAQ Section -->
            <div class="p-6 divide-y divide-purple-200">
                <h2 class="text-2xl font-bold text-purple-800 mb-4">Pertanyaan yang Sering Diajukan</h2>

                <div v-for="(item, index) in faqs" :key="index" class="py-4">
                    <button @click="toggleFAQ(index)"
                        class="flex justify-between w-full text-left text-lg font-semibold text-purple-800 focus:outline-none">
                        {{ item.question }}
                        <svg :class="{ 'rotate-180': item.open }" class="w-6 h-6 transition-transform duration-300"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <transition name="fade">
                        <p v-if="item.open" class="mt-3 text-purple-600">
                            {{ item.answer }}
                        </p>
                    </transition>
                </div>
            </div>

            <!-- Tombol WhatsApp -->
            <div class="bg-purple-700 p-6 flex justify-center">
                <a :href="whatsappLink" target="_blank"
                    class="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12.04 2C6.57 2 2 6.58 2 12.06c0 1.98.52 3.91 1.51 5.61L2 22l4.47-1.46a10.06 10.06 0 005.57 1.54h.01c5.47 0 10.04-4.58 10.04-10.06C22.1 6.58 17.52 2 12.04 2zm5.75 14.64c-.24.67-1.4 1.29-1.95 1.38-.5.1-1.14.14-1.84-.11-.42-.13-.96-.31-1.65-.61-2.92-1.25-4.83-4.18-4.98-4.38-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.01-2.45.26-.3.57-.37.76-.37.19 0 .38 0 .54.01.17.01.4-.06.63.48.24.58.8 2.01.87 2.16.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.37-.45.5-.15.15-.3.31-.13.6.17.28.75 1.23 1.6 2 .86.77 1.59 1.02 1.87 1.14.28.11.45.09.62-.05.17-.15.72-.84.91-1.13.19-.3.38-.25.63-.15.26.1 1.65.78 1.94.92.29.15.48.22.55.35.07.12.07.7-.17 1.37z" />
                    </svg>
                    Chat via WhatsApp
                </a>
            </div>
        </div>
    </div>
    <FooterComponent/>
</template>


<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    name: "CustomerService",
    components: {
        NavbarComponent,
        FooterComponent
    },
    data() {
        return {
            faqs: [
                {
                    question: "Bagaimana cara melakukan pemesanan?",
                    answer: "Anda bisa memesan langsung melalui website kami dengan menambahkan produk ke keranjang dan mengikuti proses checkout.",
                    open: false
                },
                {
                    question: "Berapa lama pengiriman barang?",
                    answer: "Waktu pengiriman tergantung lokasi Anda, rata-rata 2-5 hari kerja.",
                    open: false
                },
                {
                    question: "Apakah ada garansi produk?",
                    answer: "Ya, kami memberikan garansi 7 hari untuk produk cacat atau rusak saat pengiriman.",
                    open: false
                }
            ],
            whatsappNumber: "6283110656441", // ganti dengan nomor CS
            message: "Halo, saya ingin bertanya tentang layanan Anda."
        };
    },
    computed: {
        whatsappLink() {
            return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.message)}`;
        }
    },
    methods: {
        toggleFAQ(index) {
            this.faqs[index].open = !this.faqs[index].open;
        }
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
