<template>
  <AppHeader />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal";
export default {
  components: { AppHeader, LoginModal },
};
</script>

