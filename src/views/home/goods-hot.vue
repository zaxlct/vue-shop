<style lang="sass" scoped>
.article_list
  display: flex
  margin-top: 20px

.article_box
  position: relative
  margin-right: 10px
  flex: 1
  height: 650px
  background: #fff

  &:hover
    box-shadow: 0 2px 10px rgba(0,0,0,.2)

  &:last-child
    margin-right: 0

  >.header
    display: block
    height: 280px

    &:hover
      opacity: .8

    >.img
      height: 100%
      width: 100%

  >.article_title
    margin-bottom: 32px
    padding: 38px 16px 8px
    position: relative
    font-size: 18px
    line-height: 1.4
    text-align: center

    &:after
      content: ''
      width: 40px
      height: 2px
      background: #fc534c
      position: absolute
      bottom: 0
      left: calc(50% - 20px)

  >.article_content
    padding: 0 24px
    max-height: 180px
    overflow: hidden
    line-height: 20px
    color: #555
    font-size: 13px

  >.article_link
    position: absolute
    width: 100%
    bottom: 24px
    text-align: center
    font-size: 16px

    &:hover
      color: #03addd
      text-decoration: underline
</style>

<template lang="pug">
.hot_goods_container.container.mt40
  h2.tc 本月的日本热点 PICK UP
  .article_list
    .article_box(v-for="n in 4" :key="n")
      router-link(:to="'2'").header: img.img(src="https://placehold.it/400x200")
      .article_title
        | GROONY 极暖纤维毛毯衣
        br
        | 日本冬季防寒新习惯!

      .article_content
        | 都说日本人不怕冷,其实每到冬天,日本就会有一场保暖产品的盛宴!
        br
        | 也许你常想:冬天,要是能裹着毛毯活动该多好啊... 没错,每年冬季的人气产品GROONY就能帮你实现! 通过独自改良技术的GROONY极暖纤维,充分利用体温不让其散热,无时无刻都让你暖暖的! 而且,触感至细腻柔软也是在日本诸多保暖产品中完胜的原因之一。
        br
        | 为了大家的温暖,DOKODEMO已正式上线出售啰!

      router-link.article_link(:to="'2'") 查看商品 #[i.i-enter]
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class GoodsHot extends Vue {

}
</script>
