<script setup>
import { ElMessage } from 'element-plus'
import { ref, watch } from 'vue'
import { useMouse } from '../../components/use/useMouse'

const count = ref(0)

watch(count, () => {
  if (count.value > 10) {
    count.value = 0
    ElMessage.error('BACK TO ZERO')
  }
})
const { x, y } = useMouse()
</script>

<template>
  <el-button class="test" @click="count++">{{ `点击了${count}次` }}</el-button>
  <span>{{ `${x},${y}` }}</span>
</template>
