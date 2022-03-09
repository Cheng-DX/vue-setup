<template>
  <el-button size="large" type="primary" @click="add">ADD</el-button>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue'

const state = reactive({
  count: ref(0)
})

console.log(state.count)
</script>

<style scoped>
.card {
  margin-block: 20px;
  width: 50%;
}
</style>