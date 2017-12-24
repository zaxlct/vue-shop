<template lang="pug">
  #app
    router-view.view_container
    TheFooter
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import TheFooter from 'components/TheFooter'

@Component({
  components: {
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
</style>
