<template>
  <div class="w-full flex flex-wrap">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
    <section class="w-10/12 flex m-auto h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full outline-none"
          :value="text"
          @input="update"
          ref="markdownTextAreaRef"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import debounce from "../utilites/mixins/debounce.js";

export default {
  mixins: [debounce],
  data() {
    return {
      text: "",
      // timeout: "",
    };
  },
  mounted() {
    this.$refs.markdownTextAreaRef.focus();
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
    // debounce(func, wait = 1000) {
    //   clearTimeout(this.timeout);
    //   this.timeout = setTimeout(func, wait);
    // },
  },
};
</script>

<style>
</style>