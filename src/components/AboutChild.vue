<template>
  <div>我是about的儿子</div>
  <span>爸爸和我说{{ foo }}</span>
  <div>father渲染{{ father }}</div>
  <div>toRefs渲染{{ getInfoName.name }}</div>
</template>

<script>
import { reactive, ref, toRef, toRefs } from 'vue'
export default {
  props: {
    father: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    console.log('prop', props)
    const foo = toRef(props, 'father')
    const father = toRefs(props)
    const info = reactive({ name: 'yejun', age: 27 })
    const getInfoName = toRefs(info)
    console.log(getInfoName.name.value)
    getInfoName.name.value = 'yejun1'
    console.log(getInfoName.name.value)
    console.log('father', father.father.value)
    foo.father = '123'
    return {
      foo,
      father,
      getInfoName,
    }
  },
}
</script>
