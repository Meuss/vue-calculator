<template>
  <div class="advanced-outer">
    <div class="advanced ac" @click="reset">{{startPoint}}</div>
    <div class="advanced inverse" @click="inverse">+/-</div>
    <div class="advanced percent" @click="percent">%</div>
  </div>
</template>

<script>
import { store } from '@/store/store';

export default {
  methods: {
    clickfx(elem) {
      document.querySelector(elem).classList.add('clicked');
      setTimeout(() => { document.querySelector(elem).classList.remove('clicked'); }, 80);
    },
    inverse() {
      this.$store.commit('inverse');
      this.clickfx('.advanced.inverse');
    },
    reset() {
      this.$store.commit('reset');
      this.clickfx('.advanced.ac');
    },
    percent() {
      this.$store.commit('percent');
      this.clickfx('.advanced.percent');
    },
  },
  computed: {
    startPoint() {
      let text = 'C';
      if (store.state.currentShown === 0 &&
      store.state.currentShown === 0 &&
      !store.state.lastClickedWasOperator &&
      !store.state.lastOperator &&
      !store.state.newNum &&
      store.state.oldNum === '' &&
      store.state.resultNum === '') {
        text = 'AC';
      }
      return text;
    },
  },
};
</script>

<style scoped lang="scss">
.advanced-outer {
  display: grid;
  grid-template-rows: repeat(1, 47px);
  grid-template-columns: repeat(3, 58px);
  grid-gap: 1px;
}
.advanced {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d6d6d6;
  &.clicked {
    background-color: darken(#d6d6d6, 10%);
  }
}
</style>
