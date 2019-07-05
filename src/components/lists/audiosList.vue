<template>
  <div class="row q-col-gutter-lg full-width">
    <div
      v-for="(audio, index) in audioList"
      :key="index + audio.label"
      class="col-xs-12 col-sm-6 col-md-4 col-lg-4"
    >
      <play-button
        :label="audio.label"
        :source="audio.source"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import PlayButton from '../audio/playButton';

  export default {
    name: 'AudiosList',
    components: { PlayButton },
    props: {
      categories: {
        type: String,
        required: true,
      },
    },
    computed: {
      ...mapGetters('soundBoard', [
        'getAudiosByCategory',
      ]),
      audioList() {
        return this.getAudiosByCategory(this.categories);
      },
    },
  };
</script>

<style scoped>

</style>
