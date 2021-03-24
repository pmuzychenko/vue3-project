<template>
  <h1>Some heros {{ herosCount }}</h1>
  <h2>{{ fullname }}</h2>
  <p>{{ randC }}</p>
  <p>{{ randC }}</p>
  <p>{{ randC }}</p>
  <p>{{ randM() }}</p>
  <p>{{ randM() }}</p>
  <ul>
    <li v-for="(hero, ind) in heros" :key="ind">{{ ind }}: {{ hero.name }}</li>
  </ul>
  <form @submit.prevent="addNewHero">
    <input v-model="newHero" placeholder="Type the name of your hero" />
    <button type="submit">Add hero</button>
  </form>
  <small>This is count of heros {{ herosCount }}</small>
  <button @click="setFullName">Set Fullname</button>
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
    randC() {
      return this.heros.length + Math.random();
    },
    fullname: {
      get() {
        return `My fullname is ${this.fname} ${this.lname}`;
      },
      set(fullname) {
        const nameValues = fullname.split(" ");
        this.fname = nameValues[0];
        this.lname = nameValues[1];
      },
    },
  },
  methods: {
    addNewHero() {
      if (this.newHero.trim().length !== 0) {
        this.heros.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    randM() {
      return Math.random();
    },
    setFullName() {
      this.fullname = "New name";
    },
  },
};
</script>

