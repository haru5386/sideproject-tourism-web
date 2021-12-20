<template>
  <div class="home">
    <HomeBanner />
    <section class="hot-spots">
      <div class="title d-flex justify-content-between align-items-center">
        <h2>熱門打卡景點</h2>
        <div class="btn btn-filled">查看更多</div>
      </div>
      <VueSlickCarousel :arrows="true" v-bind="settings" class="card-area">
        <Card />
        <Card />
        <Card />
        <Card />
      </VueSlickCarousel>
      <div class="c">
        <p>123</p>
        <p>123</p>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import HomeBanner from "./../components/HomeBanner.vue";
import Card from "./../components/Card.vue";

export default {
  name: "Home",
  components: {
    VueSlickCarousel,
    HomeBanner,
    Card,
  },
  data() {
    return {
      settings: {
        infinite: true,
        initialSlide: 3,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow:"<div class='btn'>></div>",
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
