<template>
  <div class="card shadow mb-3">
    <a href="#search" class="card-header py-3" data-toggle="collapse">
      <i class="fa fa-search mr-2"></i> Filtro de pesquisa
    </a>
    <form id="search" class="collapse" @submit.prevent="submit">
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6">
            <div class="form-group">
              <label>Título</label>
              <input type="text" class="form-control" maxlength="80" v-model="filter.title">
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="form-group">
              <TagMarker :tags="filter.tags" placeholder="Todos"/>
            </div>
          </div>
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
import TagMarker from '@/components/TagMarker'

export default {
  name: 'campaignListFilter',
  components: {
    TagMarker
  },
  props: {
    filter: Object,
    submit: Function
  },
  methods: {
    reset () {
      this.filter.title = ''
      this.filter.tags = []
      this.filter.index = 0
    }
  }
}
</script>
