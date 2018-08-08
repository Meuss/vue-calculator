<template>
  <div :data-id="number" @click="click">
    {{number}}
  </div>
</template>

<script>
export default {
  props: ['number'],
  methods: {
    click() {
      this.$store.commit('number', this.number);
      this.clickfx(this.number);
    },
    clickfx(elem) {
      document.querySelector(`[data-number="${elem}"]`).classList.add('clicked');
      setTimeout(() => { document.querySelector(`[data-number="${elem}"]`).classList.remove('clicked'); }, 80);
    },
  },
};
</script>

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
