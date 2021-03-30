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
import { onMounted, ref, computed } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const heros = ref([
      { name: "Spider-Man" },
      { name: "Black Panther" },
      { name: "Deadpool" },
      { name: "Captain America" },
      { name: "Ant-Man" },
    ]);
    onMounted(() => {
      newHeroRef.value.focus();
    });
    const herosCount = computed({
      get: () => heros.value.length,
    });

    function removeHero(index) {
      heros.value = heros.value.filter((hero, i) => i !== index);
    }
    function addNewHero() {
      if (newHero.value.trim().length !== 0) {
        heros.value.unshift({ name: newHero.value });
        newHero.value = "";
      }
    }

    return { newHero, heros, removeHero, addNewHero, newHeroRef, herosCount };
  },
};
</script>

<style>
</style>