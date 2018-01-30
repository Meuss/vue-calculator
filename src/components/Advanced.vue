<template>
  <div class="advanced-outer">
    <div class="advanced ac">AC</div>
    <div class="advanced inverse">+/-</div>
    <div class="advanced percent">%</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
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
