import { createStore } from 'vuex';

export default createStore({
  state: {
    isMenuOpen: false,
    isLoggedIn: false,
    isModalOpen: false,
  },
  mutations: {
    toggleMenu(state, payload) {
      state.isMenuOpen = payload;
    },
    toggleModal(state, payload) {
      state.isModalOpen = payload;
    },
  },
  actions: {
    toggleMenu({ commit }, payload) {
      commit('toggleMenu', payload);
    },
    toggleModal({ commit }, payload) {
      commit('toggleModal', payload);
    },
  },
  getters: {
    getMenuState(state) {
      return state.isMenuOpen;
    },
    getUserState(state) {
      return state.isLoggedIn;
    },
    getModalState(state) {
      return state.isModalOpen;
    },
  },
  modules: {},
});
