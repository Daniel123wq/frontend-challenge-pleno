<template>
  <router-view/>
</template>
<script setup>
</script>

<style lang="scss">
body {
  font-family: $font-stack;
}

body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

body::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.40, $primary),
    color-stop(0.20, $tertiary),
    color-stop(0.40, $primary)
  );
}
</style>
