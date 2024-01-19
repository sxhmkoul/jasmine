<template>
  <div class="carousel-wrapper" v-if="data.length">
    <VueSlickCarousel v-bind="settings" :arrows="showArrows">
      <div class="image-wrapper" :key="slide" v-for="slide in data">
        <img :src="slide" alt="" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "SlickCarousel",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        autoplaySpeed: 5 * 1000,
        autoplay: !!this.autoplay,
        arrows: false,
        dots: false,
        dotsClass: "slick-dots",
        swipeToSlide: true,
        slidesToShow: 1,
        infinite: true,
      },
    };
  },
  props: {
    showArrows: {
      type: Boolean,
      required: false,
      default: false,
    },
    data: {
      type: Array,
      required: true,
    },
    autoplay: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>

<style lang="less" scoped>
.carousel-wrapper {
  width: 100%;
  border: 5px solid white;
  padding: 0.4rem;
  border-radius: 32px;
  margin: 0 auto;
}
.image-wrapper {
  height: 420px;
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
