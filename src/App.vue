<template lang="pug">
  #app
    TheNav
    router-view.view_container
    TheFooter
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import TheNav from 'components/TheNav'
import TheFooter from 'components/TheFooter'

@Component({
  components: {
    TheNav,
    TheFooter,
  },
})
export default class App extends Vue {

}
</script>

<style lang="sass">
@import '~common/sass/index.sass' // 全局自定义的css样式

#app
  display: flex
  min-height: 100vh
  flex-direction: column

  >.view_container
    flex: 1
    background: #f6f6f6
</style>
