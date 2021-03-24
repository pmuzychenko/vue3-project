<template>
  <h1>Some heros</h1>
  <ul>
    <li v-for="(hero, ind) in heros" :key="ind">{{ ind }}: {{ hero.name }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      heros: [
        { name: "Batman" },
        { name: "Superman" },
        { name: "Flash" },
        { name: "Wonder woman" },
      ],
    };
  },
};
</script>

