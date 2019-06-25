<template>
  <form class="container py-4">
    <router-link :to="{ name: 'contactList' }" class="btn btn-outline-secondary btn-icon mr-3 mb-3">
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
          <div class="col-12 col-md-8 col-lg-8">
            <div class="form-group">
              <label>Nome</label>
              <input type="text" class="form-control" maxlength="80" autofocus>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <div class="form-group">
              <label>
                Data de nascimento
                <small class="text-secondary">(opcional)</small>
              </label>
              <input type="text" class="form-control" maxlength="10">
            </div>
          </div>
        </div>
        <div class="form-group">
          <TagMarker :tags="contact.tags" placeholder="Nenhum"/>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import TagMarker from '@/components/TagMarker'

export default {
  name: 'contactEdit',
  data () {
    return {
      contact: {
        name: '',
        tags: [],
        birthDate: null
      }
    }
  },
  mounted () {
    this.$parent.title = 'Editar contato'
  },
  components: {
    TagMarker
  }
}
</script>
