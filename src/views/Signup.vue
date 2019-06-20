<template>
  <div class="container h-100">
    <div class="row justify-content-center h-100">
      <div class="col-xl-10 col-lg-12 col-md-9 d-flex">
        <div class="card flex-1 o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row h-100">
              <div class="col-lg-6 d-none d-lg-block bg-signup"></div>
              <div class="col-lg-6 h-100 d-flex flex-column justify-content-center">
                <div class="p-5">
                  <div class="text-center">
                    <img src="https://ufollow.io/img/u.svg" alt="Logo da ufollow" class="mb-4" width="48">
                    <h1 class="display-3 text-gray-900 mb-4">
                      Seja bem-vindo(a)!
                    </h1>
                  </div>
                  <form>
                    <div class="form-group">
                      <input type="text" class="form-control rounded-pill p-4" placeholder="Seu nome">
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control rounded-pill p-4" placeholder="E-mail">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control rounded-pill p-4" placeholder="Senha">
                    </div>
                    <router-link :to="{ name: 'dashboard' }" class="btn btn-sm btn-primary btn-block rounded-pill py-3 text-uppercase">
                      Criar conta
                    </router-link>
                  </form>
                  <hr>
                  <div class="text-center mb-5">
                    Ao criar uma conta você concorda com os nossos<br>
                    <a href="#termos-de-uso">Termos de uso</a>
                  </div>
                  <div class="text-center">
                    <router-link :to="{ name: 'signin' }">
                      Já tenho uma conta
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signup'
}
</script>
