<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss" src="@/assets/scss/index.scss">
</style>

<script>
const POPOVER_SELECTOR = '[data-toggle="popover"]'

export default {
  name: 'ufollow',
  mounted () {
    $(POPOVER_SELECTOR).popover()
  },
  watch: {
    $route () {
      $(POPOVER_SELECTOR).popover('hide')

      this.$nextTick(() => $(POPOVER_SELECTOR).popover())
    }
  }
}
</script>
