<template>
  <AppHeader :isLoggedIn="isLoggedIn" @openLoginModal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isLoginOpen" @closeLogin="isLoginOpen = false" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal";
import firebase from "./utilites/firebase.js";

export default {
  components: { AppHeader, LoginModal },
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  mounted() {
    console.log("mounted");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("success");
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        console.log("failed");
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
};
</script>

