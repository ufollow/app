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
              <label>Marcadores</label>
              <div class="input-group">
                <div class="form-control overflow-auto">
                  <span class="text-secondary" v-if="selectedLabels.length === 0">Todos</span>
                  <a href="#" class="badge badge-secondary mr-1" v-for="label in selectedLabels" :key="label.id"
                    @click.prevent="removeLabel(label)">
                    {{ label.name }} <span class="ml-1">&times;</span>
                  </a>
                </div>
                <div class="input-group-append">
                  <button type="button" class="btn btn-outline-secondary rounded-right" data-toggle="dropdown">
                    <i class="fa fa-ellipsis-h"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="#" class="dropdown-item" v-for="label in allLabels" :key="label.id"
                      @click.prevent="addLabel(label)">
                      {{ label.name }}
                    </a>
                  </div>
                </div>
              </div>
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
export default {
  name: 'campaignListFilter',
  data () {
    return {
      title: '',
      allLabels: [
        { id: 'a1', name: 'Analistas' },
        { id: 'a2', name: 'Designers' },
        { id: 'a3', name: 'Desenvolvedores' },
        { id: 'a4', name: 'Empreendedores' },
        { id: 'a5', name: 'Gerentes' }
      ],
      selectedLabels: [],
      index: 0,
      length: 10
    }
  },
  mounted () {
    this.emit()
  },
  props: {
    submit: Function
  },
  methods: {
    addLabel (label) {
      const index = this.selectedLabels.indexOf(label)

      if (index < 0) {
        this.selectedLabels.push(label)
        this.emit()
      }
    },
    emit () {
      this.$emit('input', {
        title: this.title,
        index: this.index,
        length: this.length
      })
    },
    removeLabel (label) {
      const index = this.selectedLabels.indexOf(label)

      if (index >= 0) {
        this.selectedLabels.splice(index, 1)
        this.emit()
      }
    },
    reset () {
      this.name = null
      this.selectedLabels = []
      this.index = 0
      this.emit()
    }
  }
}
</script>
