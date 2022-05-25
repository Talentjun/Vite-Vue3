<template>
  <p>title: {{ title }}</p>
</template>
<script setup>
import { defineEmits } from 'vue'

const data = defineProps(['title']) // 是一个Proxy对象 {title: 'xxxxx'}
console.log(data)
const emit = defineEmits(['change-title'])
console.log(emit)
emit('change-title')
</script>