<template>
  <div class="campaign-editor p-4">
    <div class="toolbar">
      <router-link :to="{ name: 'campaignList' }" class="btn btn-outline-secondary btn-icon mr-3 mb-3">
        <span class="icon"><i class="fa fa-arrow-left"></i></span>
        <span class="text">Voltar</span>
      </router-link>
      <button type="button" class="btn btn-secondary btn-icon mr-2 mb-3">
        <span class="icon"><i class="fa fa-save"></i></span>
        <span class="text">Salvar</span>
      </button>
      <button type="button" class="btn btn-secondary btn-icon mr-2 mb-3">
        <span class="icon"><i class="fa fa-eye"></i></span>
        <span class="text">Visualizar</span>
      </button>
    </div>
    <div class="card shadow m-auto" style="max-width: 800px;">
      <div class="p-3 border-bottom">
        <input type="text" class="form-control border-0 shadow-none" placeholder="Título da campanha">
      </div>
      <nav class="navbar navbar-expand bg-white border-bottom overflow-auto">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="undo()">
                <i class="fa fa-undo-alt"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="redo()">
                <i class="fa fa-redo-alt"></i>
              </button>
            </li>
            <li class="nav-divider"></li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="bold()">
                <i class="fa fa-bold"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="italic()">
                <i class="fa fa-italic"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="underline()">
                <i class="fa fa-underline"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700">
                <i class="fa fa-font"></i>
              </button>
            </li>
            <li class="nav-divider"></li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="justifyLeft()">
                <i class="fa fa-align-left"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="justifyCenter()">
                <i class="fa fa-align-center"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="justifyRight()">
                <i class="fa fa-align-right"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="justify()">
                <i class="fa fa-align-justify"></i>
              </button>
            </li>
            <li class="nav-divider"></li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="unorderedList()">
                <i class="fa fa-list"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="orderedList()">
                <i class="fa fa-list-ol"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="indent()">
                <i class="fa fa-indent"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="outdent()">
                <i class="fa fa-outdent"></i>
              </button>
            </li>
            <li class="nav-divider"></li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="link()">
                <i class="fa fa-link"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="unlink()">
                <i class="fa fa-unlink"></i>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link text-gray-700" @click="selectCoverImage()">
                <i class="fa fa-image"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <input ref="inputFile" type="file" class="d-none">
      <button type="button" class="btn shadow-none campaign-cover-instructions"
          @click="selectCoverImage()" v-if="!file">
        <i class="fa fa-image fa-6x text-gray-300"></i>
        <p>Escolha uma linda capa para sua campanha.</p>
      </button>
      <div class="text-center" v-if="file">
        <img :src="url" class="campaign-cover">
      </div>
      <div class="card-body">
        <div class="campaign-content" contenteditable>
          <h1>
            <b>Olá!</b> Tudo bem?
          </h1>
          <p>
            Utilize este espaço para escrever o  conteúdo da sua campanha.
          </p>
          <p>
            Aqui vão 5 dicas para elaborar uma boa campanha e se afastar do filtro anti-spam:
          </p>
          <ol>
            <li>
              Desenvolva as suas ideias em parágrafos pequenos.
              Parágrafos muito grandes são pouco convidativos e dificultam a leitura dinâmica.
            </li>
            <li>
              Evite utilizar uma única imagem como conteúdo do e-mail por ser uma prática de SPAM.
            </li>
            <li>
              Também evite expressões que são recorrentes em mensagens de SPAM, principalmmente no título.
              Frases clichês como por exemplo: <i>clique aqui</i>, <i>grátis</i>, <i>promoção</i>,
              <i>ganhe</i>, <i>satisfação garantida</i>, <i>oportunidade única</i>,
              <i>venda mais</i>, <i>durma mais</i>, ...
            </li>
            <li>
              Confira seus links. Links quebrados é um forte indicador de SPAM.
              Além de provocar uma experiência frustrante para quem recebe.
            </li>
            <li>
              Insira uma assinatura no seu e-mail. Assinatura oferece credibilidade, identifica
              a sua marca e pessoaliza a comunicação gerando melhores resultados.
            </li>
          </ol>
          <p>
            Pronto! Agora vamos encantar novos e atuais clientes. Mãos a obra! :)
          </p>
          <p>
            Obrigado pela atenção.
          </p>
          <p>
            Abraços da equipe ufollow.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'campaignEditor',
  data () {
    return {
      file: null,
      url: null
    }
  },
  mounted () {
    this.$parent.title = 'Editor de campanha'

    $(this.$refs.inputFile).on('change', () => this.preview())
  },
  methods: {
    bold () {
      document.execCommand('bold', false, '')
    },
    indent () {
      document.execCommand('indent')
    },
    outdent () {
      document.execCommand('outdent')
    },
    orderedList () {
      document.execCommand('insertOrderedList')
    },
    unorderedList () {
      document.execCommand('insertUnorderedList')
    },
    italic () {
      document.execCommand('italic', false, '')
    },
    underline () {
      document.execCommand('underline', false, '')
    },
    justifyLeft () {
      document.execCommand('justifyLeft', false, '')
    },
    justifyCenter () {
      document.execCommand('justifyCenter', false, '')
    },
    justifyRight () {
      document.execCommand('justifyRight', false, '')
    },
    justify () {
      document.execCommand('justifyFull', false, '')
    },
    link () {
      const selection = document.getSelection()
      document.execCommand('createLink', true, selection)
    },
    unlink () {
      document.execCommand('unlink', false, null)
    },
    undo () {
      document.execCommand('undo', false, null)
    },
    redo () {
      document.execCommand('redo', false, null)
    },
    selectCoverImage () {
      $(this.$refs.inputFile).trigger('click')
    },
    preview () {
      const file = this.$refs.inputFile.files[0]

      if (!file) return
      if (file.type !== 'image/jpeg') return

      const reader = new FileReader()
      reader.onload = () => { this.url = URL.createObjectURL(file) }
      reader.readAsDataURL(file)

      this.file = file
    }
  }
}
</script>
