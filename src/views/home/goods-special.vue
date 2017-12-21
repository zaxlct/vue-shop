<style lang="sass" scoped>
.special_goods_container
  margin-top: 50px
  display: flex
  background: #fff

.category_head
  display: flex
  width: 38%

  >.category_box
    position: relative
    width: 218px

    >.h3
      font-size: 18px
      margin-right: 2px
      font-weight: 400
      height: 136px
      border-bottom: 2px solid #f6f6f6
      display: flex
      justify-content: center
      align-items: center

      >.category_title
        color: #56b5fd

        &:hover >.icon
          left: 6px

        >.icon
          position: relative
          left: 0
          transition: left .2s
          font-weight: bolder

    >.category_middle
      padding: 16px 0 0 16px

      >.category
        line-height: 36px

        >.link
          color: #626262
          font-size: 12px

          &:hover
            color: #03addd

    >.category_viewall
      position: absolute
      bottom: 16px
      left: 16px
      color: #03addd
      font-size: 12px

      &:hover
        text-decoration: underline

  >.category_image
    flex: 1
    display: flex
    flex-direction: column
    height: 100%
    background: #56b5fd

    .img
      width: 100%

    .img_desc
      flex: 1
      display: flex
      color: #fff
      align-items: center
      justify-content: center
      font-size: 16px

.category_items
  width: 62%
  padding: 40px 20px 20px
  display: flex
  flex-wrap: wrap

  >.category
    width: 20%
    padding: 0 0 15px 15px

</style>

<template lang="pug">
section
  .special_goods_container.container(v-for="n in 4" :key="4")
    .category_head
      .category_box
        h3.h3: router-link(to="2").category_title 医学品 #[i.icon.i-enter]
        ul.category_middle
          li.category
            router-link.link(to="/") 眼药
          li.category
            router-link.link(to="/") 肩膀僵硬 / 腰痛 / 肌肉酸痛
          li.category
            router-link.link(to="/") 皮肤药
          li.category
            router-link.link(to="/") 镇痛
          li.category
            router-link.link(to="/") 漱口药 / 喉哝 / 口腔
          li.category
            router-link.link(to="/") 整肠药
          li.category
            router-link.link(to="/") 肠胃药
          li.category
            router-link.link(to="/") 感冒

        router-link.category_viewall(to="/") 浏览全部 #[i.i-enter.fz12]

      router-link.category_image(to="/")
        img.img(src="https://placehold.it/388x500")
        .img_desc 给努力的你—日本的医药品

    ul.category_items
      li.category(v-for="n in 10" :key="n")
        GoodsCard.goods_card

</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import GoodsCard from 'components/GoodsCard'

@Component({
  components: {
    GoodsCard,
  },
})
export default class SpecialGoods extends Vue {

}
</script>
