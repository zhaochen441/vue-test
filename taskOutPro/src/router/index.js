import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '../components/Login.vue'
import Search from '../components/Search.vue'
import Mycount from '../components/Mycount.vue'
import Orderform from '../components/Orderform.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/mycount',
      name:'mycount',
      component:Mycount
    },
    {
      path:'/orderform',
      name:'orderform',
      component:Orderform
    }
  ]
})

