<template>
  <section class="text-center my-5">
    <button class="px-2 rounded border" @click="loginWithGoogle">
      Login with Google
    </button>
  </section>
</template>

<script>
import firebase from "../utilites/firebase";
export default {
  methods: {
    loginWithGoogle() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => this.$emit("closeLoginFromGoogle"));
    },
  },
};
</script>

<style>
</style>