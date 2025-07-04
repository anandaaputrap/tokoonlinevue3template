<template>
  <Navbar />
  <div class="pt-32 bg-white">
    <h1 class="text-center text-2xl font-bold text-green-800">
      {{ activeCategory }} Products
    </h1>

    <!-- Kategori Filter -->
    <div class="flex justify-center mt-4 space-x-2 pb-6">
      <button
        v-for="category in categories"
        :key="category"
        @click="filterByCategory(category)"
        class="px-4 py-2 rounded-full text-sm"
        :class="{
          'bg-green-600 text-white': activeCategory === category,
          'bg-gray-200 text-gray-700 hover:bg-gray-300': activeCategory !== category,
        }"
      >
        {{ category }}
      </button>
    </div>
    <div class="flex justify-center pb-6">
      <div class="relative w-64 md:w-96">
        <input
          type="text"
          v-model="searchQuery"
          @input="filterProducts"
          placeholder="Search Products..."
          class="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <svg
          class="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  </div>

  <!-- Product Grid -->
  <section class="py-10 bg-gray-100">
    <div v-if="loading" class="text-center py-10">
      <span class="loader"></span>
    </div>

    <div v-else-if="filteredProducts.length === 0" class="text-center py-10">
      <p class="text-gray-500">No Products Found.</p>
    </div>

    <div
      v-else
      class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <article
        v-for="product in filteredProducts"
        :key="product.id"
        class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
      >
        <router-link :to="`/products/${product.id}`">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img
              :src="product.thumbnail"
              :alt="product.title"
              class="w-full h-48 object-cover"
            />
            <div
              v-if="product.rating"
              class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="ml-1 text-sm text-slate-400">{{
                product.rating.toFixed(1)
              }}</span>
            </div>
          </div>
        </router-link>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">{{ product.title }}</h2>
          <p class="mt-1 text-sm text-slate-400">{{ product.brand }}</p>

          <div class="flex justify-between items-center mt-4">
            <!-- Like Button -->
            <button
              @click="toggleLike(product.id)"
              class="like-btn flex items-center space-x-1"
              :class="{ active: isLiked(product.id) }"
            >
              <svg
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
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span class="text-sm">Like</span>
            </button>

            <!-- Love Button -->
            <button
              @click="toggleLove(product.id)"
              class="love-btn flex items-center space-x-1"
              :class="{ active: isLoved(product.id) }"
            >
              <svg
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span class="text-sm">Love</span>
            </button>
          </div>

          <div class="mt-3 flex items-end justify-between">
            <p class="text-lg font-bold text-pink-500">${{ product.price }}</p>
            <button
              @click="addToCart(product)"
              class="flex items-center space-x-1.5 rounded-lg bg-green-700 px-4 py-1.5 text-white duration-100 hover:bg-green-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span class="text-sm">Add to cart</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";
import axios from "axios";

export default {
  name: "ProductList",
  components: { Navbar, Footer },
  data() {
    return {
      products: [],
      filteredProducts: [],
      loading: true,
      categories: ["All"],
      activeCategory: "All",
      searchQuery: "",
      likes: JSON.parse(localStorage.getItem("likes")) || [],
      loves: JSON.parse(localStorage.getItem("loves")) || [],
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  async created() {
    await this.fetchProducts();
    this.updateCartCounter();
  },
  methods: {
    async fetchProducts() {
      try {
        // Menggunakan API gratis dari dummyjson.com
        const response = await axios.get("https://dummyjson.com/products");
        this.products = response.data.products;
        this.filteredProducts = [...this.products];

        const allCategories = this.products.map((p) => p.category);
        this.categories = [
          "All",
          ...new Set(allCategories), // Hapus duplikat
        ];
      } catch (error) {
        console.error("Error fetching products:", error);
        // Fallback data jika API error
        this.products = [
          {
            id: 1,
            title: "Fallback Product",
            brand: "Sample Brand",
            price: 99.99,
            rating: 4.5,
            thumbnail: "https://via.placeholder.com/150",
          },
        ];
      } finally {
        this.loading = false;
      }
    },
    filterByCategory(category) {
      this.activeCategory = category;

      if (category === "All") {
        this.filteredProducts = [...this.products];
      } else {
        this.filteredProducts = this.products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
      }
    },
    filterProducts() {
      if (this.searchQuery === "") {
        // Jika search kosong, tampilkan produk berdasarkan kategori
        this.filterByCategory(this.activeCategory);
      } else {
        // Filter berdasarkan search query DAN kategori aktif
        this.filteredProducts = this.products.filter((product) => {
          const matchesSearch =
            product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(this.searchQuery.toLowerCase());
          const matchesCategory =
            this.activeCategory === "All" ||
            product.category.toLowerCase() === this.activeCategory.toLowerCase();
          return matchesSearch && matchesCategory;
        });
      }
    },
    filterByCategory(category) {
      this.activeCategory = category;
      this.searchQuery = "";

      if (category === "All") {
        this.filteredProducts = [...this.products];
      } else {
        this.filteredProducts = this.products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
      }
    },
    toggleLike(productId) {
      if (this.likes.includes(productId)) {
        this.likes = this.likes.filter((id) => id !== productId);
      } else {
        this.likes.push(productId);
      }
      localStorage.setItem("likes", JSON.stringify(this.likes));
    },
    isLiked(productId) {
      return this.likes.includes(productId);
    },
    toggleLove(productId) {
      if (this.loves.includes(productId)) {
        this.loves = this.loves.filter((id) => id !== productId);
      } else {
        this.loves.push(productId);
      }
      localStorage.setItem("loves", JSON.stringify(this.loves));
    },
    isLoved(productId) {
      return this.loves.includes(productId);
    },
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({
          ...product,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.updateCartCounter();
      alert(`${product.title} added to cart!`);
    },
    updateCartCounter() {
      const totalItems = this.cart.reduce((total, item) => total + item.quantity, 0);
      // Emit event jika perlu update navbar
      this.$emit("cart-updated", totalItems);
    },
  },
};
</script>

<style scoped>
.like-btn.active svg {
  color: #3b82f6;
  fill: currentColor;
}
.love-btn.active svg {
  color: #ef4444;
  fill: currentColor;
}
.loader {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
