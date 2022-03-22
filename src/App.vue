<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="root">
    <router-view />
  </div>
</template>
<style scoped>
.root {
  height: 100vh;
  width: 100vw;
}
</style>