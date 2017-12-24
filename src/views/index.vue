<style lang="sass" scoped>
</style>

<template lang="pug">
.view_container
  TheHeader
  router-view
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import TheHeader from 'components/TheHeader'

@Component({
  components: {
    TheHeader,
  },
})
export default class Index extends Vue {

}
</script>
