<style lang="sass" scoped>
.the_header
  display: flex
  height: 582px

.the_menu_container
  margin-right: 20px
  width: 280px

.the_banner_container
  flex: 1
</style>

<template lang="pug">
.HomePage
  .the_header.container
    Menu.the_menu_container
    Banner.the_banner_container
  GoodsSwiper
  GoodsHot
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Menu from './menu'
import Banner from './banner'
import GoodsSwiper from './goods-swiper'
import GoodsHot from './goods-hot'

@Component({
  components: {
    Menu,
    Banner,
    GoodsSwiper,
    GoodsHot,
  },
})
export default class Home extends Vue {

}
</script>
