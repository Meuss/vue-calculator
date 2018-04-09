import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line
export const store = new Vuex.Store({
  strict: true,
  state: {
    currentShown: 0,
    lastOperator: false,
    lastClickedWasOperator: false,
    newNum: false,
    oldNum: '',
    resultNum: '',
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
      state.currentShown = 0;
      state.lastClickedWasOperator = false;
      state.lastOperator = false;
      state.newNum = false;
      state.oldNum = '';
      state.resultNum = '';
    },
    number(state, value) {
      if (!state.lastClickedWasOperator) {
        if (isNaN(value)) {
          // '.' was passed
          const str1 = state.currentShown.toString();
          const str2 = value.toString();
          state.currentShown = parseFloat(str1 + str2);
        } else {
          const str1 = state.currentShown.toString();
          const str2 = value.toString();
          state.currentShown = parseFloat(str1.concat(str2));
        }
      } else {
        state.currentShown = value;
        state.lastClickedWasOperator = false;
      }
    },
    inverse(state) {
      state.lastOperator = '+-';
      state.lastClickedWasOperator = true;
      state.oldNum = -state.currentShown;
    },
    divide(state) {
      state.lastOperator = '/';
      state.lastClickedWasOperator = true;
      state.oldNum = state.currentShown;
    },
    multiply(state) {
      state.lastOperator = '*';
      state.lastClickedWasOperator = true;
      state.oldNum = state.currentShown;
    },
    minus(state) {
      state.lastOperator = '-';
      state.lastClickedWasOperator = true;
      state.oldNum = state.currentShown;
    },
    plus(state) {
      state.lastOperator = '+';
      state.lastClickedWasOperator = true;
      state.oldNum = state.currentShown;
    },
    equals(state) {
      // state.oldNum = state.currentShown;
      // Convert string input to numbers
      // state.lastClickedWasOperator = true;
      state.currentShown = Number(state.currentShown);
      state.oldNum = Number(state.oldNum);
      // Perform operation
      switch (state.lastOperator) {
        case '+':
          console.log('equals with plus');
          this.resultNum = this.oldNum + this.CurrentShown;
          break;
        case '-':
          this.resultNum = this.oldNum - this.CurrentShown;
          break;
        case '*':
          this.resultNum = this.oldNum * this.CurrentShown;
          break;
        case '/':
          this.resultNum = this.oldNum / this.CurrentShown;
          break;
        case '+-':
          this.resultNum = -this.oldNum;
          break;
        // If equal is pressed without an operator, keep number and continue
        default:
          this.resultNum = this.CurrentShown;
      }

      if (!isFinite(this.resultNum)) {
        // If result is not a number
        if (isNaN(this.resultNum)) {
          this.currentShown = 'NaN';
          this.resultNum = 'NaN';
        } else {
          this.currentShown = 'infinity';
          this.resultNum = 'infinity';
        }
      }
      // Display result
      state.currentShown = this.resultNum;
      // Now reset
      state.newNum = false;
      state.lastOperator = false;
    },
  },
  // Actions are similar to mutations, the differences being that:
  // Instead of mutating the state, actions commit mutations.
  // Actions can contain arbitrary asynchronous operations.
  actions: {},
});
