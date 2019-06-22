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
              <input type="text" class="form-control" maxlength="80" v-model="title" @input="emit">
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="form-group">
              <MarkerLabel :labels="labels"/>
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
import MarkerLabel from '@/components/MarkerLabel'

export default {
  name: 'campaignListFilter',
  data () {
    return {
      title: '',
      labels: [],
      index: 0,
      length: 10
    }
  },
  mounted () {
    this.emit()
  },
  components: {
    MarkerLabel
  },
  props: {
    submit: Function
  },
  methods: {
    emit () {
      this.$emit('input', {
        title: this.title,
        labels: this.labels,
        index: this.index,
        length: this.length
      })
    },
    reset () {
      this.name = null
      this.labels = []
      this.index = 0
      this.emit()
    }
  }
}
</script>
