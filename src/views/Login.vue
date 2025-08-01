<template>
  <div class="h-screen flex">
    <!-- Left Section -->
    <div
      class="hidden lg:flex w-full lg:w-1/2 login_img_section justify-center items-center"
    >
      <div class="text-center px-10">
        <h1 class="text-4xl font-bold text-white">Staryyist</h1>
        <p class="text-white mt-4">Welcome to the calming side of world.</p>
      </div>
    </div>

    <!-- Right Section (Login Form) -->
    <div class="flex w-full lg:w-1/2 justify-center items-center bg-[#fce4ec]">
      <div class="w-full px-8 md:px-32 lg:px-24">
        <form @submit.prevent="handleLogin" class="bg-white rounded-2xl shadow-2xl p-8">
          <h1 class="text-green-700 font-bold text-2xl mb-2">Hello Again!</h1>
          <p class="text-sm text-pink-800 mb-6">Welcome to your soft space</p>

          <!-- Email Input -->
          <div
            class="flex items-center border-2 border-pink-200 mb-6 py-2 px-3 rounded-xl"
            :class="{ 'shake': emailError }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-pink-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0z"
              />
            </svg>
            <input
              v-model="email"
              class="pl-2 w-full outline-none border-none bg-transparent"
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>

          <!-- Password Input -->
          <div
            class="flex items-center border-2 border-pink-200 mb-8 py-2 px-3 rounded-xl"
            :class="{ 'shake': passwordError }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-pink-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              v-model="password"
              class="pl-2 w-full outline-none border-none bg-transparent"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              placeholder="Password"
              required
            />
            <!-- Toggle Password Visibility Button -->
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="ml-2 text-pink-400 hover:text-pink-600 focus:outline-none"
            >
              <!-- Eye Open Icon -->
              <svg
                v-if="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <!-- Eye Closed Icon -->
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                />
              </svg>
            </button>
          </div>

          <!-- Error Message -->
          <div v-if="showError" class="text-red-500 text-sm mb-4">
            {{ errorMessage }}
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="block w-full bg-green-300 mt-5 py-2 rounded-xl hover:bg-green-400 transition-all text-white font-semibold mb-2"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Loading...' : 'Login' }}
          </button>

          <!-- Additional Links -->
          <div class="flex justify-between mt-4 text-sm text-pink-700">
            <a href="#" class="hover:underline">Forgot Password?</a>
            <a href="#" class="hover:underline">Don't have an account?</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Login',
  setup() {
    const email = ref('')
    const password = ref('')
    const showPassword = ref(false)
    const showError = ref(false)
    const errorMessage = ref('')
    const isLoading = ref(false)
    const emailError = ref(false)
    const passwordError = ref(false)
    // Methods
    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value
    }
    const handleLogin = async () => {
      // Reset errors
      showError.value = false
      emailError.value = false
      passwordError.value = false
      isLoading.value = true

      try {
        if (!email.value || !password.value) {
          throw new Error('Email dan password harus diisi!')
        }

        await new Promise(resolve => setTimeout(resolve, 1000))

        // Simulasi login gagal (untuk demo)
        if (email.value !== 'user@example.com' || password.value !== 'password123') {
          throw new Error('Email Atau Password Salah!')
        }

        // Login berhasil
        console.log('Login berhasil!')
        // Di sini Anda bisa redirect ke dashboard atau halaman lain
        
      } catch (error) {
        showError.value = true
        errorMessage.value = error.message
        
        // Tambahkan efek shake
        emailError.value = true
        passwordError.value = true
        
        // Hapus efek shake setelah animasi selesai
        setTimeout(() => {
          emailError.value = false
          passwordError.value = false
        }, 500)
      } finally {
        isLoading.value = false
      }
    }

    return {
      email,
      password,
      showPassword,
      showError,
      errorMessage,
      isLoading,
      emailError,
      passwordError,
      togglePasswordVisibility,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login_img_section {
  background: linear-gradient(rgba(255, 192, 203, 0.4), rgba(173, 255, 168, 0.4)),
    url("/gambar/download (2).jpg") center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  20%, 60% {
    transform: translateX(-5px);
  }
  40%, 80% {
    transform: translateX(5px);
  }
}
</style>