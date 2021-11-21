<template>
  <div class="top-container">
    <Nav/>

  </div>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Site',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
  .top-container {
    height: 50rem;
    background: linear-gradient(80deg,$primary, $secondary);
  }
</style>