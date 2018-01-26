<template>
  <div class="numbers">
    <div v-for="number in numbers" :key="number" class="number">
      {{number}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.numbers {
  display: grid;
  grid-template-rows: repeat(5, 50px);
  grid-template-columns: repeat(3, 60px);
  grid-gap: 1px;
}
.number {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
}
</style>
