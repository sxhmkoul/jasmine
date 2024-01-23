<template>
  <div class="sidebar-wrapper">
    <div class="hero-widgets">
      <div class="greeting font__lg w-65">
        <div class="state">
          <span class="w-100">Good</span>
          <!-- <img src="../../assets/sun.png" alt="" /> -->
          <span class="w-100">Afternoon!</span>
        </div>
        <div>
            <img src="../../assets/sun.png" alt="" />
        </div>
      </div>
      <div class="counter greeting font__lg flex flex__gap position__relative">
        <div class="flex flex__column">
          <span>Day</span>
          <img src="../../assets/feather.png" alt="" width="60px" />
        </div>
        <span class="font__xxl">3</span>
        <div class="position__absolute tag">
          <img src="../../assets/expand_box.png" alt="" />
        </div>
      </div>
      <div class="greeting font__lg flex flex__gap position__relative">
        <div class="flex flex__column">
          <div class="flex flex__gap w-100">
            <span>Log</span>
            <img src="../../assets/add.png" alt="" width="60px" />
          </div>
          <span>Symptoms</span>
        </div>
      </div>

      <div class="font__lg flex flex__gap position__relative">
        <div class="flex flex__column w-100">
          <div class="flex flex__gap w-100 take-a-break greeting">
            <span>Take a break</span>
          </div>
          <!-- <img src="../../assets/woman.png" alt="" width="60px" /> -->
        </div>
      </div>

      <div class="greeting font__lg flex flex__gap position__relative">
        <div class="flex flex__column">
          <div class="flex flex__gap w-100">
            <span>Saved Posts</span>
          </div>
          <!-- <img src="../../assets/woman.png" alt="" width="60px" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/style.less";

.take-a-break {
  height: 7rem;
  justify-content: center;
  background-image: url(https://images.pexels.com/photos/12364857/pexels-photo-12364857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) !important;
}

.sidebar-wrapper {
  width: 23%;

  .hero-widgets {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    .greeting {
      font-weight: 500;
      //   font-size: 3rem;
      color: white;
      margin: 0;
      // width: 32%;
      background: #488351;
      border-radius: 15px;
      padding: 1rem;

      > div.state {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 1.5rem;
        // gap: 0;
        // text-align: left;

        img {
          width: 60px;
        }
      }
    }

    .counter {
      background: @love-bg;
    }
  }
}
</style>
