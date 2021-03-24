<template>
  <h1>Some heros {{ herosCount }}</h1>
  <ul>
    <li v-for="(hero, index) in heros" :key="hero.name">
      <div>{{ hero.name }} <button @click="removeHero(index)">x</button></div>
      <input />
    </li>
  </ul>
  <form @submit.prevent="addNewHero">
    <input v-model="newHero" placeholder="Type the name of your hero" />
    <button type="submit">Add hero</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fname: "Pavel",
      lname: "Muzychenko",
      newHero: "Aquaman",
      heros: [
        { name: "Batman" },
        { name: "Superman" },
        { name: "Flash" },
        { name: "Wonder woman" },
      ],
    };
  },
  computed: {
    herosCount() {
      return `${this.heros.length} heros`;
    },
  },
  methods: {
    addNewHero() {
      if (this.newHero.trim().length !== 0) {
        this.heros.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    removeHero(index) {
      console.log(index);
      this.heros = this.heros.filter((hero, i) => i !== index);
      console.log(this.heros);
    },
  },
};
</script>

