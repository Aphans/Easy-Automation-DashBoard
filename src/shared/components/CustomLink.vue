<template>
      <router-link :to="link.to" class="px-3 py-2 rounded-full text-blue-500 hover:bg-gray-200 hover:text-indigo-500">
        {{ link.name }}
      </router-link>
  </template>
  
  <script>
  export default {
      props: {
          link: {
              type: Object,
              required: true
          }
      },
  }
  </script>
  
  <style scoped>
  </style>