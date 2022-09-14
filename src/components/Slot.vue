<template>
  <strong>This is an Error for Demo Purposes</strong>
  <slot name="only" :only="only" />
  <slot></slot>
</template>

<script setup>
import { ref } from 'vue'

const only = ref('only')
</script>