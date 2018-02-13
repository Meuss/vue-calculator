<template>
  <div :data-id="number" @click="click">
    {{number}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      // numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'],
    };
  },
  props: ['number'],
  methods: {
    click() {
      this.$store.commit('number', this.number);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  height: 100%;
}
</style>
