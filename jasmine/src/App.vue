<template>
  <div class="app-container">
    <HeaderComponent />
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
body {
  margin: 0;
  padding: 0;
  font-family: "Unbounded", sans-serif;
  font-weight: 300;
}

.app-container {
  display: flex;
  flex-direction: column;
}
</style>
