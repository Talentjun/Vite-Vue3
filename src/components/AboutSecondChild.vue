<script setup>
import { ref } from 'vue'
const props = defineProps(['fathers'])
console.log('aboutsecondchild', props)
let count = ref(0)
count.value++
console.log(count)
</script>

<template>
  <div>我是aboutsecondchild</div>
  <div>我是count {{ count }}</div>
</template>


<style lang="scss" scoped>
</style>