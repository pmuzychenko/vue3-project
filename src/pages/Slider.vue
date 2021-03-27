<template>
  <div class="w-full flex flex-wrap relative">
    <div v-for="(color, index) in sliders" :key="color" class="w-full absolute">
      <transition name="fade">
        <div
          v-if="currentSlider === index"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="w-full absolute bottom-0 flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActiveSlider(index)"
          class="w-4 h-4 rounded-full mx-2 cursor-pointer shadow-md"
          :class="currentSlider === index ? 'bg-gray-700' : 'bg-gray-300'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlider: 0,
      interval: "",
      sliders: ["bg-blue-600", "bg-yellow-600", "bg-green-700"],
      isTitleShowing: true,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlider =
        this.currentSlider === 2 ? 0 : this.currentSlider + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    toogleTitle() {
      this.isTitleShowing = !this.isTitleShowing;
    },
    makeActiveSlider(index) {
      this.currentSlider = index;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>