import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import LoggedUser from './layouts/LoggedUser.vue'
import ResetPassword from './views/ResetPassword.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/entrar', name: 'signin', component: Signin },
    { path: '/criar-conta', name: 'signup', component: Signup },
    { path: '/esqueci-a-senha', name: 'forgotPassword', component: ForgotPassword },
    { path: '/redefinir-senha', name: 'resetPassword', component: ResetPassword },
    {
      path: '/',
      component: LoggedUser,
      children: [
        { path: '/', name: 'dashboard', component: Dashboard }
      ]
    }
  ]
})
