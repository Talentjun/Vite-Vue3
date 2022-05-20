<template>
  <h1>监听组件</h1>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>

  <p>监听x y</p>
  <button @click="changeXY">修改xy</button>
  <div>
    <span>x: {{ x }}</span
    ><span>y: {{ y }}</span>
  </div>

  <p>obj的count 监听</p>
  <button @click="objCount">修改count</button>
  <p>count：{{ obj.count }}</p>
</template>

<script setup>
import { ref, watch, reactive } from 'vue'
import axios from 'axios'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await axios.get('https://yesno.wtf/api')
      console.log('axiosres', res)
      // answer.value = (await res.json()).answer
      answer.value = res.data.answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

const x = ref(0)
const y = ref(0)

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

function changeXY() {
  x.value++
  y.value++
}

const obj = reactive({ count: 0 })
// 监听对象
// 提供一个 getter 函数
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)

function objCount() {
  obj.count++
}

watch(
  obj,
  (newValue, oldValue) => {
    console.log(newValue, oldValue)
    // 在嵌套的 property 变更时触发
    // 注意：`newValue` 此处和 `oldValue` 是相等的
    // 因为它们是同一个对象！
  },
  { deep: true }
)

// watchEffect 仅会在其同步执行期间，才追踪依赖。在使用异步回调时，只有在第一个 await 正常工作前访问到的 property 才会被追踪。

// 如果想在侦听器回调中能访问被 Vue 更新之后的DOM，你需要指明 flush: 'post' 选项：
watch(source, callback, {
  flush: 'post',
})

watchEffect(callback, {
  flush: 'post',
})

// 要手动停止一个侦听器，请调用 watch 或 watchEffect 返回的函数：
const unwatch = watchEffect(() => {})

// ...当该侦听器不再需要时
unwatch()
</script>