<template>
  <q-page
    padding>
    <audios-list
      :categories="pageCategory"
    />
  </q-page>
</template>

<style>
</style>

<script>
  import AudiosList from '../components/lists/audiosList';

  export default {
    name: 'PageIndex',
    components: { AudiosList },
    computed: {
      pageCategory() {
        return this.$route.params.category;
      },
    },
  };
</script>
