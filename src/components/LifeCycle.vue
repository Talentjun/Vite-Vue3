<template></template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  console.log('onMounted')
})

/* setTimeout(() => {
  onMounted(() => {
    // 这将不会正常工作
  })
}, 100) */
</script>

