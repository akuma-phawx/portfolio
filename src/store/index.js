import { createStore } from 'vuex';

export default createStore({
  state: {
    isMenuOpen: false,
    isLoggedIn: false,
  },
  mutations: {
    toggleMenu(state, payload) {
      state.isMenuOpen = payload;
    },
  },
  actions: {
    toggleMenu({ commit }, payload) {
      commit('toggleMenu', payload);
    },
  },
  getters: {
    getMenuState(state) {
      return state.isMenuOpen;
    },
    getUserState(state) {
      return state.isLoggedIn;
    },
  },
  modules: {},
});
