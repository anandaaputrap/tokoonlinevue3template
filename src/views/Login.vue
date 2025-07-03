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
        <form id="loginForm" class="bg-white rounded-2xl shadow-2xl p-8">
          <h1 class="text-green-700 font-bold text-2xl mb-2">Hello Again!</h1>
          <p class="text-sm text-pink-800 mb-6">Welcome to your soft space</p>

          <!-- Email Input -->
          <div
            id="emailField"
            class="flex items-center border-2 border-pink-200 mb-6 py-2 px-3 rounded-xl"
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
              id="email"
              class="pl-2 w-full outline-none border-none bg-transparent"
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>

          <!-- Password Input -->
          <div
            id="passwordField"
            class="flex items-center border-2 border-pink-200 mb-8 py-2 px-3 rounded-xl"
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
              id="password"
              class="pl-2 w-full outline-none border-none bg-transparent"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <!-- Error Message -->
          <div id="errorMessage" class="text-red-500 text-sm mb-4 hidden">
            Email atau password salah!
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="block w-full bg-green-300 mt-5 py-2 rounded-xl hover:bg-green-400 transition-all text-white font-semibold mb-2"
          >
            Login
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

<script></script>

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
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-5px);
  }
  40%,
  80% {
    transform: translateX(5px);
  }
}
</style>
