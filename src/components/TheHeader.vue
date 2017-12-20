<style lang="sass" scoped>
.TheHeader
  margin-bottom: 20px
  width: 100%
  height: 96px
  border-top: 4px solid #1f2a44
  border-bottom: 1px solid #ddd
  background: #fff
  overflow: hidden

.header_guide
  display: flex
  height: 26px
  line-height: 26px
  font-size: 11px

  >.guide_desc
    padding-left: 20px
    font-weight: 400
    font-size: 11px

  >.guide_list
    flex: 1
    text-align: right

    >.item
      margin-right: 15px
      padding: 0 5px
      display: inline-block
      line-height: 25px

      &:hover
        background: #eee

.header_inner
  background: #fff
  height: 65px

  >.container
    display: flex

.header_left
  flex: 1
  display: flex
  align-items: center
  font-size: 12px

  >.logo
    margin-right: 30px
    margin-left: 20px
    width: 200px
    height: 45px

    >.img
      max-width: 200px
      height: 100%

  >.header_search
    margin-right: 20px
    width: calc(100% - 240px)
    max-width: 800px
    margin-right: 20px
    display: flex

    >.input
      flex: 1

    .select
      width: 130px
      background: #f2f2f2
    .button
      border-top-left-radius: 0
      border-bottom-left-radius: 0

.header_right
  width: 175px
  display: flex
  font-size: 12px

  .icon
    font-size: 24px

  .login_box
    padding: 10px
    text-align: center
    height: 65px

    &:hover
      background: #eee

    >.text
      font-weight: 400

  .cart_box
    @extend .login_box
    padding: 10px 20px
</style>

<template lang="pug">
.TheHeader
  .container
    .header_guide
      h1.guide_desc 买日本商品就在DOKODEMO！可以直接邮寄到世界80多个国家和地域。
      ul.guide_list
        li.item.pointer #[i.i-like_fill] 客户服务
        li.item.pointer #[i.i-feedback_fill]常见问题
        li.item.pointer #[i.i-mobilephone_fill]App

  Affix
    .header_inner
      .container
        .header_left
          router-link.logo(to="/"): img.img(src="https://placehold.it/200x50")
          .header_search
            el-input.input(placeholder='搜索商品/品牌' v-model='input5')
            el-select.select(v-model='select' placeholder='请选择')
              el-option(label='所有类别', value='0')
              el-option(label='美容/化妆品', value='1')
              el-option(label='母婴/儿童', value='2')
              el-option(label='家具/家电', value='3')
            el-button.button(icon='el-icon-search' type="primary")
        .header_right
          el-popover(
            placement="bottom"
            width="230"
            trigger="hover"
          )
            .login_box.pointer(slot="reference")
              i.icon.i-user
              p.text 你好，请登录
            .header_right-popover_content
              el-button.button(type="primary" size="small") 你好，请登录
              router-link(to="/").underline.main_color.fz12 注册账号

          el-popover(
            placement="bottom"
            width="230"
            trigger="hover"
          )
            .cart_box.pointer(slot="reference")
              i.icon.i-cart
              p.text 购物车

            .header_right-popover_content
              el-button.button(type="primary" size="small") #[i.i-cart_small] 查看购物车
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Affix from 'components/Affix'

@Component({
  components: {
    Affix,
  },
})
export default class TheNav extends Vue {
  input5 = ''
  select = '0'
}
</script>
