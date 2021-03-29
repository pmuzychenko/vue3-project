<template>
  <section
    class="w-screen h-screen z-20 bg-gray-500 top-0 fixed opacity-50"
    @click="$emit('closeLogin')"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto z-30 bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
          <h1 class="text-2xl text-center font-bold">Login</h1>
          <form class="p-2 my-2" @submit.prevent="submitFormData">
            <div class="my-4">
              <label class="text-xl">Email or username</label>
              <input
                class="w-full p-2 rounded border shadow"
                placeholder="Enter email or username"
                v-model="email"
              />
            </div>
            <div class="my-4">
              <label class="text-xl">Password</label>
              <input
                type="password"
                class="w-full p-2 rounded border shadow"
                placeholder="Enter your password"
                v-model="password"
              />
            </div>
            <div class="my-4">
              <button
                type="submit"
                class="w-full border shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white text-xl p-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilites/firebase.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitFormData() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log("res ", res);
        })
        .catch((error) => {
          console.log("error ", error);
        });
    },
  },
};
</script>

<style>
</style>