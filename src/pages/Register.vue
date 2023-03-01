<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold text-indigo-500 mb-6">Create an Account</h1>
    <div class="w-64 border border-indigo-500 rounded p-4">
      <input
        type="text"
        placeholder="Email"
        class="block w-full border border-gray-300 rounded p-2 mb-4"
        v-model="email"
      />
      <input
        type="password"
        placeholder="Password"
        class="block w-full border border-gray-300 rounded p-2 mb-4"
        v-model="password"
      />
      <div class="flex justify-between">
        <button
          class="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600"
          @click="register"
        >
          Register
        </button>
        <button
          class="bg-white text-indigo-500 font-bold py-2 px-4 rounded hover:bg-indigo-100 hover:text-indigo-600"
          @click="RegisterWithGoogle"
        >
          Register with Google
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();
const register = async () => {
  try {
    await createUserWithEmailAndPassword(
      getAuth(),
      email.value,
      password.value
    );
    router.push("/DashBoard");
  } catch (error) {
    console.log(error.code);
    alert(error.message);
  }
};
const RegisterWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);

    router.push("/DashBoard");
  } catch (error) {
    alert(error.message);
  }
};
</script>
