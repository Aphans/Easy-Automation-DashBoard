<template>
  <header class="shadow-lg fixed w-full z-10 top-0 bg-white">
    <nav class="container mx-auto flex items-center justify-between p-4">
      <h1 class="flex items-center text-lg font-medium text-indigo-500">
        <router-link class="hover:text-indigo-800" :to="{ name: 'Home' }">
          Easy Automation
        </router-link>
      </h1>
      <div class="flex items-center">
        <CustomLink 
          v-for="link in links"
          :key="link.to"
          :link="link"
          class="mx-4 text-gray-500 hover:text-indigo-500"
        />
        <RouterLink
          v-if="!conectado"
          :to="{name:'SignIn'}"
          class="px-4 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600"
        >
          Sign In
        </RouterLink>
        <RouterLink
          v-if="!conectado"
          :to="{name:'Register'}"
          class="px-4 py-2 rounded-md border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
        >
          Register
        </RouterLink>
  <router-link
    to="/dashboard"
    v-if="conectado"
    class="bg-blue-500 hover:bg-blue-600 rounded-lg p-2 transition duration-300 ease-in-out"
  >
    <span class="text-white">
      <i class="fas fa-square fa-lg mr-2 animate-pulse"></i>

      Dashboard
    </span>
  </router-link>

        <button
          v-if="conectado"
          @click="desconectar"
          class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    </nav>
  </header>
</template>


<script setup>
import { onMounted,ref } from 'vue';
import {auth,onAuthStateChanged,signOut} from '../../API/firebase'
import router from '../../router/index'
import CustomLink from './CustomLink.vue';
const conectado = ref(false);
const links = ref([
                { to: '/', name: 'Home' },
            ])
let autentificado;
onMounted(()=>{
    autentificado=auth;
    console.log(autentificado);
    onAuthStateChanged(autentificado,(user)=>{
        if(user){
            conectado.value=true;
        }else{
            conectado.value=false;
        }
    })
})
const desconectar = () => {
  signOut(autentificado).then(() => {
    router.push({ name: 'Home' });
  });
};

</script>
<style scoped>
 @keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

</style>