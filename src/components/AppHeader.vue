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
    <button class="mx-2">Login</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Marvel-heros", path: "/marvel-heros" },
        { title: "Calendar", path: "/calendar" },
        { title: "Markdown", path: "/markdown" },
        { title: "Slider Carousel", path: "/slider" },
      ],
    };
  },
};
</script>

<style>
</style>