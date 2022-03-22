<template>
  <el-button @click="count++">{{ `点击了${count}次` }}</el-button>
  <button @click="count++" class="test">
    <span>{{ `点击了${count}次` }}</span>
  </button>
  <span>{{ `${x1},${y1}` }}</span>
  <span>{{ ` ${x2},${y2}` }}</span>
</template>

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

<style scoped lang="scss">
.test {
  height: 32px;
  background: #fff;
  color: #000000b9;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-inline: 15px;
}
.test:hover {
  background: #40a0ff27;
  color: #40a0ffb9;
  cursor: pointer;
  transition: 0.1s;
}
.test:active {
  border-color: #3595f5c9;
}
.test:focus {
  background: #40a0ff27;
  color: #40a0ffb9;
  cursor: pointer;
  transition: 0.1s;
}
</style>