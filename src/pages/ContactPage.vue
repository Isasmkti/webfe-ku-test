<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 flex flex-col items-center justify-center px-6 py-12 mt-20">
    <!-- Judul -->
    <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center">
      Hubungi Kami
    </h1>
    <p class="text-purple-200 text-lg max-w-2xl text-center mb-10">
      Ada pertanyaan atau butuh bantuan? Kirimkan pesan Anda melalui formulir di bawah ini dan tim kami akan segera menghubungi Anda.
    </p>

    <!-- Kontainer -->
    <div class="flex flex-col lg:flex-row bg-white/10 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-5xl overflow-hidden">
      
      <!-- Info Kontak -->
      <div class="flex-1 p-8 lg:p-12 text-white flex flex-col justify-center bg-purple-800/60">
        <h2 class="text-3xl font-bold mb-6">Informasi Kontak</h2>
        <p class="mb-4"><strong>Alamat:</strong><br>Jl. Contoh No. 123, Jakarta</p>
        <p class="mb-4"><strong>Telepon:</strong><br><a href="tel:+62123456789" class="hover:underline">+62 123 456 789</a></p>
        <p class="mb-4"><strong>Email:</strong><br><a href="mailto:info@example.com" class="hover:underline">info@example.com</a></p>
        <div class="flex gap-4 mt-4">
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition"><i class="fab fa-instagram"></i></a>
          <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <!-- Form Kontak -->
      <div class="flex-1 p-8 lg:p-12 bg-white">
        <h2 class="text-2xl font-bold text-purple-800 mb-6">Kirim Pesan</h2>
        <form @submit.prevent="sendMessage" class="space-y-5">
          <input 
            v-model="form.name" 
            type="text" 
            placeholder="Nama Lengkap" 
            class="w-full p-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 outline-none"
            required 
          />
          <input 
            v-model="form.email" 
            type="email" 
            placeholder="Alamat Email" 
            class="w-full p-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 outline-none"
            required 
          />
          <textarea 
            v-model="form.message" 
            rows="4" 
            placeholder="Pesan Anda..." 
            class="w-full p-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500 outline-none"
            required 
          ></textarea>
          <button 
            type="submit" 
            class="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg shadow-lg transition"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    sendMessage() {
      console.log("Pesan dikirim:", this.form);
      // contoh pemanggilan API bisa ditaruh di sini (misalnya axios.post)
      Swal.fire({
        title: "Pesan Terkirim!",
        text: "Terima kasih, pesan Anda berhasil dikirim.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#6b21a8" // ungu sesuai tema
      });
      this.form = { name: "", email: "", message: "" };
    }
  }
};
</script>

<style scoped>
/* opsional tambahan styling */
</style>
