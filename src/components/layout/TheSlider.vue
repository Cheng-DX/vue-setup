<template>
  <el-aside class="slider">
    <el-menu router :default-active="currentRoute" :collapse="collapse">
      <template v-for="route in routes">
        <menu-item v-if="!notLoad(route)" :item="route" base-path :key="route.path" />
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MenuItem from './MenuItem.vue'
import { useCollapseStore } from '@/stores/collapse';

const router = useRouter()
const route = useRoute()
const routes = computed(() => router.options.routes)
const currentRoute = computed(() => route.path)

const collapse = computed(() => useCollapseStore().collapse)

const sliderWidth = computed(() => collapse.value ? '80px' : '200px')

const notLoad = (route) => {
  return route.meta?.notLoad
}
</script>

<style scoped>
.slider {
  width: v-bind(sliderWidth);
  height: 100vh;
}
</style>