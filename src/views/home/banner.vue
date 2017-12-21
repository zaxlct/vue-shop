<style lang="sass" scoped>
h3
  color: #475669
  font-size: 14px
  opacity: 0.75
  line-height: 150px
  margin: 0

.el-carousel__item:nth-child(2n)
    background-color: #99a9bf

.el-carousel__item:nth-child(2n+1)
    background-color: #d3dce6

// .merits_container
//   margin-top: 20px
//   padding: 10px 0
//   width: 100%
//   height: 125px
//   background: #fff
//   text-align: center

//   >.h2
//     font-size: 1.2rem
//     font-weight: 400
//     padding-bottom: 10px

//   >.merits_list
//     display: flex

//     >.item
//       flex: 1
</style>

<template lang="pug">
.the_banner_container
  el-carousel(height="582px")
    el-carousel-item(v-for="item in 4" :key="item")
      h3
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Banner extends Vue {

}
</script>
