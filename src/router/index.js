import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'
import User from '../components/user/user.vue'
Vue.use(Router)
// 怎么了
export default new Router({
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '/user',
      name: 'user',
      component: User,
    }]
  }]
})
