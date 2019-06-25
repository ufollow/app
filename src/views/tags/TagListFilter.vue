<template>
  <div class="card shadow mb-3">
    <a href="#search" class="card-header py-3" data-toggle="collapse">
      <i class="fa fa-search mr-2"></i> Filtro de pesquisa
    </a>
    <form id="search" class="collapse" @submit.prevent="submit">
      <div class="card-body">
        <div class="form-group">
          <label>Nome</label>
          <input type="text" class="form-control" maxlength="20" v-model="filter.name">
        </div>
        <button type="submit" class="btn btn-primary mr-2">
          Pesquisar
        </button>
        <button type="button" class="btn btn-outline-secondary" @click="reset">
          Limpar filtro
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'tagListFilter',
  props: {
    filter: Object,
    submit: Function
  },
  methods: {
    reset () {
      this.filter.name = ''
      this.filter.index = 0
    }
  }
}
</script>
