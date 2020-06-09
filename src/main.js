// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// element-ui框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// vantUI
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.use(ElementUI)

/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
