import Vue from 'vue';
import Vuex from 'vuex';

import menu from './menu';
import soundBoard from './soundBoard';

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    menu,
    soundBoard,
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV,
});
