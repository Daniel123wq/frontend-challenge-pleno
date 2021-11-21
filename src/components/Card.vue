<template>
  <div class="card border-0">
    <div :class="`card-body teste text-center bg-${backgroundColor} ${color}` " :style="`background-color:${backgroundColor}; color:${color}`">
      <span class="material-icons md-48">{{icon}}</span>
      <h6 class="card-title mb-2 mt-5">{{title}}</h6>
      <p class="card-text mt-5">
        {{description}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    icon: String,
    color: String,
    title: String,
    subtitle: String,
    description: String
  },
};
</script>

<style lang="scss">
 .teste:hover {
  //  background-color: $tertiary !important;
   box-shadow: $box-shadow-lg;
 }
</style>