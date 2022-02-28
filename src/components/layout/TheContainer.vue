<template>
  <div class="container-root">
    <el-container>
      <the-slider />
      <el-container class="header-main">
        <the-header />
        <the-main-panel />
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import TheMainPanel from './TheMainPanel.vue'
import TheHeader from './TheHeader.vue'
import TheSlider from './TheSlider.vue'
</script>

<style scoped lang="scss">
.container-root {
  height: 100%;
  width: 100%;
}
.header-main{
  display: flex;
  flex-direction: column;
}
</style>