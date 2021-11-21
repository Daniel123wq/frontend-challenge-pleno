<template>
  <div class="card" style="width: 18rem">
    <div :class="`card-body bg-${backgroundColor}`" :style="`background-color:${backgroundColor}`">
      <h5 class="card-title">{{title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>
      <p class="card-text">
        {{description}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    color: String,
    title: String,
    subtitle: String,
    description: String
  },
};
</script>