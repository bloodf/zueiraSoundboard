<template>
  <div />
</template>

<style>
</style>

<script>
  export default {
    name: 'PageIndex',
    mounted() {
      this.$router.replace({
        name: 'soundBoard',
        params: this.initialCategory,
      });
    },
    computed: {
      initialCategory() {
        return this.$store.getters['menu/initialCategory'][0];
      },
    },
  };
</script>
