<template>
  <div class="dashboard-wrapper">
    <div class="hero-widgets">
      <div class="greeting">
        <div class="state">
          <span>Good</span>
          <img src="../assets/sun.png" alt="" />
        </div>
        <span>Afternoon!</span>
      </div>
      <div class="counter greeting flex flex__gap position__relative">
        <div class="flex flex__column">
          <span>Day</span>
          <img src="../assets/feather.png" alt="" width="60px" />
        </div>
        <span class="font__xl">3</span>
        <div class="position__absolute tag"><img src="../assets/expand_box.png" alt=""></div>
      </div>
      <div class="counter greeting flex flex__gap position__relative">
        <div class="flex flex__column">
          <div class="flex flex__gap w-100">
            <span>Log</span>
            <img src="../assets/add.png" alt="" width="60px" />
          </div>
          <span>Symptoms</span>
        </div>
      </div>
    </div>
    <slick-carousel :data="carouselConfig" autoplay="8"></slick-carousel>
  </div>
</template>

<script>
import SlickCarousel from "../components/common/carousel.vue";
import fetchConfig from "../services/config.service";
export default {
  name: "Dashboard",
  components: { SlickCarousel },
  data() {
    return {
      carouselConfig: [],
    };
  },
  methods: {
    loadConfig() {
      fetchConfig().then((res) => {
        this.carouselConfig = res.data.media.map((data) => {
          return data.src.landscape;
        });
        console.log(this.carouselConfig);
      });
    },
  },
  mounted() {
    this.loadConfig();
  },
};
</script>

<style lang="less" scoped>
@import "../styles/style.less";
.dashboard-wrapper {
  padding: 2rem;
  height: 100vh;
  background-color: @primary-bg;
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .hero-widgets {
    display: flex;
    gap: 1rem;
    .greeting {
      font-weight: 500;
      font-size: 3rem;
      color: white;
      margin: 0;
      // width: 32%;
      background: #488351;
      border-radius: 15px;
      padding: 1rem;

      > div.state {
        display: flex;
        align-items: center;
        gap: 1rem;

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
