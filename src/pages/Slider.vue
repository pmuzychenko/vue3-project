<template>
  <div class="w-full flex flex-wrap">
    <div
      v-if="currentSlide === 0"
      class="absolute bg-blue-600 w-full"
      style="height: 350px"
    ></div>
    <div
      v-if="currentSlide === 1"
      class="absolute bg-yellow-600 w-full"
      style="height: 350px"
    ></div>
    <div
      v-if="currentSlide === 2"
      class="absolute bg-green-700 w-full"
      style="height: 350px"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval: "",
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
</style>