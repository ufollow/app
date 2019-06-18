<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Uma plataforma de gestão de marketing fácil de aprender e usar.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
