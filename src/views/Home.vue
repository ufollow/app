<template>
  <div class="home">
    <img alt="Logo da ufollow" src="https://ufollow.io/img/u.svg" height="128">
    <HelloWorld msg="Bem-vindo a ufollow :)"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
