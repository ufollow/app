import Vue from 'vue'
import Router from 'vue-router'
import CampaignEditor from './views/campaigns/CampaignEditor.vue'
import CampaignList from './views/campaigns/CampaignList.vue'
import ContactEdit from './views/contacts/ContactEdit.vue'
import ContactList from './views/contacts/ContactList.vue'
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
        { path: '/', name: 'dashboard', component: Dashboard },
        { path: '/campanhas', name: 'campaignList', component: CampaignList },
        { path: '/campanhas/editor', name: 'campaignEditor', component: CampaignEditor },
        { path: '/contatos/editar', name: 'contactEdit', component: ContactEdit },
        { path: '/contatos', name: 'contactList', component: ContactList }
      ]
    }
  ]
})
