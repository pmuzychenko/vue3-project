<template>
  <nav
    class="w-full text-white bg-gradient-to-r from-blue-800 to-blue-500 px-4 py-2"
  >
    <router-link
      v-for="link in list"
      :key="link"
      :to="link.path"
      class="mx-2"
      >{{ link.title }}</router-link
    >
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="$emit('openLoginModal')">Login</button>
  </nav>
</template>

<script>
import firebase from "../utilites/firebase";
export default {
  props: ["isLoggedIn"],
  data() {
    return {
      list: [
        { title: "Marvel-heros", path: "/marvel-heros" },
        { title: "Calendar", path: "/calendar" },
        { title: "Markdown", path: "/markdown" },
        { title: "Slider Carousel", path: "/slider" },
        { title: "Calculator", path: "/calculator" },
      ],
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
</style>