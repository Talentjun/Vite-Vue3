<template>
  <p>counter: {{ store.counter }}</p>
  <button @click="handleClick">counter+1</button>
  <p>msg: {{ msg }}</p>
  <p>doubleCounter {{ doubleCounter }}</p>
  <p>doubleMsg {{ doubleMsg }}</p>
</template>

<script setup>
import { mainStore } from '@/pinia'
import { storeToRefs } from 'pinia'

const store = mainStore()

console.log('pinia', store)

const { counter, msg, doubleCounter, doubleMsg } = storeToRefs(store)
// console.log('storeToRefs', storeToRefs(store))

function handleClick() {
  counter.value++
  store.$patch({
    msg: 'pinia good!',
    counter: counter.value + 1,
  })

  store.$patch((state) => {
    console.log('state', state)
  })

  store.addMsg('yejun') // 加2+yejun

  setTimeout(() => {
    store.$reset() // 重置到默认值
  }, 1000)
}
</script>