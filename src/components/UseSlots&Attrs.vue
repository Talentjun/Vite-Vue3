<template></template>

<script setup>
import { useSlots, useAttrs } from 'vue'

const slots = useSlots()
const attrs = useAttrs()

console.log('slots', slots)
console.log('attrs', attrs)
</script>