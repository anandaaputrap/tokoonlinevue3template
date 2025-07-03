<template>
  <nav
    class="fixed top-0 left-0 z-20 w-full border-b border-pink-200 bg-white py-2.5 px-6 sm:px-4"
  >
    <div class="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
      <a href="#" class="flex items-center">
        <img
          src="/gambar/Staryyist_20250529_221026_0000-removebg-preview.png"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="mr-3 h-6 text-pink-500 sm:h-9"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />

        <span class="self-center whitespace-nowrap text-xl font-semibold">Staryyist</span>
      </a>
      <div class="mt-2 sm:mt-0 sm:flex md:order-2">
        <router-link
          to="/login"
          class="mr-3 hidden bg-green-500 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-pink-300 md:mr-0 md:inline-block rounded-lg"
        >
          Login
        </router-link>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
        id="navbar-sticky"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 pl-3 pr-4 text-gray-700 hover:text-pink-500 md:p-0"
              active-class="block rounded bg-gray-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-pink-500"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/products"
              class="block py-2 pl-3 pr-4 text-gray-700 hover:text-pink-500 md:p-0"
              active-class="block rounded bg-gray-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-pink-500"
            >
              Product
            </router-link>
          </li>
          <li>
            <router-link
              to="/cart"
              class="block py-2 pl-3 pr-4 text-gray-700 hover:text-pink-500 md:p-0"
              active-class="block rounded bg-gray-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-pink-500"
            >
              Cart
            </router-link>
          </li>
          <li>
            <router-link
              to="/saved"
              class="block py-2 pl-3 pr-4 text-gray-700 hover:text-pink-500 md:p-0"
              active-class="block rounded bg-gray-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-pink-500"
            >
              Saved
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
