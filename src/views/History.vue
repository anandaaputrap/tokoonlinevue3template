<template>
    <Navbar />
    
    <Footer />
  </template>
  
  <script>
  import Navbar from "/src/components/Navbar.vue";
  import Footer from "/src/components/Footer.vue";
  export default {
    name: "History",
    components: { Navbar, Footer },
  };
  </script>
  
  <style scoped></style>
  