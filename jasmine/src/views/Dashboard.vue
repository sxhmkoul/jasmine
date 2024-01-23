<template>
  <div class="dashboard-wrapper">
    <slick-carousel :data="carouselConfig" :autoplay="20"></slick-carousel>
    <div class="ask-lily-strip">
      <div>
        <span>Have menstrual questions? Ask Lily</span>
        <img src="../assets/woman.png" alt="" width="60px" />
      </div>
    </div>
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
    async loadConfig() {
      // fetchConfig().then((res) => {
      const fetchedConfig = await fetchConfig();
      fetchedConfig.data.media.map((data) => {
        console.log("hello", data);
        if (data.type === "Photo") {
          this.carouselConfig.push(data?.src?.landscape);
        } else {
          this.carouselConfig.unshift(data?.video_files[2]?.link);
        }
      });
      console.log(this.carouselConfig);
      // });
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
  // padding: 2rem;
  height: 100vh;
  // background-color: @primary-bg;
  width: 60%;
  // margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
