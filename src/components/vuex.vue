<template>
  <p>state count : {{ count }}</p>
</template>

<script setup>
import useMapState from '../hooks/useMapState'

const myState = useMapState({
  count: (state) => state.count,
})

console.log('myState', myState)

const { count } = myState
console.log(count)
</script>