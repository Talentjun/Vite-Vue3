<template>
  <p>title: {{ title }}</p>
</template>
<script setup>
import { defineProps } from 'vue'

const data = defineProps(['title']) // 是一个Proxy对象 {title: 'xxxxx'}
console.log(data)
</script>