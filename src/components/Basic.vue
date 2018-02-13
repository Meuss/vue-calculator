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
  data() {
    return {
    };
  },
  methods: {
    inverse() {
      this.$store.commit('inverse');
    },
    divide() {
      this.$store.commit('divide');
    },
    multiply() {
      this.$store.commit('multiply');
    },
    minus() {
      this.$store.commit('minus');
    },
    plus() {
      this.$store.commit('plus');
    },
    equals() {
      this.$store.commit('equals');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}
</style>
