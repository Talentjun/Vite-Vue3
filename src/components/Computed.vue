<script setup>
import { reactive, computed, ref } from 'vue'
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery',
  ],
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
console.log(publishedBooksMessage.value) // 重要

const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) {
    console.log(newValue)
    ;[firstName.value, lastName.value] = newValue.split(' ')
  },
})

function changeFullName() {
  fullName.value = 'hello yejun'
}
</script>

<template>
  <div>我是Computed要展示的内容 {{ publishedBooksMessage }}</div>
  <button @click="changeFullName">我是fullName{{ fullName }}</button>
</template>