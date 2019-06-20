<template>
  <div class="app-body">
    <div class="sidebar" :class="{ 'collapsed': collapsed }">
      <div class="sidebar-header">
        <svg class="logo">
          <use href="@/assets/img/sprites.svg#u"/>
        </svg>
      </div>
      <hr class="sidebar-divider">
      <div class="sidebar-nav">
        <router-link :to="{ name: 'dashboard' }" class="sidebar-link">
          <i class="fa fa-chart-pie fa-lg fa-fw mb-2"></i>
          <span>Indicadores</span>
        </router-link>
        <a href="#" class="sidebar-link">
          <i class="fa fa-address-book fa-lg fa-fw mb-2"></i>
          <span>Contatos</span>
        </a>
        <router-link :to="{ name: 'campaigns' }" class="sidebar-link">
          <i class="fa fa-mail-bulk fa-lg fa-fw mb-2"></i>
          <span>Campanhas</span>
        </router-link>
        <a href="#" class="sidebar-link">
          <i class="fa fa-sync-alt fa-lg fa-fw mb-2"></i>
          <span>Gatilhos</span>
        </a>
      </div>
    </div>
    <div class="app-content">
      <nav class="navbar navbar-light bg-white shadow py-3">
        <button type="button" class="navbar-toggler d-block d-md-none mr-2"
          :class="{ 'collapsed': collapsed }" @click="toggle()">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <h1 class="display-1 navbar-brand ml-2 mb-0 text-primary">
          {{ title }}
        </h1>
        <ul class="nav ml-auto">
          <li class="nav-item dropdown">
            <a href="#" class="nav-link" data-toggle="dropdown">
              usuario@email.com <i class="fa fa-user-circle"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right shadow">
              <a href="#" class="dropdown-item">
                <i class="fa fa-user-circle mr-2 text-gray-500"></i> Meu perfil
              </a>
              <a href="#" class="dropdown-item">
                <i class="fa fa-cog mr-2 text-gray-500"></i> Configurações
              </a>
              <a href="#" class="dropdown-item">
                <i class="fa fa-question-circle mr-2 text-gray-500"></i> Ajuda
              </a>
              <div class="dropdown-divider"></div>
              <router-link :to="{ name: 'signin' }" class="dropdown-item">
                <i class="fa fa-power-off mr-2 text-gray-500"></i> Sair
              </router-link>
            </div>
          </li>
        </ul>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loggedUser',
  data () {
    return {
      collapsed: true,
      title: ''
    }
  },
  methods: {
    toggle () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
