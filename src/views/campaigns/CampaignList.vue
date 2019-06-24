<template>
  <div class="container p-4">
    <router-link :to="{ name: 'campaignEditor' }" class="btn btn-primary btn-icon mr-3 mb-3">
      <span class="icon"><i class="fa fa-plus"></i></span>
      <span class="text">Nova campanha</span>
    </router-link>
    <CampaignListFilter :filter="filter" :submit="search"/>
    <div class="card shadow">
      <div class="table-responsive">
        <table class="table mb-0">
          <tbody>
            <tr v-for="campaign in campaignList.campaigns" :key="campaign.id">
              <td>
                <div>{{ campaign.title }}</div>
                <div class="small text-secondary">
                  Criada em {{ campaign.createdAt }}
                </div>
                <span class="badge badge-secondary text-uppercase mr-1 mt-2" v-for="tag in campaign.tags" :key="tag.id">
                  {{ tag.name }}
                </span>
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
                    <a href="#" class="dropdown-item">
                      <i class="fa fa-fw fa-sync-alt mr-2"></i> Gatilhos
                    </a>
                    <a href="#" class="dropdown-item">
                      <i class="fa fa-fw fa-globe mr-2"></i> Publicações
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
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
    <Paging :index.sync="filter.index" :length="filter.length" :count="campaignList.count" @change="search"/>
  </div>
</template>

<script>
import CampaignListFilter from './CampaignListFilter'
import Paging from '@/components/Paging'

export default {
  name: 'campaignList',
  data () {
    return {
      filter: {
        title: '',
        tags: [],
        index: 0,
        length: 10
      },
      campaignList: {
        campaigns: [
          {
            id: 'a1',
            title: 'Olá! Nossas boas-vindas a sua conta ufollow',
            createdAt: '20/03/2019',
            tags: [
              { id: 'a2', name: 'Desenvolvedores' },
              { id: 'a3', name: 'Designers' }
            ]
          },
          {
            id: 'a2',
            title: 'Parabéns pra você nessa data querida! :)',
            createdAt: '10/06/2019',
            tags: []
          }
        ],
        count: 100
      }
    }
  },
  mounted () {
    this.$parent.title = 'Campanhas'
  },
  components: {
    CampaignListFilter,
    Paging
  },
  methods: {
    search () { }
  }
}
</script>
