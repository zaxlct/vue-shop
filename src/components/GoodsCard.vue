<style lang="sass" scoped>
@import "~common/sass/mixins"

.goods_card
  padding: 2px
  display: block
  font-size: 12px
  text-align: center

  &:hover
    >.goods_img
      opacity: .8

    >.goods_name
      color: #666
      text-decoration: underline

  >.goods_img
    height: calc((1600px - 60px) / 10)
    width: auto

    @media (max-width: 1600px)
      height: calc((100vw - 60px) / 10)

    @media (max-width: 1100px)
      height: calc((1010px - 60px) / 10)

  >.goods_name
    +text-multiLine-ellipsis(2, 20px)
    text-align: left
    margin: .7rem 0 5px
    font-weight: 400

  >.price
    font-weight: bold

</style>

<template lang="pug">
router-link.goods_card(:to="'1'")
  slot
  img.goods_img(src="https://placehold.it/130x180")
  h4.goods_name Utena佑天兰黄金果冻面膜 玻尿酸 33g×3片,Utena佑天兰黄金果冻面膜 玻尿酸 33g×3片
  .price.main_color 112.12 元
</template>
