<template>
  <div id="app">
    <Site/>
  </div>
</template>

<script>
import Site from './components/Site.vue'

export default {
  name: 'App',
  components: {
    Site
  }
}
</script>

<style lang="scss">
  #app {
    font-family: $font-stack;
  }
</style>
