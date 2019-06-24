<template>
  <div class="container p-4">
    <router-link :to="{ name: 'tagEdit' }" class="btn btn-primary btn-icon mr-3 mb-3">
      <span class="icon"><i class="fa fa-plus"></i></span>
      <span class="text">Novo marcador</span>
    </router-link>
    <TagDelete ref="tagDelete" :tag="selectedTag"/>
    <TagListFilter :filter="filter"/>
    <div class="card shadow">
      <div class="table-responsive">
        <table class="table mb-0">
          <tbody>
            <tr v-for="tag in tagList.tags" :key="tag.id">
              <td>
                <div>
                  {{ tag.name }}
                  <i :class="`fa fa-circle fa-xs ml-2 text-palette-${tag.color}`"></i>
                </div>
                <div class="small text-secondary">
                  Criado em {{ tag.createdAt }}
                </div>
              </td>
              <td class="align-middle text-right">
                <div class="dropdown">
                  <button type="button" class="btn" data-toggle="dropdown">
                    <i class="fa fa-ellipsis-v"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="#" class="dropdown-item">
                      <i class="fa fa-fw fa-pencil-alt mr-2"></i> Editar
                    </a>
                    <a href="#" class="dropdown-item">
                      <i class="fa fa-fw fa-file-invoice mr-2"></i> Visualizar
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item" @click.prevent="remove(tag)">
                      <i class="fa fa-fw fa-trash mr-2"></i> Remover
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Paging :index.sync="filter.index" :length="filter.length"
      :count="tagList.count" @change="search"/>
  </div>
</template>

<script>
import TagDelete from './TagDelete'
import TagListFilter from './TagListFilter'
import Paging from '@/components/Paging'

export default {
  name: 'tagList',
  data () {
    return {
      filter: {
        name: '',
        color: 'gray',
        index: 0,
        length: 10
      },
      selectedTag: null,
      tagList: {
        tags: [
          { id: 'a1', name: 'Analistas', color: 'red-light', createdAt: '23/06/2019' },
          { id: 'a2', name: 'Desenvolvedores', color: 'gray-dark', createdAt: '20/06/2019' },
          { id: 'a3', name: 'Designers', color: 'purple-dark', createdAt: '20/06/2019' },
          { id: 'a4', name: 'Empreendedores', color: 'mint-dark', createdAt: '14/06/2019' },
          { id: 'a5', name: 'Gerentes', color: 'orange-dark', createdAt: '10/06/2019' }
        ],
        count: 5
      }
    }
  },
  mounted () {
    this.$parent.title = 'Marcadores'
  },
  components: {
    TagDelete,
    TagListFilter,
    Paging
  },
  methods: {
    remove (tag) {
      this.selectedTag = tag
      $(this.$refs.tagDelete.$el).modal('show')
    },
    search () { }
  }
}
</script>
