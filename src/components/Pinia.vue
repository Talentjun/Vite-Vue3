<template>
  <p>counter: {{ store.counter }}</p>
  <button @click="handleClick">counter+1</button>
</template>

<script setup>
import { mainStore } from '@/pinia'
import { storeToRefs } from 'pinia'

const store = mainStore()

// console.log('pinia', store)

const { counter } = storeToRefs(store)

function handleClick() {
  counter.value++
}
</script>