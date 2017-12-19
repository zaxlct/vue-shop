<style lang="sass" scoped>
.TheHeader
  margin-bottom: 20px
  width: 100%
  height: 96px
  border-top: 4px solid #1f2a44
  border-bottom: 1px solid #ddd
  background: #fff
  overflow: hidden

.container
  height: inherit

.header_guide
  display: flex
  height: 26px
  line-height: 26px
  font-size: 11px

  >.guide_desc
    padding-left: 30px
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
  height: 65px
  display: flex

.header_left
  flex: 1
  display: flex


.header_right
  display: flex
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

    .header_inner
      .header_left
        router-link.logo(to="/"): img(src="https://placehold.it/200x200")
        .header_search
          el-input.input-with-select(placeholder='请输入内容', v-model='input5')
            el-select(v-model='select', slot='prepend', placeholder='请选择')
              el-option(label='餐厅名', value='1')
              el-option(label='订单号', value='2')
              el-option(label='用户电话', value='3')
            el-button(slot='append', icon='el-icon-search')
      .header_right
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class TheNav extends Vue {
  input5 = ''
  select = ''
}
</script>
