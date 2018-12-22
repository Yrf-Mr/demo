import Vue from 'vue'
import App from './App'
import router from './router'
import MyAxios from './assets/js/myaxios/myaxios.js'
// 导入element-ui插件
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './assets/css/rest.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(MyAxios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
