import Vue from 'vue'
import Router from 'vue-router'
import Signin from './views/Signin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: Signin
    }
  ]
})
