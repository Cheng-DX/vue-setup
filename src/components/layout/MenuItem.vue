<template>
  <el-sub-menu v-if="hasMoreChildren(item)" :index="item.path">
    <template #title>
      <span>{{ routeTitle(item) }}</span>
    </template>
    <menu-item
      v-for="route in item.children"
      :item="route"
      :base-path="item.path"
      :key="route.path"
    />
  </el-sub-menu>
  <el-menu-item
    v-else-if="hasOneChild(item)"
    :index="basePath + '/' + item.children[0].path"
  >{{ routeTitle(item.children[0]) }}</el-menu-item>
  <el-menu-item v-else :index="basePath + '/' + item.path">{{ routeTitle(item) }}</el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import routeTitle from '@/function/routeTitle';

defineProps({
  item: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    required: true
  }
});

const hasMoreChildren = route => route.children?.length > 1
const hasOneChild = route => route.children?.length === 1
</script>

<style scoped>
</style>