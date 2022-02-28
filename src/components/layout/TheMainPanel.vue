<template>
  <el-main class="main">
    <router-view />
  </el-main>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
.main.el-main {
  height: 100%;
  width: 100%;
  padding: 10px;
}
</style>