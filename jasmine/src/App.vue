<template>
  <div class="app-container">
    <header-component />
    <div class="app-body-wrapper">
      <router-view></router-view>
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/layout/Header.vue";
import Sidebar from "./components/layout/Sidebar.vue";
export default {
  name: "App",
  components: { HeaderComponent, Sidebar },
};
</script>

<style lang="less">
@import "../src/styles/style.less";
* {
  box-sizing: border-box;
}
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

  .app-body-wrapper {
    display: flex;
    justify-content: space-evenly;
    padding: 2rem 0;
  }
}
</style>
