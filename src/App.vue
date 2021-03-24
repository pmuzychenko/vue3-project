<template>
  <h1>Some heros</h1>
  <ul>
    <li v-for="(hero, ind) in heros" :key="ind">{{ ind }}: {{ hero.name }}</li>
  </ul>
  <form @submit.prevent="addNewHero">
    <input v-model.lazy="newHero" placeholder="Type the name of your hero" />
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
  methods: {
    addNewHero() {
      if (this.newHero.trim().length !== 0) {
        this.heros.push({ name: this.newHero });
        this.newHero = "";
      }
    },
  },
};
</script>

