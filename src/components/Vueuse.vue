<template>
  <h1>vueuse</h1>
  <p>x: {{ x }}&nbsp; y: {{ y }}</p>
  <p>isDark: {{ isDark }}</p>
  <p>store: {{ store }}</p>
</template>

<script setup>
import { useMouse, usePreferredDark, useLocalStorage } from '@vueuse/core'

const { x, y } = useMouse()

const isDark = usePreferredDark()

const store = useLocalStorage('my-storage', { name: 'Apple', color: 'red' })
</script>