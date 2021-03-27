<template>
  <div class="w-full flex flex-wrap">
    <div
      v-for="(color, index) in sliderColors"
      :key="color"
      class="w-full absolute"
    >
      <div
        v-if="currentSlide === index"
        :class="color"
        style="height: 350px"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      interval: "",
      sliderColors: ["bg-blue-600", "bg-yellow-600", "bg-green-700"],
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