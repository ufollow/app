<template>
  <div class="container h-100">
    <div class="row justify-content-center h-100">
      <div class="col-xl-10 col-lg-12 col-md-9 d-flex">
        <div class="card flex-1 o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row h-100">
              <div class="col-lg-6 d-none d-lg-block bg-signin"></div>
              <div class="col-lg-6 h-100 d-flex flex-column justify-content-center">
                <div class="p-5">
                  <div class="text-center">
                    <img src="https://ufollow.io/img/u.svg" alt="Logo da ufollow" class="mb-4" width="48">
                    <h1 class="display-3 text-gray-900 mb-4">
                      Bem-vindo(a) de volta!
                    </h1>
                  </div>
                  <form>
                    <div class="form-group">
                      <input type="email" class="form-control rounded-pill p-4" placeholder="E-mail">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control rounded-pill p-4" placeholder="Senha">
                    </div>
                    <router-link :to="{ name: 'dashboard' }" class="btn btn-sm btn-primary btn-block rounded-pill py-3 text-uppercase">
                      Login
                    </router-link>
                  </form>
                  <hr>
                  <div class="text-center mb-5">
                    Não lembra sua senha?<br>
                    <router-link :to="{ name: 'forgotPassword' }">
                      Clique aqui para definir uma nova
                    </router-link>
                  </div>
                  <div class="text-center">
                    <router-link :to="{ name: 'signup' }">
                      Criar uma conta
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
  name: 'signin'
}
</script>
