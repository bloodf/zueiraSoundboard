<template>
  <q-list>
    <q-item
      v-for="(menu, index) in sideMenu"
      :key="index"
      :to="{
        name: 'soundBoard',
        params: menu,
      }"
      exact
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-icon
          :name="menu.icon"
        />
      </q-item-section>
      <q-item-section>{{ menu.name }}</q-item-section>
    </q-item>
    <q-separator />
    <q-item
      clickable
      v-ripple
      @click="openGitHub"
    >
      <q-item-section avatar>
        <q-icon
          name="mdi-github-circle"
        />
      </q-item-section>
      <q-item-section>Github</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
  import { openURL } from 'quasar';
  import { mapGetters } from 'vuex';

  export default {
    name: 'MainMenu',
    computed: {
      ...mapGetters('menu', [
        'sideMenu',
      ]),
    },
    methods: {
      openGitHub() {
        openURL('https://github.com/bloodf/zueiraSoundboard');
      },
    },
  };
</script>

<style scoped>

</style>
