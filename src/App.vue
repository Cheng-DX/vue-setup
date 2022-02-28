<template>
  <div class="root">
    <router-view />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
.root {
  height: 100vh;
  width: 100vw;
}
</style>