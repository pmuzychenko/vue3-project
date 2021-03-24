<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl text-center font-bold">
        Some heros {{ herosCount }}
      </h1>
      <ul>
        <li
          class="flex justify-between"
          v-for="(hero, index) in heros"
          :key="hero.name"
        >
          <div>
            {{ hero.name }}
          </div>
          <button @click="removeHero(index)">x</button>
        </li>
      </ul>
      <form class="mt-10" @submit.prevent="addNewHero">
        <input
          class="border rounded"
          v-model="newHero"
          placeholder="Type the hero name"
        />
        <button
          class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"
          type="submit"
        >
          Add hero
        </button>
      </form>
    </div>
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

