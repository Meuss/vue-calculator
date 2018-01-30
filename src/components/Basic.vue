<template>
  <div class="basic-outer">
    <div class="basic divide">÷</div>
    <div class="basic multiply">×</div>
    <div class="basic minus">-</div>
    <div class="basic plus">+</div>
    <div class="basic equals">=</div>
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
