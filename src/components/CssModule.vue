<template>
  <!-- <p :class="$style.red">I am red</p> -->
  <p :class="classes.red">I am red</p>

  <p :class="css.red">setup red</p>

  <p class="text">i am theme color</p>
</template>

<style module="classes">
.red {
  color: red;
}
</style>

<style scoped>
.text {
  color: v-bind('theme.color');
}
</style>

<!-- 一个 <style module> 标签会被编译为 CSS Modules 并且将生成的 CSS class 作为 $style 对象暴露给组件 -->

<!-- <style module>
.red {
  color: red;
}
</style> -->

<script setup>
import { useCssModule } from 'vue'
const css = useCssModule('classes')
console.log('useCssModule', css.red) // 已经转换好的css 转换好的_red_xad9b_2

const theme = {
  color: 'blue',
}
</script>