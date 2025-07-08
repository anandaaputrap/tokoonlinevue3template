<template>
  <div>
    <Navbar />
    <div class="container mx-auto py-24 px-4">
      <h1 class="text-3xl font-bold text-green-800 mb-8">Your Saved Items</h1>

      <!-- Tab Navigation (Now Working!) -->
      <div class="flex border-b border-gray-200 mb-8">
        <button
          @click="activeTab = 'liked'"
          :class="{
            'border-green-500 text-green-700': activeTab === 'liked',
            'text-gray-500 hover:text-green-700': activeTab !== 'liked',
          }"
          class="py-2 px-4 font-medium border-b-2 border-transparent hover:border-green-300 transition"
        >
          Liked Items
        </button>
        <button
          @click="activeTab = 'loved'"
          :class="{
            'border-green-500 text-green-700': activeTab === 'loved',
            'text-gray-500 hover:text-green-700': activeTab !== 'loved',
          }"
          class="py-2 px-4 font-medium border-b-2 border-transparent hover:border-green-300 transition ml-2"
        >
          Wishlist
        </button>
      </div>

      <!-- Liked Items (Shows when activeTab === 'liked') -->
      <div
        v-if="activeTab === 'liked'"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/gambar/Desain tanpa judul 1.png" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="font-semibold text-lg">Susuwatari Star</h3>
            <p class="text-gray-600 text-sm">Bouquet with Cute Stuff</p>
            <p class="text-pink-500 font-bold mt-2">Rp120,000</p>
            <div class="mt-4 flex justify-between">
              <button class="text-blue-500 hover:text-blue-700 text-sm">
                Remove Like
              </button>
              <button
                class="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Wishlist (Shows when activeTab === 'loved') -->
      <div
        v-if="activeTab === 'loved'"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/gambar/Desain tanpa judul 2.png" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="font-semibold text-lg">Stardust Petals</h3>
            <p class="text-gray-600 text-sm">Hand Bouquet</p>
            <p class="text-pink-500 font-bold mt-2">Rp400,000</p>
            <div class="mt-4 flex justify-between">
              <button class="text-red-500 hover:text-red-700 text-sm">
                Remove from Wishlist
              </button>
              <button
                class="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";
export default {
  name: "Saved",
  components: { Navbar, Footer },
  data() {
    return {
      activeTab: "liked",
    };
  },
};
</script>

<style scoped>
.tab-button {
  transition: all 0.3s ease;
}
</style>
