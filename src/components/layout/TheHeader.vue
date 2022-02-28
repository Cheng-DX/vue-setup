<template>
  <el-header class="header">
    <el-icon size="30" @click="change()" class="icon">
      <fold v-if="collapse" />
      <expand v-else />
    </el-icon>
    <el-breadcrumb class="breadcrumb">
      <template v-for="route in matched">
        <el-breadcrumb-item
          v-if="!(route.children?.length === 1)"
          :to="route.path"
        >{{ routeTitle(route) }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </el-header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import routeTitle from '@/function/routeTitle'
import { Fold, Expand } from '@element-plus/icons-vue'
import { useCollapseStore } from '@/stores/collapse';

const route = useRoute()
const matched = computed(() => route.matched)

const collapseStore = useCollapseStore()
const collapse = computed(() => collapseStore.collapse)

function change(){
  collapseStore.change()
}

</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 5px;
}
.breadcrumb {
  margin-inline: 10px;
  font-size: 20px;
}
.icon {
  font-size: 23px;
  cursor: pointer;
  :hover {
    color: #1890ff;
  }
}
</style>