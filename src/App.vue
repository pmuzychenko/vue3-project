<template>
  <h1>Some heros</h1>
  <ul>
    <li v-for="(hero, ind) in heros" :key="ind">{{ ind }}: {{ hero.name }}</li>
  </ul>
  <input v-model.lazy="newHero" />
  <button>Add hero</button>
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

