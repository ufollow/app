<template>
  <div class="container p-4">
    <router-link :to="{ name: 'campaignEditor' }" class="btn btn-secondary rounded-pill mr-3 mb-3"
      data-toggle="popover" data-placement="top" data-content="Nova campanha" data-trigger="hover">
      <i class="fa fa-plus"></i>
    </router-link>
    <button type="button" class="btn btn-secondary rounded-pill mr-3 mb-3"
      data-toggle="popover" data-placement="top" data-content="Nova campanha" data-trigger="hover">
      <i class="fa fa-search"></i>
    </button>
    <div class="card shadow">
      <div class="table-responsive">
        <table class="table mb-0">
          <tbody>
            <tr v-for="campaign in campaigns" :key="campaign.id">
              <td>
                <div>{{ campaign.title }}</div>
                <small class="text-secondary">Criado em {{ campaign.createdAt }}</small>
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
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
        <ul class="pagination justify-content-center my-2 mb-0">
          <li class="page-item active"><a href="#" class="page-link">1</a></li>
          <li class="page-item"><a href="#" class="page-link">2</a></li>
          <li class="page-item"><a href="#" class="page-link">3</a></li>
          <li class="page-item disabled"><a href="#" class="page-link">...</a></li>
          <li class="page-item"><a href="#" class="page-link">10</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'campaignList',
  // mixins: [bootstrapMixin],
  data () {
    return {
      campaigns: [
        { id: 'a1', title: 'Olá! Nossas boas-vindas a sua conta ufollow', createdAt: '20/03/2019' },
        { id: 'a2', title: 'Parabéns pra você nessa data querida! :)', createdAt: '10/06/2019' }
      ]
    }
  },
  mounted () {
    this.$parent.title = 'Campanhas'
  }
}
</script>
