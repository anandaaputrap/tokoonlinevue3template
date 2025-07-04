<template>
  <Navbar />
  <div class="container mx-auto px-4 py-32">
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-20">
      <span class="loader">Loading...</span>
    </div>

    <!-- Product Detail -->
    <div v-else class="grid md:grid-cols-2 gap-8">
      <!-- Gallery -->
      <div class="space-y-4">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="w-full h-96 object-contain"
          />
        </div>
        <div class="grid grid-cols-4 gap-2">
          <img
            v-for="(image, index) in product.images"
            :key="index"
            :src="image"
            @click="currentImage = image"
            class="h-24 cursor-pointer border rounded-lg"
            :class="{ 'border-2 green-pink-500': currentImage === image }"
          />
        </div>
      </div>

      <!-- Product Info -->
      <div>
        <h1 class="text-3xl font-bold">{{ product.title }}</h1>
        <div class="flex items-center mt-2">
          <span class="bg-gray-100 text-green-800 px-2 py-1 rounded text-sm">
            {{ product.brand }}
          </span>
          <div class="ml-4 flex items-center">
            <StarIcon class="h-5 w-5 text-yellow-400" />
            <span class="ml-1">{{ product.rating }}</span>
          </div>
        </div>

        <p class="mt-6 text-gray-700">{{ product.description }}</p>

        <div class="mt-8">
          <span class="text-4xl font-bold text-pink-500"> ${{ product.price }} </span>
          <span
            v-if="product.discountPercentage"
            class="ml-2 text-sm text-gray-500 line-through"
          >
            ${{ calculateOriginalPrice(product.price, product.discountPercentage) }}
          </span>
          <span v-if="product.discountPercentage" class="ml-2 text-green-600">
            {{ product.discountPercentage }}% OFF
          </span>
        </div>

        <!-- Quantity Selector -->
        <div class="mt-8 flex items-center">
          <button
            @click="quantity > 1 ? quantity-- : null"
            class="px-4 py-2 bg-gray-200 rounded-l-lg"
          >
            -
          </button>
          <span class="px-6 py-2 bg-gray-100">{{ quantity }}</span>
          <button @click="quantity++" class="px-4 py-2 bg-gray-200 rounded-r-lg">
            +
          </button>
        </div>

        <!-- Action Buttons -->
        <div class="mt-8 space-x-4">
          <button
            @click="addToCart"
            class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Add to Cart
          </button>
          <button
            @click="toggleWishlist"
            class="border border-green-500 text-green-500 px-6 py-3 rounded-lg"
            :class="{ 'bg-pink-100': isInWishlist }"
          >
            {{ isInWishlist ? "In Wishlist" : "Add to Wishlist" }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from "axios"
import Navbar from "/src/components/Navbar.vue"
import Footer from "/src/components/Footer.vue"
import StarIcon from "/src/components/StarIcon.vue"

const route = useRoute()
const product = ref({})
const loading = ref(true)
const quantity = ref(1)
const currentImage = ref('')
const wishlist = ref(JSON.parse(localStorage.getItem('wishlist')) || [])

// Fetch product
const fetchProduct = async () => {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
    product.value = response.data
    currentImage.value = response.data.thumbnail
  } catch (error) {
    console.error("Error:", error)
  } finally {
    loading.value = false
  }
}

// Computed
const isInWishlist = computed(() => {
  return wishlist.value.some(item => item.id === product.value.id)
})

// Methods
const calculateOriginalPrice = (price, discount) => {
  return (price / (1 - discount/100)).toFixed(2)
}

const addToCart = () => {
  console.log(`Added ${quantity.value} of ${product.value.title} to cart`)
}

const toggleWishlist = () => {
  if (isInWishlist.value) {
    wishlist.value = wishlist.value.filter(item => item.id !== product.value.id)
  } else {
    wishlist.value.push(product.value)
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist.value))
}

// Lifecycle
onMounted(() => {
  fetchProduct()
})

defineExpose({
  product,
  loading,
  quantity,
  currentImage,
  isInWishlist,
  calculateOriginalPrice,
  addToCart,
  toggleWishlist
})
</script>

<style scoped>
.loader {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
</style>
