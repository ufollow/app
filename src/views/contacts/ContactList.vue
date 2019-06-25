<template>
  <div class="container p-4">
    <router-link :to="{ name: 'contactEdit' }" class="btn btn-primary btn-icon mr-3 mb-3">
      <span class="icon"><i class="fa fa-plus"></i></span>
      <span class="text">Novo contato</span>
    </router-link>
    <ContactDelete ref="contactDelete" :contact="selectedContact"/>
    <ContactListFilter :filter="filter"/>
    <div class="card shadow">
      <div class="table-responsive">
        <table class="table mb-0">
          <tbody>
            <tr v-for="contact in contactList.contacts" :key="contact.id">
              <td>
                <div>
                  {{ contact.email }} <span v-if="contact.name">&mdash; {{ contact.name }}</span>
                </div>
                <div class="small text-secondary">
                  Cadastrado em {{ contact.createdAt }}
                </div>
                <span :class="`badge badge-palette-${tag.color} text-uppercase mr-1 mt-2`"
                  v-for="tag in contact.tags" :key="tag.id">
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
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item" @click.prevent="remove(contact)">
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
      :count="contactList.count" @change="search"/>
  </div>
</template>

<script>
import ContactDelete from './ContactDelete'
import ContactListFilter from './ContactListFilter'
import Paging from '@/components/Paging'

export default {
  name: 'contactList',
  data () {
    return {
      filter: {
        name: '',
        tags: [],
        index: 0,
        length: 10
      },
      selectedContact: null,
      contactList: {
        contacts: [
          {
            id: 'a1',
            email: 'maya.vera@email.com',
            name: 'Maya Vera Monteiro',
            createdAt: '20/03/2019',
            tags: [
              { id: 'a2', name: 'Desenvolvedores', color: 'gray-dark' }
            ]
          },
          {
            id: 'a2',
            email: 'fatima.nicole@email.com',
            name: null,
            createdAt: '10/06/2019',
            tags: [
              { id: 'a3', name: 'Designers', color: 'purple-dark' }
            ]
          }
        ],
        count: 100
      }
    }
  },
  mounted () {
    this.$parent.title = 'Contatos'
  },
  components: {
    ContactDelete,
    ContactListFilter,
    Paging
  },
  methods: {
    remove (contact) {
      this.selectedContact = contact
      $(this.$refs.contactDelete.$el).modal('show')
    },
    search () { }
  }
}
</script>
