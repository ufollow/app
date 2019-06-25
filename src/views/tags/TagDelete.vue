<template>
  <div class="modal fade" tabindex="-1" data-backdrop="static">
    <form class="modal-dialog modal-dialog-centered">
      <div class="modal-content shadow">
        <div class="modal-header">
          Remover marcador?
          <i class="fa fa-trash"></i>
        </div>
        <div class="modal-body text-justify">
          O marcador <span class="badge badge-secondary">{{ tag && tag.name }}</span>
          será removido permanentemente. Depois de removido esse processo não pode ser desfeito.
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-outline-secondary mr-2" data-dismiss="modal">
            Não, matenha este marcador
          </button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Sim, remova este marcador
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'tagDelete',
  props: {
    tag: Object
  }
}
</script>
