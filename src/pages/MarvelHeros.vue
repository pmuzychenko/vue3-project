<template>
  <div class="m-auto">
    <h1 class="text-3xl text-center font-bold mb-2">
      Marvel Heros: {{ herosCount }}
    </h1>
    <ul>
      <li
        class="flex justify-between text-xl py-1"
        v-for="(hero, index) in heros"
        :key="hero.name"
      >
        <div>
          {{ hero.name }}
        </div>
        <button @click="removeHero(index)">x</button>
      </li>
    </ul>
    <form class="flex justify-between mt-1" @submit.prevent="addNewHero">
      <input
        class="border rounded w-min outline-none"
        v-model="newHero"
        placeholder="Type the hero name"
        ref="newHeroRef"
      />
      <button
        class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"
        type="submit"
      >
        Add hero
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fname: "Pavel",
      lname: "Muzychenko",
      newHero: "",
      heros: [
        { name: "Spider-Man" },
        { name: "Black Panther" },
        { name: "Deadpool" },
        { name: "Captain America" },
        { name: "Ant-Man" },
      ],
    };
  },
  mounted() {
    this.$refs.newHeroRef.focus();
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

<style>
</style>