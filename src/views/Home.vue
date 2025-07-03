<template>
  <Navbar />
  <div class="section bg-image flex overflow-hidden h-screen text-gray-800">
    <div
      class="hero bg-gray-200 text-center grid md:grid-cols-2 w-4/6 m-auto p-8 bg-opacity-90 rounded-lg"
    >
      <img class="icon m-auto rounded-lg" src="/gambar/20250529_214253_0000.png" alt="" />
      <div class="text m-auto text-lg md:ml-5 p-5 md:text-left">
        <div class="head text-3xl mb-3 font-semibold">Welcome to Starryist!</div>
        <div class="desc">
          Kami percaya bahwa bunga bukan sekadar hiasan—ia adalah ungkapan cinta, harapan,
          dan keindahan hidup. Dari momen bahagia hingga ungkapan simpati, kami hadir
          untuk membantu Anda menyampaikan perasaan dengan cara yang paling indah.
        </div>
      </div>
    </div>
  </div>

  <div class="section py-28 w-full bg-gray-200 text-gray-800">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Image Section -->
        <div class="subsec overflow-hidden rounded-lg shadow-xl">
          <img
            class="w-full h-auto object-cover max-h-[500px]"
            src="/gambar/1.jpg"
            alt="Tentang Staryyist"
          />
        </div>

        <!-- Text Section -->
        <div class="subsec p-6 md:p-8">
          <h2 class="title font-semibold text-3xl mb-6 text-green-700">
            Let's Get to Know More About Staryyist
          </h2>
          <p class="desc text-lg leading-relaxed text-gray-700">
            Dengan penuh cinta dan ketelatenan, kami merangkai setiap bunga agar menjadi
            pesan yang bermakna. Terima kasih telah mempercayakan momen istimewa Anda
            kepada kami. Semoga setiap kuntum yang kami hadirkan, membawa senyum dan
            kehangatan bagi siapa pun yang menerimanya.
          </p>
        </div>
      </div>
    </div>
  </div>
  <section class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div class="order-2 md:order-1">
        <h2 class="text-3xl font-bold text-green-700 mb-6">Our Philosophy</h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          At Staryyist, we believe flowers are more than just decorations - they're
          messengers of emotion. Each bouquet is carefully crafted to tell a unique story
          and evoke special feelings.
        </p>
        <p class="text-gray-600 mb-6 leading-relaxed">
          We source our flowers from ethical growers who share our commitment to
          sustainability. From field to vase, we ensure every stem is treated with care
          and respect.
        </p>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg
              class="h-5 w-5 text-pink-500 mt-1 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-gray-700">100% fresh, seasonal flowers</span>
          </li>
          <li class="flex items-start">
            <svg
              class="h-5 w-5 text-pink-500 mt-1 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-gray-700">Eco-friendly packaging</span>
          </li>
          <li class="flex items-start">
            <svg
              class="h-5 w-5 text-pink-500 mt-1 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-gray-700">Personalized design consultations</span>
          </li>
        </ul>
      </div>
      <div class="order-1 md:order-2">
        <img
          src="/gambar/3.jpg"
          alt="Florist arranging flowers"
          class="rounded-xl shadow-lg w-full h-auto max-h-[500px] object-cover"
        />
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-20 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-green-700 mb-12">Meet Our Team</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Team Member 1 -->
        <div class="team-card bg-white p-6 rounded-xl shadow-md transition duration-300">
          <img
            src="/gambar/4.jpg"
            alt="Founder"
            class="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-pink-100"
          />
          <h3 class="text-xl font-semibold text-center text-gray-800">Aisha Rahman</h3>
          <p class="text-center text-pink-500 mb-3">Founder & Lead Florist</p>
          <p class="text-gray-600 text-center">
            With over 10 years of floral design experience, Aisha brings creativity and
            passion to every arrangement.
          </p>
        </div>

        <!-- Team Member 2 -->
        <div class="team-card bg-white p-6 rounded-xl shadow-md transition duration-300">
          <img
            src="/gambar/5.jpg"
            alt="Designer"
            class="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-pink-100"
          />
          <h3 class="text-xl font-semibold text-center text-gray-800">Budi Santoso</h3>
          <p class="text-center text-pink-500 mb-3">Creative Director</p>
          <p class="text-gray-600 text-center">
            Budi's innovative designs blend traditional techniques with modern aesthetics
            for stunning results.
          </p>
        </div>

        <!-- Team Member 3 -->
        <div class="team-card bg-white p-6 rounded-xl shadow-md transition duration-300">
          <img
            src="/gambar/6.jpg"
            alt="Customer Service"
            class="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-pink-100"
          />
          <h3 class="text-xl font-semibold text-center text-gray-800">Citra Dewi</h3>
          <p class="text-center text-pink-500 mb-3">Customer Experience</p>
          <p class="text-gray-600 text-center">
            Citra ensures every Staryyist customer receives personalized attention and
            care.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-20 px-4 bg-white">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-green-700 mb-12">
        What Our Customers Say
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Testimonial 1 -->
        <div class="bg-gray-50 p-6 rounded-xl">
          <div class="flex items-center mb-4">
            <svg
              class="w-8 h-8 text-yellow-400 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span class="text-lg font-semibold">5.0</span>
          </div>
          <p class="text-gray-600 italic mb-4">
            "The Staryyist team created the most beautiful bouquet for my anniversary. My
            wife cried happy tears when she saw it!"
          </p>
          <p class="font-medium text-gray-800">- David Wijaya</p>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-gray-50 p-6 rounded-xl">
          <div class="flex items-center mb-4">
            <svg
              class="w-8 h-8 text-yellow-400 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span class="text-lg font-semibold">5.0</span>
          </div>
          <p class="text-gray-600 italic mb-4">
            "I've ordered flowers from Staryyist multiple times and they never disappoint.
            The quality is exceptional and the designs are unique."
          </p>
          <p class="font-medium text-gray-800">- Sarah Tan</p>
        </div>
      </div>
    </div>
  </section>
  <Footer /> 
</template>

<script>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";
export default {
  name: "Home",
  components: { Navbar, Footer },
};
</script>

<style scoped>
.bg-image {
  background-image: url("gambar/2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

body {
  background: white !important;
}
</style>
