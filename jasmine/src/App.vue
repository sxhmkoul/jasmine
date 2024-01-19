<template>
  <div class="app-container">
    <header-component />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/layout/Header.vue";
export default {
  name: "App",
  components: { HeaderComponent },
};
</script>

<style lang="less">
@import "../src/styles/style.less";
body {
  margin: 0;
  padding: 0;
  font-family: "Unbounded", sans-serif;
  font-weight: 300;
}

.app-container {
  display: flex;
  flex-direction: column;
  background-color: @primary-bg;
}
</style>
