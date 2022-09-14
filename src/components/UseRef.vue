<template>
  <input type="text" ref="input" />
  <Pinia ref="pinia" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Pinia from '@/components/Pinia.vue'
const input = ref(null)
console.log('input', input)

const pinia = ref(null)

console.log('refpinia', pinia)

onMounted(() => {
  input.value.focus()
  console.log('pinia.value', pinia.value.counter) // 通过ref访问子组件需要在子组件使用defineExpose暴露属性
})
</script>