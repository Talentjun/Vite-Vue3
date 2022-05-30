<script setup>
// 组件v-model默认参数是modelValue
/* 默认情况下，v-model 在组件上都是使用 modelValue 作为 prop，以 update:modelValue 作为对应的事件。我们可以通过给 v-model 指定一个参数来更改这些名字 */
// v-model.capitalize 我们一起来创建一个自定义的修饰符 capitalize，它会自动将 v-model 绑定输入的字符串值第一个字母转为大写
// v-model:title.capitalize
import { useAttrs } from 'vue'
defineProps(['modelValue', 'title'])
defineEmits(['update:modelValue', 'update:title'])
const attrs = useAttrs()
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <input :value="title" @input="$emit('update:title', $event.target.value)" />
  <p>$attrs {{ attrs }}</p>
</template>