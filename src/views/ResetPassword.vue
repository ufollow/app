<template>
  <div class="container h-100">
    <div class="row justify-content-center h-100">
      <div class="col-xl-10 col-lg-12 col-md-9 d-flex">
        <div class="card flex-1 o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row h-100">
              <div class="col-lg-6 d-none d-lg-block bg-forgot-password"></div>
              <div class="col-lg-6 h-100 d-flex flex-column justify-content-center">
                <div class="p-5">
                  <div class="text-center mb-4">
                    <img src="https://ufollow.io/img/u.svg" alt="Logo da ufollow" class="mb-4" width="48">
                    <h1 class="display-3 text-gray-900 mb-4">
                      Defina a nova senha
                    </h1>
                    <p>
                      Pronto! Agora informe o código que você
                      recebeu no seu e-mail e defina a nova senha.
                    </p>
                  </div>
                  <form>
                    <div class="form-group">
                      <input type="number" class="form-control rounded-pill p-4" placeholder="Código">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control rounded-pill p-4" placeholder="Nova senha">
                    </div>
                    <router-link :to="{ name: 'signin' }" class="btn btn-sm btn-primary btn-block rounded-pill py-3 text-uppercase">
                      Redefinir senha
                    </router-link>
                  </form>
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
  name: 'resetPassword'
}
</script>
