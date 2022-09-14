<script setup>
import { ref } from 'vue'
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
</script>

<template>
  <li v-for="{ message } in items" :key="message">{{ message }}</li>
</template>