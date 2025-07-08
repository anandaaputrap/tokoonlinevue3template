<template>
  <Navbar />
  <!-- Main Content -->
  <div class="container mx-auto py-24 px-4">
    <h1 class="text-3xl font-bold text-green-800 mb-8">Your Shopping Cart</h1>

    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="divide-y divide-gray-200">
        <!-- Empty State -->
        <p v-if="cart.length === 0" class="py-4 text-center text-gray-500">
          Your cart is empty
        </p>

        <!-- Cart Items -->
        <div v-for="item in cart" :key="item.id" class="flex py-4">
          <div
            class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
          >
            <img :src="item.image" :alt="item.name" class="h-full w-full object-cover" />
          </div>

          <div class="ml-4 flex flex-1 flex-col">
            <div>
              <h3 class="text-lg font-medium text-gray-900">{{ item.name }}</h3>
              <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
            </div>

            <div class="flex flex-1 items-end justify-between">
              <p class="text-gray-900">
                Rp{{ formatPrice(item.price) }} x {{ item.quantity }}
              </p>
              <p class="font-medium">Rp{{ formatPrice(item.price * item.quantity) }}</p>

              <div class="flex items-center space-x-2">
                <button
                  @click="updateQuantity(item.id, -1)"
                  class="px-2 py-1 border rounded-md hover:bg-gray-100"
                >
                  -
                </button>
                <span>{{ item.quantity }}</span>
                <button
                  @click="updateQuantity(item.id, 1)"
                  class="px-2 py-1 border rounded-md hover:bg-gray-100"
                >
                  +
                </button>
                <button
                  @click="removeItem(item.id)"
                  class="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cart Summary -->
      <div v-if="cart.length > 0" class="mt-8 border-t border-gray-200 pt-6">
        <div class="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>Rp{{ formatPrice(total) }}</span>
        </div>
        <button
          @click="checkout"
          class="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";

export default {
  name: "Cart",
  components: { Navbar, Footer },
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  },
  methods: {
    loadCart() {
      this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    },
    formatPrice(price) {
      return price.toLocaleString("id-ID");
    },
    updateQuantity(productId, change) {
      const item = this.cart.find((item) => item.id === productId);

      if (item) {
        item.quantity += change;

        if (item.quantity <= 0) {
          this.cart = this.cart.filter((item) => item.id !== productId);
        }

        this.saveCart();
      }
    },
    removeItem(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    checkout() {
      alert("Thank you for your purchase!");
      this.cart = [];
      this.saveCart();
    },
  },
  mounted() {
    this.loadCart();
  },
};
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
</style>
