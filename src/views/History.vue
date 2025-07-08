<template>
  <div>
    <Navbar />
    <main class="container pt-25 mx-auto py-12 px-4 flex-grow">
      <h1 class="text-3xl font-bold text-green-800 mb-8">Purchase History</h1>

      <!-- Filter Tanggal -->
      <div class="mb-6 flex flex-col sm:flex-row gap-4">
        <input
          type="date"
          v-model="startDate"
          class="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        <input
          type="date"
          v-model="endDate"
          class="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        <button
          @click="applyFilter"
          class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Filter
        </button>
      </div>

      <!-- Daftar Transaksi -->
      <div class="space-y-6">
        <!-- Card Transaksi (Contoh Data Static) -->
        <div
          v-for="(order, index) in filteredOrders"
          :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
        >
          <div class="p-6">
            <!-- Header Transaksi -->
            <div
              class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4"
            >
              <div>
                <p class="text-sm text-gray-500">Order ID</p>
                <p class="font-semibold text-lg">#{{ order.id }}</p>
              </div>
              <div class="mt-2 sm:mt-0">
                <span
                  :class="{
                    'bg-green-100 text-green-800': order.status === 'completed',
                    'bg-yellow-100 text-yellow-800': order.status === 'processing',
                    'bg-red-100 text-red-800': order.status === 'cancelled',
                  }"
                  class="px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ order.status }}
                </span>
              </div>
            </div>

            <!-- Daftar Produk -->
            <div class="border-t border-gray-100 pt-4 mt-4">
              <div
                v-for="item in order.items"
                :key="item.id"
                class="flex py-3 items-center"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-16 h-16 object-cover rounded-lg"
                />
                <div class="ml-4 flex-grow">
                  <h3 class="font-medium">{{ item.name }}</h3>
                  <p class="text-sm text-gray-600">
                    Qty: {{ item.quantity }} × Rp{{ item.price.toLocaleString() }}
                  </p>
                </div>
                <p class="font-semibold text-green-700">
                  Rp{{ (item.price * item.quantity).toLocaleString() }}
                </p>
              </div>
            </div>

            <!-- Footer Transaksi -->
            <div
              class="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center"
            >
              <p class="text-sm text-gray-500">Total: {{ order.items.length }} items</p>
              <p class="font-bold text-lg">Rp{{ order.total.toLocaleString() }}</p>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredOrders.length === 0" class="text-center py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 mx-auto text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <h3 class="mt-4 text-lg font-medium text-gray-900">No orders found</h3>
          <p class="mt-1 text-gray-500">Your purchase history will appear here</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";

export default {
  name: "History",
  components: { Navbar, Footer },
  data() {
    return {
      startDate: null,
      endDate: null,
      orders: [
        // Contoh data static (nanti bisa diganti dengan data dari API)
        {
          id: "STY-2023-001",
          date: "2023-10-15",
          status: "completed",
          total: 520000,
          items: [
            {
              id: 1,
              name: "Susuwatari Star",
              price: 120000,
              quantity: 1,
              image: "/gambar/Desain tanpa judul 1.png",
            },
            {
              id: 2,
              name: "Stardust Petals",
              price: 400000,
              quantity: 1,
              image: "/gambar/Desain tanpa judul 2.png",
            },
          ],
        },
        {
          id: "STY-2023-002",
          date: "2023-10-10",
          status: "processing",
          total: 350000,
          items: [
            {
              id: 8,
              name: "Ponyo's Ocean Bloomm",
              price: 350000,
              quantity: 1,
              image: "/gambar/Desain tanpa judul 8.png",
            },
          ],
        },
      ],
    };
  },
  computed: {
    filteredOrders() {
      // Filter sederhana berdasarkan tanggal
      if (!this.startDate && !this.endDate) return this.orders;

      return this.orders.filter((order) => {
        const orderDate = new Date(order.date);
        const start = this.startDate ? new Date(this.startDate) : null;
        const end = this.endDate ? new Date(this.endDate) : null;

        return (!start || orderDate >= start) && (!end || orderDate <= end);
      });
    },
  },
  methods: {
    applyFilter() {
      // Bisa ditambahkan logic tambahan jika perlu
      console.log("Filter applied:", this.startDate, this.endDate);
    },
  },
};
</script>

<style scoped>
/* Animasi saat hover card transaksi */
div[class*="bg-white"] {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
div[class*="bg-white"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}
</style>
