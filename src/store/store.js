import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line
export const store = new Vuex.Store({
  strict: true,
  // single source of truth
  state: {
    current: 0,
    currentShown: 0,
  },
  // like computed properties, but for the store
  getters: {},
  // To change state in a Vuex store you commit a mutation.
  // Vuex mutations are very similar to events:
  // each mutation has a string type and a handler.
  // The handler function is where we perform actual state modifications,
  // and it will receive the state as the first argument
  mutations: {
    reset(state) {
      state.current = 0;
      state.currentShown = 0;
    },
  },
  // Actions are similar to mutations, the differences being that:
  // Instead of mutating the state, actions commit mutations.
  // Actions can contain arbitrary asynchronous operations.
  actions: {},
});
