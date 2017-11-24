// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/router'
import VueRouter from 'vue-router'
import store from './store/index'
import MintUI from 'mint-ui'
import VueResource from 'vue-resource'
import Icon from 'vue-svg-icon/Icon.vue'
import 'mint-ui/lib/style.css'
import './style/style.css'

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(VueResource)
Vue.component('icon', Icon)

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
}).$mount('#app')
