<template>
  <div class="header-wrapper">
    <h1 class="header">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.header-wrapper {
  padding-top: 3em;
  display: flex;
  justify-content: center;
}
.header {
  text-transform: capitalize;
}
</style>