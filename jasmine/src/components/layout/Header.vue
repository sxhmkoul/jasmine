<template>
  <header>
    <div class="logo">
        <span>Jasmine.</span>
        <img src="../../assets/jasmine-with-leaves.png" alt="">
    </div>
    <div class="navbar">
      <ul>
        <router-link to="/home" active-class="active">Home</router-link>
        <router-link to="/stats" active-class="active">Stats</router-link>
        <router-link to="/relax" active-class="active">Relax</router-link>
        <router-link to="/blogs" active-class="active">Blogs</router-link>
        
      </ul>
    </div>
    <div class="profile">Hey, Claire</div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="less" scoped>
@import "../../styles/style.less";

header {
  background-color: @primary-bg-dark;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .navbar {
    display: flex;
    > ul {
      border-radius: 50px;
      list-style-type: none;
      display: flex;
      width: 100%;
      border-radius: 50px;
      backdrop-filter: brightness(0.9);
      border: none;

      > a{
        padding: 1rem 2rem;
        color: rgb(212, 212, 212);
        border-radius: 50px;
        text-decoration: none;
        &.active {
          background: black;
          color: white;
        }
      }
    }
  }
}
</style>
