<style lang="sass" scoped>
.footer_container
  margin-top: 40px
  width: 100%
  background: #fff
  border-top: 1px solid #eaeaea
  font-size: 12px

  >.content
    width: 1080px
    margin: auto

  >.footer_aside
    width: 100%
    height: 30px
    line-height: 30px
    text-align: center
    color: #c2c2c2
    background: #333

.btmlist
  padding: 40px 0
  display: flex
  border-bottom: 1px solid #eaeaea

  >.item
    flex: 1

    .tit
      font-size: 18px
      font-weight: bold
      display: block
      line-height: 22px

    .icon
      float: left
      margin: 0 12px 0 0
      width: 44px
      height: 44px
      background: url(~common/imgs/footer-icons.png) no-repeat
      background-size: cover

    .icon_circle-1
      background-position: 0 0

    .icon_circle-2
      background-position: -61px 0

    .icon_circle-3
      background-position: -122px 0

    .icon_circle-4
      background-position: -184px 0

    .desc
      font-size: 14px
      display: block
      line-height: 22px

.guideList
  display: flex
  padding: 40px 0 90px

  >.item
    padding: 0 24px
    height: 128px
    border-left: 1px solid #eaeaea

    &:first-child
      border: none
      padding-left: 0

    &:last-child
      border: none
      text-align: center

    .dt
      margin: -4px 0 10px

      .subtitle
        font-size: 18px
        font-weight: 400

    .dd
      line-height: 24px

      a:hover
        text-decoration: underline

  .logo_box
    margin-bottom: 20px
    display: block
    width: 220px
    height: 42px
    cursor: pointer

    .logo
      width: auto
      height: 42px

  .focuson
    >.itm
      position: relative
      margin-left: 10px
      cursor: pointer

      &:hover
        .m-notice
          display: block

      >.i-weixin
        font-size: 30px
        color: #09bb07

      >.i-weibo
        font-size: 30px
        color: #e21428

      >.m-notice
        position: absolute
        left: -44px
        top: 20px
        display: none
        z-index: 10

</style>

<template lang="pug">
footer.footer_container
  .content
    ul.btmlist
      li.item
        span.icon.icon_circle-1  
        strong.tit 100%正品
        span.desc 正品保障 假一赔十
      li.item
        span.icon.icon_circle-2  
        strong.tit 海外直邮
        span.desc 缩减中间环节 确保低价
      li.item
        span.icon.icon_circle-3  
        strong.tit 7天无理由退货
        span.desc 国内退货 售后无忧
      li.item.last
        span.icon.icon_circle-4  
        strong.tit 满99包邮
        span.desc 部分特殊商品除外
    ul.guideList
      li.item
        a.logo_box(href='#', title='')
          img.logo(src='https://placehold.it/220x40', alt='LOGO')
        .focuson
          span.footer_label 关注我们
          a.itm(href='#', target='_blank', rel='nofollow')
            i.icon.i-weixin
            span.m-notice.m-notice-1
              img(src='https://placehold.it/100x100', width='100px', height='100px')
          a.itm(href='javascript:void(0);', rel='nofollow')
            i.icon.i-weibo
            span.m-notice
              img(src='https://placehold.it/100x100', width='100px', height='100px')
      li.item
        dl
          dt.dt
            .subtitle 活范保障
          dd.dd
            a(target='_blank', href='#', title='假一赔十', rel='nofollow', data-param='zn=footer') 假一赔十
          dd.dd
            a(target='_blank', href='#', title='廉正监督', rel='nofollow', data-param='zn=footer') 廉正监督
      li.item
        dl
          dt.dt
            .subtitle 新手指南
          dd.dd
            a(target='_blank', href='#', title='购物流程', data-param='zn=footer') 购物流程
          dd.dd
            a(target='_blank', href='#', title='支付方式', data-param='zn=footer') 支付方式
          dd.dd
            a(target='_blank', href='#', title='通关税费', data-param='zn=footer') 通关税费
          dd.dd
            a(target='_blank', href='#', title='常见问题', data-param='zn=footer') 常见问题
      li.item
        dl
          dt.dt
            .subtitle 售后服务
          dd.dd
            a(target='_blank', href='#', title='退货政策', data-param='zn=footer') 退货政策
          dd.dd
            a(target='_blank', href='#', title='退货流程', data-param='zn=footer') 退货流程
          dd.dd
            a(target='_blank', href='#', title='退款说明', data-param='zn=footer') 退款说明
          dd.dd
            a.j-openService(title='联系客服') 联系客服
      li.item
        dl
          dt.dt
            .subtitle 物流配送
          dd.dd
            a(target='_blank', href='#', title='配送方式', data-param='zn=footer') 配送方式
          dd.dd
            a(target='_blank', href='#', title='配送服务', data-param='zn=footer') 配送服务
          dd.dd
            a(target='_blank', href='#', title='运费标准', data-param='zn=footer') 运费标准
          dd.dd
            a(target='_blank', href='#', title='物流跟踪', data-param='zn=footer') 物流跟踪
      li.item
        dl
          dt.dt
            .subtitle 关于我们
          dd.dd
            a(target='_blank', href='#', title='联系我们', rel='nofollow', data-param='zn=footer') 联系我们
          dd.dd
            a(target='_blank', href='#', title='招商合作', rel='nofollow', data-param='zn=footer') 招商合作
          dd.dd
            a(target='_blank', href='#', title='销售联盟', rel='nofollow', data-param='zn=footer') 销售联盟
          dd.dd
            a(target='_blank', href='#', title='CEO邮箱', rel='nofollow', data-param='zn=footer') CEO邮箱
      li.item
        img.block(src='https://placehold.it/108x108', width='108px', height='108px')
        span 扫描下载手机版
  aside.footer_aside
    p 北京活范儿科技有限公司版权所有 ©2017-2027 ICP经营许可证 京ICP备17065455号-1

</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class TheFooter extends Vue {

}
</script>
