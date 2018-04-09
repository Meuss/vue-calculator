<template>
  <div class="advanced-outer">
    <div class="advanced ac" @click="reset">AC</div>
    <div class="advanced inverse" @click="inverse">+/-</div>
    <div class="advanced percent" @click="percent">%</div>
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
    reset() {
      this.$store.commit('reset');
    },
    percent() {
      this.$store.commit('percent');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}
</style>
