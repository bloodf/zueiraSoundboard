<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="mdi-menu" @click="left = !left" />

        <q-toolbar-title>
          {{ $route.params.name || 'SoundBoard' }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" bordered>
      <main-menu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
  import MainMenu from '../components/menu/menu';

  export default {
    name: 'BaseLayout',
    components: { MainMenu },
    data: () => ({
      left: true,
    }),
  };
</script>
