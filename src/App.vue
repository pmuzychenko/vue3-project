<template>
  <h1>Some heros</h1>
  <ul>
    <li v-for="(hero, ind) in heros" :key="ind">{{ ind }}: {{ hero.name }}</li>
  </ul>
  <form @submit.prevent="newHero = 'Wonder Woman'">
    <input v-model.lazy="newHero" />
    <button type="submit">Add hero</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newHero: "Aquaman",
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

