<template>
  <q-btn
    :color="isPlaying ? 'secondary' : 'primary'"
    push
    stack
    align="left"
    :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
    :label="label"
    class="full-width text-right"
    @click="play"
  />
</template>

<script>
  export default {
    name: 'PlayButton',
    props: {
      label: {
        type: String,
        required: true,
      },
      source: {
        type: String,
        required: true,
      },
    },
    data: () => ({
      isPlaying: false,
      audioSource: null,
    }),
    computed: {
      audioTime: {
        cache: false,
        get() {
          return this.audioSource ? this.audioSource.context.currentTime : 0;
        },
      },
    },
    mounted() {
      this.$root.$on('playing', () => {
        if (this.audioSource) {
          this.stop();
        }
      });
    },
    methods: {
      stop() {
        this.audioSource.stop();
        this.isPlaying = false;
        this.audioSource = null;
      },
      play() {
        this.$root.$emit('playing');
        const BrowserAudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new BrowserAudioContext();
        const request = new XMLHttpRequest();
        if (this.audioSource) {
          this.stop();
          return;
        }
        this.audioSource = audioContext.createBufferSource();
        this.audioSource.connect(audioContext.destination);

        request.open('GET', this.source, true);
        request.responseType = 'arraybuffer';
        const that = this;
        request.onload = async () => {
          await audioContext.decodeAudioData(request.response, (buffer) => {
            that.audioSource.buffer = buffer;
            that.audioSource.onended = () => {
              this.isPlaying = false;
              this.audioSource = null;
            };
            that.audioSource.start();
            that.isPlaying = true;
          });
        };
        request.send();
      },
    },
  };
</script>

<style scoped>

</style>
