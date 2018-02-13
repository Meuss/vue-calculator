import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line
export const store = new Vuex.Store({
  strict: true,
  // single source of truth
  state: {
    current: false,
    currentShown: 0,
    lastKey: false,
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
      state.current = false;
      state.currentShown = 0;
      state.lastKey = false;
    },
    number(state, value) {
      if (!state.lastKey) {
        state.lastKey = false;
        if (isNaN(value)) {
          const str1 = state.currentShown.toString();
          const str2 = value.toString();
          state.currentShown = str1 + str2;
        } else {
          const str1 = state.currentShown.toString();
          const str2 = value.toString();
          state.currentShown = Number(str1.concat(str2));
        }
      }
    },
    inverse(state) {
      state.lastKey = '+-';
      state.currentShown = -state.currentShown;
    },
    divide(state) {
      state.lastKey = '/';
      state.current = state.currentShown;
    },
    multiply(state) {
      state.lastKey = '*';
      state.current = state.currentShown;
    },
    minus(state) {
      state.lastKey = '-';
      state.current = state.currentShown;
    },
    plus(state) {
      state.lastKey = '+';
      state.current = state.currentShown;
    },
    equals(state) {
      state.lastKey = '=';
      state.current = state.currentShown;
    },
  },
  // Actions are similar to mutations, the differences being that:
  // Instead of mutating the state, actions commit mutations.
  // Actions can contain arbitrary asynchronous operations.
  actions: {},
});
