<template>
  <form class="container py-4">
    <router-link :to="{ name: 'tagList' }" class="btn btn-outline-secondary btn-icon mr-3 mb-3">
      <span class="icon"><i class="fa fa-arrow-left"></i></span>
      <span class="text">Voltar</span>
    </router-link>
    <button type="submit" class="btn btn-primary btn-icon mr-3 mb-3">
      <span class="icon"><i class="fa fa-save"></i></span>
      <span class="text">Salvar</span>
    </button>
    <div class="card shadow">
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="form-group">
              <label>Nome</label>
              <input type="text" class="form-control" maxlength="20" v-model="tag.name" autofocus>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Cor do marcador</label>
          <div>
            <div class="btn-group-vertical mr-2 mb-2" v-for="(color, index) in colors" :key="`color-${index}`">
              <button type="button" :class="`btn btn-palette-${color}-light`" @click="setColor(`${color}-light`)"></button>
              <button type="button" :class="`btn btn-palette-${color}-dark`" @click="setColor(`${color}-dark`)"></button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Exemplo</label>
          <div>
            <span :class="`badge bg-palette-${tag.color} text-uppercase`">
              {{ tag.name || 'Marcador' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'tagEdit',
  data () {
    return {
      tag: {
        name: '',
        color: 'gray-dark'
      },
      colors: ['red', 'orange', 'yellow', 'green', 'mint', 'acqua', 'blue', 'purple', 'pink', 'gray']
    }
  },
  mounted () {
    this.$parent.title = 'Editar marcador'
  },
  methods: {
    setColor (color) {
      this.tag.color = color
    }
  }
}
</script>
