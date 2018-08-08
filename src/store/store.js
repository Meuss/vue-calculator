import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// I should refactor everything, but no time.


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
          // '.'
          if (state.currentShown.toString().indexOf('.') === -1) {
            const str1 = state.currentShown.toString();
            const str2 = value.toString();
            state.currentShown = str1 + str2;
          } else {
            console.log('already has a dot!');
          }
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
      state.lastOperator = 'inverse';
      state.lastClickedWasOperator = true;
      state.currentShown = -state.currentShown;
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
    percent(state) {
      state.lastOperator = '%';
      state.lastClickedWasOperator = true;
      state.currentShown /= 100;
    },
    equals(state) {
      switch (state.lastOperator) {
        case '+':
          state.resultNum = parseFloat(state.oldNum) + parseFloat(state.currentShown);
          break;
        case '-':
          state.resultNum = parseFloat(state.oldNum) - parseFloat(state.currentShown);
          break;
        case '*':
          state.resultNum = parseFloat(state.oldNum) * parseFloat(state.currentShown);
          break;
        case '/':
          state.resultNum = parseFloat(state.oldNum) / parseFloat(state.currentShown);
          break;
        case 'inverse':
          // do nothing
          state.resultNum = state.currentShown;
          break;
        case '%':
          state.resultNum = parseFloat(state.oldNum) / 100;
          break;
        // If equal is pressed without an operator, keep number and continue
        default:
          state.resultNum = state.currentShown;
      }

      if (!isFinite(state.resultNum)) {
        // If result is not a number
        if (isNaN(state.resultNum)) {
          state.currentShown = 'NaN';
          state.resultNum = 'NaN';
        } else {
          state.currentShown = 'infinity';
          state.resultNum = 'infinity';
        }
      }
      // Display result
      state.currentShown = state.resultNum;
      // Now reset
      state.oldNum = '';
      state.lastOperator = false;
    },
  },
});
