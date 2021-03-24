<template>
  <AppHeader />
  <div class="w-full flex">
    <MarvelHeros />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import MarvelHeros from "./components/MarvelHeros.vue";
export default {
  components: { AppHeader, MarvelHeros },
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

