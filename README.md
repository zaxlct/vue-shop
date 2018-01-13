# vue-shop

>  使用 vue + sass + pug + vue-component-class 模仿[DOKODEMO](https://dokodemo.world/zh-Hans/) 首页的项目。

## Build Setup
**node 版本需要大于 8.0**
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
> 请特别注意，直接使用 cnpm 可能会导致依赖不正确。强烈建议给 npm 设置 taobao 的 registry。
```bash
npm install --registry=https://registry.npm.taobao.org
```

或者使用 nrm
```bash
npm install nrm -g
nrm use taobao
```

如果你已经用上了 yarn，建议这样
```bash
yarn config set registry https://registry.npm.taobao.org
yarn
```

## 第三方库
- vue 2.5+
- vue-router
- vuex
- axios
- [vue-class-component](https://github.com/vuejs/vue-class-component)
- [element-ui 2.x](http://element-cn.eleme.io/#/zh-CN)
- babel-polyfill

## 模板
- sass
- pug

## 代码规范
- 两个空格为一个 Tab

### JS
- Standard Style
- 不写分号
- 一行开头是括号或者方括号的时候加上分号就可以了，其他时候全部不需要
- 用单引号
- template 里用双引号
- 请设置编辑器，保存的时候自动删除多余空格
- 优先使用 ES6/ES7 语法

### HTML
- 属性用双引号
- 请使用 pug

### CSS
- 请使用 sass
- 元素选择器应该避免在 scoped 中出现

### [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/)
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

## 全局公用函数
如果你需要让一个工具函数在每个组件可用，可以把方法挂载到 Vue.prototype上。

main.js 中
```javascript
Vue.prototype.method = function () {}
```
那么组件代码里
```javascript
this.method()
```

## autoprefix 设置
vue官方模板的设置是last 2 versions，相对来说支持浏览器版本过少，会导致你在某些Android机子上出现问题。
PC 端建议使用 last 7 versions（会生成-ms前缀代码）
移动端建议使用配置 ['iOS >= 7', 'Android >= 4.1']

## 禁用 eslint
并不推荐禁用eslint, 编码规范可以一定程序上保证代码质量。但是如果你确实想禁用，可以删除build/webpack.base.conf.js里的相关代码。
```javascript
preLoaders: [
  {
   test: /\.vue$/,
   loader: 'eslint',
   include: [
     path.join(projectRoot, 'src')
   ],
   exclude: /node_modules/
  },
  {
   test: /\.js$/,
   loader: 'eslint',
   include: [
     path.join(projectRoot, 'src')
   ],
   exclude: /node_modules/
  }
]
```
如果你只是想禁用对某一文件的检测，那么可以在.eslintignore里添加规则。
如果你是想禁止某一行的检测，那么可以使用// eslint-disable-line。
更加灵活的使用参考 [eslint文档](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)。
