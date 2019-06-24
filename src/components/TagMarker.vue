<template>
  <div>
    <label>Marcadores</label>
    <div class="input-group">
      <div class="form-control overflow-auto">
        <span class="text-secondary" v-if="tags.length === 0">
          {{ placeholder }}
        </span>
        <a href="#" class="badge badge-secondary text-uppercase mr-1"
          v-for="tag in tags" :key="tag.id" @click.prevent="removeLabel(tag)">
          {{ tag.name }} <span class="ml-1">&times;</span>
        </a>
      </div>
      <div class="input-group-append">
        <button type="button" class="btn btn-outline-secondary rounded-right" data-toggle="dropdown">
          <i class="fa fa-ellipsis-h"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <a href="#" class="dropdown-item" v-for="tag in allLabels" :key="tag.id"
            @click.prevent="addLabel(tag)">
            {{ tag.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tagMarker',
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
    tags: Array,
    placeholder: String
  },
  methods: {
    addLabel (tag) {
      const index = this.tags.indexOf(tag)
      const notContain = index < 0

      if (notContain) this.tags.push(tag)
    },
    removeLabel (tag) {
      const index = this.tags.indexOf(tag)
      const contains = index >= 0

      if (contains) this.tags.splice(index, 1)
    }
  }
}
</script>
