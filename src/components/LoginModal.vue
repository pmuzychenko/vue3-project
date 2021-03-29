<template>
  <section
    class="w-screen h-screen z-20 bg-gray-500 top-0 fixed opacity-50"
    @click="$emit('closeLogin')"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto z-30 bg-white p-2 rounded shadow">
        <h1>Login</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>