import MT from './types';

export default {
  [MT.ADD_MENU_TO_SIDEDRAWER](state, payload) {
    state.sideDrawer.push(payload);
  },
};
