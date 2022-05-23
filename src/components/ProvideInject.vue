<template>
  <button @click="updateLocation">{{ location }}</button>
</template>

<script setup>
import { inject } from 'vue'
const { location, updateLocation } = inject('location')
</script>