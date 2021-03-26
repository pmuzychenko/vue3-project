<template>
  <AppHeader />
  <div class="w-full flex">
    <Calendar />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Calendar from "./components/Calendar.vue";
export default {
  components: { AppHeader, Calendar },
};
</script>

