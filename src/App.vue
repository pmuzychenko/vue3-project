<template>
  <div v-if="isShowing" v-html="title"></div>
  <h2 v-else-if="isShowing === null">This is v-else-if part</h2>
  <h2 v-else>This is v-else demonstration</h2>
  <p>Something else</p>
</template>

<script>
export default {
  data() {
    return {
      title: "<h1>Vue 3</h1>",
      isShowing: null,
    };
  },
};
</script>

