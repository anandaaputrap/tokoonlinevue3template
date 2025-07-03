<template>
  <Navbar />
  <div class="pt-32 bg-white">
    <h1 class="text-center text-2xl font-bold text-green-800">All Products</h1>
  </div>
  <Footer />
</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";
export default {
  name: "ProductList",
  components: { Navbar, Footer },
};
</script>

<style scoped></style>
