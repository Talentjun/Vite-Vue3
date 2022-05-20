<template>
  <input :value="text" @input="(event) => (text = event.target.value)" />
  <!-- true-value 和 false-value 是 Vue 特有的 attributes 且仅会在 v-model
  存在时工作。这里 toggle 属性的值会在选中时被设为 'yes'，取消选择时设为 'no'。
  -->
  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
</template>

<script setup>
import { ref } from 'vue'
const text = ref(0)
const toggle = ref(11)
</script>