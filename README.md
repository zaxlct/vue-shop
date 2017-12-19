# huofanr

> huofanr pc

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 第三方库
- vue 2.5+
- vue-router
- vuex
- axios
- [vue-class-component](https://github.com/vuejs/vue-class-component)
- [element-ui 2.x](http://element-cn.eleme.io/#/zh-CN)
- babel-polyfill

## 模板
- sass
- pug

## 代码规范
- 两个空格为一个 Tab

### JS
- Standard Style
- 不写分号
- 用单引号
- template 里用双引号
- 请设置编辑器，保存的时候自动删除多余空格
- 优先使用 ES6/ES7 语法

### HTML
- 属性用双引号
- 请使用 pug

### CSS
- 请使用 sass
- 元素选择器应该避免在 scoped 中出现

### (Vue 风格指南)(https://cn.vuejs.org/v2/style-guide/)
- 组件命名：MyComponent.vue
- 只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性
- 应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop

### 文件模板
```vue
<template lang="pug">

</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MyComponent extends Vue {

}
</script>

<style lang="sass" scoped>

</style>
```
