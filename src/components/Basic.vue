<template>
  <div class="basic-outer">
    <div class="basic divide" @click="divide">÷</div>
    <div class="basic multiply" @click="multiply">×</div>
    <div class="basic minus" @click="minus">-</div>
    <div class="basic plus" @click="plus">+</div>
    <div class="basic equals" @click="equals">=</div>
  </div>
</template>

<script>
export default {
  methods: {
    clickfx(elem) {
      document.querySelector(elem).classList.add('clicked');
      setTimeout(() => { document.querySelector(elem).classList.remove('clicked'); }, 80);
    },
    divide() {
      this.$store.commit('divide');
      this.clickfx('.basic.divide');
    },
    multiply() {
      this.$store.commit('multiply');
      this.clickfx('.basic.multiply');
    },
    minus() {
      this.$store.commit('minus');
      this.clickfx('.basic.minus');
    },
    plus() {
      this.$store.commit('plus');
      this.clickfx('.basic.plus');
    },
    equals() {
      this.$store.commit('equals');
      this.clickfx('.basic.equals');
    },
  },
};
</script>

<style scoped lang="scss">
.basic-outer {
  display: grid;
  grid-template-rows: repeat(5, 47px);
  grid-template-columns: repeat(1, 58px);
  grid-gap: 1px;
}
.basic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fe9140;
  &.clicked {
    background-color: darken(#fe9140, 5%);
  }
}
</style>
