<template>
  <div class="h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${bannerImage})` }">
    <div class="h-full bg-black bg-opacity-75 flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold text-white mb-10">Welcome to home automation</h1>
      <p class="text-lg text-white mb-6">Control and automate all your devices with just one click.</p>
      <router-link :to="{ name: 'Register' }">
        <button class="bg-white text-indigo-500 font-bold py-2 px-4 rounded hover:bg-indigo-100 hover:text-indigo-600">
          Get Started
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImageIndex: 0,
      bannerImages: [
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/1920/1080'
      ]
    };
  },
  computed: {
    bannerImage() {
      return this.bannerImages[this.bannerImageIndex];
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.bannerImageIndex = (this.bannerImageIndex + 1) % this.bannerImages.length;
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}
</style>
