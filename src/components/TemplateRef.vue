<template>
  <h1>templateRef</h1>
  <input type="text" ref="input" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 声明一个 ref 来存放该元素的引用
// 必须和模板 ref 同名
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
</script>