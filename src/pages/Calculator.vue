<template>
  <section class="w-full flex">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Calculator</h1>
      <p
        class="text-3xl text-right mt-5 w-40 h-14 overflow-x-scroll"
        style="direction: rtl"
      >
        {{ currentNum }}
      </p>
      <div class="h-10">
        <small v-if="selectedOperation"
          >{{ prevNum }} {{ selectedOperation }} {{ currentNum }}</small
        >
      </div>

      <div class="my-5 grid grid-cols-4 gap-1">
        <button
          @click="pressed('1')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          6
        </button>
        <button
          @click="pressed('-')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          -
        </button>
        <button
          @click="pressed('7')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          9
        </button>
        <button
          @click="pressed('*')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          *
        </button>
        <button @click="pressed('C')" class="p-2 h-10 border shadow rounded">
          C
        </button>
        <button @click="pressed('0')" class="p-2 h-10 border shadow rounded">
          0
        </button>

        <button
          @click="pressed('=')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="w-10 h-10 p-2 border shadow rounded"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const currentNum = ref("");
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const prevNum = ref("");
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=" || value === "Enter") calculate();
      else if (value === "C") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }
    const appendNumber = (value) =>
      (currentNum.value = currentNum.value + value);

    function applyOperation(value) {
      calculate();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
    }
    const sum = () =>
      (currentNum.value = +prevNum.value + Number(currentNum.value));

    const subtract = () =>
      (currentNum.value = prevNum.value - currentNum.value);

    const multiply = () =>
      (currentNum.value = prevNum.value * currentNum.value);

    const divide = () => (currentNum.value = prevNum.value / currentNum.value);

    function calculate() {
      if (selectedOperation.value === "+") sum();
      else if (selectedOperation.value === "-") subtract();
      else if (selectedOperation.value === "*") multiply();
      else if (selectedOperation.value === "/") divide();
      prevNum.value = "";
      selectedOperation.value = "";
    }

    const clear = () => (currentNum.value = "");

    const handleKeydown = (e) => pressed(e.key);

    onMounted(() => window.addEventListener("keydown", handleKeydown));

    onUnmounted(() => window.removeEventListener("keydown", handleKeydown));

    return {
      currentNum,
      prevNum,
      selectedOperation,
      pressed,
      appendNumber,
      calculate,
      applyOperation,
      clear,
    };
  },
};
</script>

<style>
</style>