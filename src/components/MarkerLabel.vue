<template>
  <div>
    <label>Marcadores</label>
    <div class="input-group">
      <div class="form-control overflow-auto">
        <span class="text-secondary" v-if="labels.length === 0">Todos</span>
        <a href="#" class="badge badge-secondary text-uppercase mr-1"
          v-for="label in labels" :key="label.id" @click.prevent="removeLabel(label)">
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
</template>

<script>
export default {
  name: 'markerLabel',
  data () {
    return {
      allLabels: [
        { id: 'a1', name: 'Analistas' },
        { id: 'a2', name: 'Desenvolvedores' },
        { id: 'a3', name: 'Designers' },
        { id: 'a4', name: 'Empreendedores' },
        { id: 'a5', name: 'Gerentes' }
      ]
    }
  },
  props: {
    labels: Array
  },
  methods: {
    addLabel (label) {
      const index = this.labels.indexOf(label)
      const notContain = index < 0

      if (notContain) this.labels.push(label)
    },
    removeLabel (label) {
      const index = this.labels.indexOf(label)
      const contains = index >= 0

      if (contains) this.labels.splice(index, 1)
    }
  }
}
</script>
