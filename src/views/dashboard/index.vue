<script setup>
import { ElMessage } from 'element-plus';
import { ref, watch } from 'vue'
import { useMouse } from '../../components/use/useMouse'
import { useMouse as useMouse2 } from '@vueuse/core';

const count = ref(0)

watch(count, () => {
  if (count.value > 10) {
    count.value = 0
    ElMessage.error('BACK TO ZERO')
  }
})
const { x: x1, y: y1 } = useMouse()
const { x: x2, y: y2 } = useMouse2()
</script>

<template>
  <el-button class="test" @click="count++">{{ `点击了${count}次` }}</el-button>
  <button @click="count++" class="test">
    <span>{{ `点击了${count}次` }}</span>
  </button>
  <span>{{ `${x1},${y1}` }}</span>
  <span>{{ ` ${x2},${y2}` }}</span>
</template>