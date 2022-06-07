<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, provide, readonly, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Computed from './components/Computed.vue'
import Class from './components/Class.vue'
import List from './components/List.vue'
import Event from './components/Event.vue'
import Form from './components/Form.vue'
import LifeCycle from './components/LifeCycle.vue'
import Watch from './components/Watch.vue'
import TemplateRef from './components/TemplateRef.vue'
import BlogPost from './components/BlogPost.vue'
import Slot from './components/Slot.vue'
import CustomInput from './components/CustomInput.vue'
import ProvideInject from './components/ProvideInject.vue'
import Vuexs from './components/vuex.vue'
import Vueuse from './components/Vueuse.vue'
import Pinia from './components/Pinia.vue'

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' },
])

function changeTitle() {
  console.log('changeTitle')
}

const message = ref('hello')
const bookTitle = ref('bookTitle')

/* provide inject */
const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation,
})

/* 如果你想确保从 provide 传过来的数据不能被 injector 的组件更改，你可以使用readonly() 来包装提供的值 */
// provide('read-only-count', readonly(count))
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <About />
  <Computed />
  <Class />
  <List />
  <Event />
  <Form />
  <LifeCycle />
  <Watch />
  <TemplateRef />
  <BlogPost
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    @change-title="changeTitle"
  />

  <Slot>
    <template v-slot:only="{ only: str }"
      >Something bad happened.{{ str }}</template
    >
  </Slot>

  <Slot />
  <span>我要在slot展示</span>
  <!-- 以上代码会被解析成这样 -->
  <!-- <Slot>
    <span>我要在slot展示</span>
  </Slot> -->
  <h1></h1>
  <CustomInput
    v-model="message"
    v-model:title="bookTitle"
    id="CustomInput id"
  />
  {{ message }}
  {{ bookTitle }}

  <ProvideInject />
  <Vuexs></Vuexs>
  <Vueuse></Vueuse>
  <h1>路由</h1>
  <p>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
  </p>
  <router-view></router-view>
  <h1>状态管理pinia</h1>
  <Pinia />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
