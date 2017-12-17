import Vue from 'vue'

/*
 * directive
 */
Vue.directive('bg-cover', function (el, binding) {
  el.style.cssText += `
    ;
    background: url('${binding.value}') center center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    font-size: 19px;
  `
})

/*
 * Mixins Global
 */
// Vue.mixin({
//   destroyed() {
//     if(Indicator) Indicator.close()
//   },
// })
