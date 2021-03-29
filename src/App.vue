<template>
  <AppHeader @openLoginModal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isLoginOpen" @closeLogin="isLoginOpen = false" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal";
export default {
  components: { AppHeader, LoginModal },
  data() {
    return {
      isLoginOpen: false,
    };
  },
};
</script>

