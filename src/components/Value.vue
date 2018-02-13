<template>
  <div class="value">
    {{currentShown}}
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    currentShown() {
      return this.$store.state.currentShown;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .value {
    color: white;
    font-weight: 300;
    font-size: 45px;
  }
</style>
