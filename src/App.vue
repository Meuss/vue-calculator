<template>
  <div id="app">
    <div class="value-wrapper">
      <Value/>
    </div>
    <div class="buttons">
      <div class="advanced-wrapper">
        <Advanced/>
      </div>
      <div class="basic-wrapper">
        <Basic/>
      </div>
      <div class="numbers-wrapper">
        <div class="numbers">
          <div v-for="number in numbers"
          class="number"
          :key="number"
          :data-number="number">
            <Numbers :number="number"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Numbers from './components/Numbers';
import Advanced from './components/Advanced';
import Basic from './components/Basic';
import Value from './components/Value';

export default {
  name: 'App',
  components: {
    Advanced,
    Numbers,
    Value,
    Basic,
  },
  data() {
    return {
      numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'],
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
  width: 100vw;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/static/sierra.jpg');
  background-size: cover;
  background-position: center center;
}
#app {
  background-color: rgba(142,142,142,0.95);
  border: 1px solid #8e8e8e;
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border-radius: 7px;
  overflow: hidden;
  /* box-shadow: 0px 10px 42px 0px rgba(0,0,0,0.35); */
  box-shadow: 3px 6px 12px 0 rgba(0, 0, 0, 0.2),
  -3px 6px 12px 0 rgba(0, 0, 0, 0.2),
  0 40px 100px -10px rgba(0, 0, 0, 0.6);
}
.value-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 22px 15px 5px 15px;
}
.buttons {
  display: grid;
  grid-template-rows: repeat(5, 47px);
  grid-template-columns: repeat(4, 58px);
  grid-gap: 1px;
  div {
    cursor: pointer;
  }
}
.advanced-wrapper {
  grid-column: 1 / 4;
}
.basic-wrapper {
  grid-column: 4 / 5;
  grid-row: 1 / 6;
  color: white;
}
.numbers-wrapper {
  grid-row: 2 / 5;
}
.numbers {
  display: grid;
  grid-template-rows: repeat(4, 47px);
  grid-template-columns: repeat(3, 58px);
  grid-gap: 1px;
}
.number {
  &[data-number="0"] {
    grid-column: 1 / 3;
  }
}
</style>
