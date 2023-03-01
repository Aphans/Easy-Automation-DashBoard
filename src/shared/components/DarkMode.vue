<template>
    <div>
      <div 
        class="flex justify-center items-center"
        v-bind:class="{
          'bg-white': !darkMode,
          'bg-gray-900': darkMode
        }"
      >
        <button
          class="px-4 py-2 rounded-lg"
          v-bind:class="{
            'bg-blue-500 hover:bg-blue-700': !darkMode,
            'bg-gray-400 hover:bg-gray-500': darkMode
          }"
          @click="toggleDarkMode"
        >
          {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        darkMode: false
      }
    },
    methods: {
      toggleDarkMode() {
        this.darkMode = !this.darkMode
      }
    }
  }
  </script>