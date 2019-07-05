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
  </q-list>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'MainMenu',
    computed: {
      ...mapGetters('menu', [
        'sideMenu',
      ]),
    },
  };
</script>

<style scoped>

</style>
