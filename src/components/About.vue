<template>
  <div>
    <!-- {{ user.age }} -->
    <!-- {{ num1 }} -->
    <!-- {{ obj.num1 }} -->
    <!-- {{ user }}
    {{ userJob }}
    {{ userReactive }} -->
    <!-- {{ fooRef }} -->
  </div>
  <!-- <p>ref state1: {{ state1.count }}</p>
  <button @click="add1">增加 state1 的 count</button>
  <p>toRef state2: {{ state2 }}</p>
  <button @click="add2">增加 state2</button> -->
  <about-child father="我是你爸爸"></about-child>
  <about-second-child fathers="About.vue"></about-second-child>
</template>

<script>
import AboutChild from './AboutChild.vue'
import AboutSecondChild from './AboutSecondChild.vue'
import { reactive, ref, toRef } from 'vue'
export default {
  name: 'about',
  components: {
    AboutChild,
    AboutSecondChild,
  },
  setup() {
    // const user = reactive({ age: 27 })
    // return { user }
    // const num1 = ref(1)
    // const num2 = ref(2)
    // const obj = reactive({ num1 })
    // console.log(num1)
    // obj.num2 = num2
    // console.log(obj.num2)
    // console.log(obj.num2 == num2.value)
    // // ref 会被解包
    // console.log(obj.num1 == num1.value)
    // num1.value++
    // console.log(num1.value)
    // console.log(obj.num1)
    // obj.num1++
    // console.log(num1.value)
    // console.log(obj.num1)
    // console.log(obj)
    //  return {
    //   num1,
    //   num2,
    //   obj,
    // }
    // const user = ref({ age: 30 })
    // const userJob = ref('前端工程师')
    // const userReactive = reactive({ name: 'yejun' })
    // console.log(user.value) // { age: 30 }
    // console.log(userJob.value) // '前端工程师'
    // console.log(user) // RefImpl {...}
    // console.log(userReactive)
    // return {
    //   user,
    //   userJob,
    //   userReactive,
    // }
    // const state = reactive({ foo: 1 })
    // const fooRef = toRef(state, 'foo')
    // state.foo++
    // console.log(fooRef.value)
    // console.log(fooRef)
    // function add() {
    //   state.foo++
    // }
    // return {
    //   fooRef,
    //   add,
    // }
    // const obj = { count: 3 }
    // const state1 = ref(obj)
    // // const state1 = ref(obj.count) // 如果传简单数据类型是值传递，无法体现对源数据的响应式
    // const state2 = toRef(obj, 'count')
    // console.log(state2)
    // function add1() {
    //   state1.value.count++
    //   console.log('原始值：', obj) // obj的 count 递增
    //   console.log('响应式数据对象：', state1.value.count)
    //   console.log('state2', state2.value)
    //   // state1 的 count 属性 和 state 2 递增，页面上的 state1 和 state2 也递增
    // }
    // function add2() {
    //   state2.value++
    //   console.log('原始值：', obj) // obj 的 count 递增
    //   console.log('响应式数据对象：', state2.value)
    //   console.log('state1', state1.value.count)
    //   // state2 的值 和 state1 的 count 属性也同步递增，页面上的 state1 和 state2无变化
    // }
    // return { state1, state2, add1, add2 }
  },
}
</script>