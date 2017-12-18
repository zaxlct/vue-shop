<style lang="sass" scoped>
.wrap
  position: relative
  width: 200px
  left: 50px
  top: 50px

  ul
    padding: 15px
    margin: 9
    list-style: none
    background: #6c6669
    color: #ffffff
    border-right-width: 0

  /*水平居中*/
  li
    display: block
    height: 30px
    line-height: 30px
    padding-left: 12px
    cursor: pointer
    font-size: 14px
    position: relative
    &:active
      background: #999395

    span:hover
      color: #c81623

.none
  display: none

/*二级菜单*/
#sub
  width: 600px
  position: absolute
  border: 1px solid #f7f7f7
  background: #f7f7f7
  box-shadow: 2px 0 rgba(0, 0, 0, .3)
  left: 200px
  top: 0
  box-sizing: border-box
  margin: 0px
  padding: 10px


.sub-content
  a
    font-style: 12px
    color: #666
    text-decoration: none

  dl
    overflow: hidden

  dt
    float: left
    width: 70px
    font-weight: bold
    clear: left
    position: relative

    i
      width: 4px
      height: 14px
      font: 400 9px/14px consolas
      position: absolute
      right: 5px
      top: 5px

  dd
    float: left
    margin-left: 5px
    border-top: 1px solid #eee
    margin-bottom: 5px

    a
      border-left: 1px solid #e0e0e0
      padding: 0 1px
      margin: 4px 0

</style>

<template lang="pug">
#test.wrap(
  @mouseenter="onMenuMouseenter"
  @mouseleave="onMenuMouseleave"
)
  ul
    li(data-id='a' @mouseenter="onSubMenuMouseenter")
      span 家用电器
    li(data-id='b' @mouseenter="onSubMenuMouseenter")
      span 手机 / 运营商 / 数码
    li(data-id='c' @mouseenter="onSubMenuMouseenter")
      span 电脑办公 / 办公
    li(data-id='d' @mouseenter="onSubMenuMouseenter")
      span 家居 / 家具 / 家装 / 厨具
    li(data-id='e' @mouseenter="onSubMenuMouseenter")
      span 男装 / 女装 / 童装 / 内衣
    li(data-id='f' @mouseenter="onSubMenuMouseenter")
      span 美妆个护 / 宠物
  #sub(
    v-show="isShowSub"
    ref="sub"
    @mouseenter="mouseInSub = true"
    @mouseleave="mouseInSub = false"
  )
    .sub-content.none(ref="content_a")
      dl
        dt
          a(href='#')
            | 电视
            i &gt;
        dd
          a(href='#') 曲面电视
          a(href='#') 超薄电视
          a(href='#') HDR电视
          a(href='#') DLED电视
        dt
          a(href='#')
            | 空调
            i &gt;
        dd
          a(href='#') 挂壁式空调
          a(href='#') 柜式空调
          a(href='#') 中央空调
          a(href='#') 以旧换新
        dt
          a(href='#')
            | 洗衣机
            i &gt;
        dd
          a(href='#') 滚筒式洗衣机
          a(href='#') 洗烘一体机
          a(href='#') 波轮洗衣机
          a(href='#') 迷你洗衣机
    .sub-content.none(ref="content_b")
      dl
        dt
          a(href='#')
            | 手机通讯
            i &gt;
        dd
          a(href='#') 手机
          a(href='#') 对讲机
          a(href='#') 以旧换新
          a(href='#') 手机维修
        dt
          a(href='#')
            | 运营商
            i &gt;
        dd
          a(href='#') 合约机
          a(href='#') 选号机
          a(href='#') 固定电话
          a(href='#') 办宽带
        dt
          a(href='#')
            | 手机配件
            i &gt;
        dd
          a(href='#') 手机壳
          a(href='#') 贴膜
          a(href='#') 手机存储卡
          a(href='#') 数据线
    .sub-content.none(ref="content_c")
      dl
        dt
          a(href='#')
            | 电脑整机
            i &gt;
        dd
          a(href='#') 笔记本
          a(href='#') 游戏本
          a(href='#') 平板电脑
        dt
          a(href='#')
            | 电脑配件
            i &gt;
        dd
          a(href='#') 显示器
          a(href='#') CPU
          a(href='#') 主板
        dt
          a(href='#')
            | 外设产品
            i &gt;
        dd
          a(href='#') 鼠标
          a(href='#') 键盘
          a(href='#') 键盘套餐
    .sub-content.none(ref="content_d")
      dl
        dt
          a(href='#')
            | 厨具
            i &gt;
        dd
          a(href='#') 烹饪锅具
          a(href='#') 刀剪配件
          a(href='#') 厨房配件
          a(href='#') 水具酒具
        dt
          a(href='#')
            | 家纺
            i &gt;
        dd
          a(href='#') 床品套件
          a(href='#') 被子
          a(href='#') 枕芯
          a(href='#') 蚊帐
        dt
          a(href='#')
            | 生活日用
            i &gt;
        dd
          a(href='#') 收纳用品
          a(href='#') 雨伞雨具
          a(href='#') 净化除味
          a(href='#') 浴室用品
    .sub-content.none(ref="content_e")
      dl
        dt
          a(href='#')
            | 女装
            i &gt;
        dd
          a(href='#') 商城同款
          a(href='#') 当季热卖
          a(href='#') 2017新品
          a(href='#') 连衣裙
        dt
          a(href='#')
            | 男装
            i &gt;
        dd
          a(href='#') 商城同款
          a(href='#') 当季热卖
          a(href='#') 2017新品
          a(href='#') 牛仔裤
    .sub-content.none(ref="content_f")
      dl
        dt
          a(href='#')
            | 面部护肤
            i &gt;
        dd
          a(href='#') 补水保湿
          a(href='#') 卸妆
          a(href='#') 洁面

</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Vector from 'common/js/vector'
import { addClass, removeClass, getData } from 'common/js/dom'

const vector = new Vector()

@Component
export default class Home extends Vue {
  mouseInSub = false
  isShowSub = false
  activeRow = null
  activeMenu = null
  mouseTrack = []

  created() {
    this.timer = null
  }

  moveHandle(e) {
    this.mouseTrack.push({
      x: e.pageX,
      y: e.pageY,
    })

    if (this.mouseTrack.length > 3) {
      this.mouseTrack.shift()
    }
  }

  onMenuMouseenter(e) {
    this.isShowSub = true
    document.addEventListener('mousemove', this.moveHandle)
  }

  onSubMenuMouseenter(e) {
    if (!this.activeRow) {
      this.activeRow = addClass(e.target, 'active')
      this.activeMenu = removeClass(this.$refs['content_' + getData(e.target, 'id')], 'none')
      return
    }

    if (this.timer) {
      clearTimeout(this.timer)
    }

    let currentMousePos = this.mouseTrack[this.mouseTrack.length - 1] // 鼠标当前的坐标
    let leftCorner = this.mouseTrack[this.mouseTrack.length - 2] // 鼠标上一次的坐标

    let delay = vector.needDelay(this.$refs.sub, leftCorner, currentMousePos)

    if (delay) {
      // 时间触发，设置一个缓冲期
      this.timer = setTimeout(_ => {
        if (this.mouseInSub) return

        removeClass(this.activeRow, 'active')
        addClass(this.activeMenu, 'none')

        this.activeRow = addClass(e.target, 'active')
        this.activeMenu = removeClass(this.$refs['content_' + getData(e.target, 'id')], 'none')
        this.timer = null
      }, 300)
    } else {
      let prevActiveRow = removeClass(this.activeRow, 'active')
      let prevActiveMenu = addClass(this.activeMenu, 'none')

      this.activeRow = addClass(e.target, 'active')
      this.activeMenu = removeClass(this.$refs['content_' + getData(e.target, 'id')], 'none')
    }
  }

  onMenuMouseleave() {
    this.isShowSub = true
    if (this.activeRow) {
      removeClass(this.activeRow, 'active')
      this.activeRow = null
    }
    if (this.activeMenu) {
      addClass(this.activeMenu, 'none')
      this.activeMenu = null
    }
    document.removeEventListener('mousemove', this.moveHandle)
  }

  destroyed() {
    this.timer = null
    document.removeEventListener('mousemove', this.moveHandle)
  }
}
</script>