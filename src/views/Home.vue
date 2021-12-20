<template>
  <div class="home">
    <HomeBanner />
    <section class="hot-spots">
      <div class="title d-flex justify-content-between align-items-center">
        <h3>熱門打卡景點</h3>
        <div class="btn btn-filled">查看更多</div>
      </div>
      <VueSlickCarousel :arrows="true" v-bind="settings" class="card-area">
        <Card />
        <Card />
        <Card />
        <Card />
      </VueSlickCarousel>
    </section>
    <SearchSpots />
        <section class="rainbow-life">
      <div class="title d-flex justify-content-between align-items-center">
        <h3>Rainbow Life!</h3>
        <div class="btn btn-filled">查看更多</div>
      </div>
      <VueSlickCarousel :arrows="true" v-bind="settings" class="card-area">
        <Card />
        <Card />
        <Card />
        <Card />
      </VueSlickCarousel>
    </section>
    <Footer />
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import HomeBanner from "./../components/HomeBanner.vue";
import Card from "./../components/Card.vue";
import SearchSpots from "./../components/SearchSpots.vue";
import Footer from "./../components/Footer.vue";

window.onscroll = function () {
    // 滾動時當前位置距頂部的距離
    var topScroll = document.documentElement.scrollTop;
    console.log(topScroll)
    var nav = document.getElementById("navbar");
    console.log(nav)
    if (topScroll > 60) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.zIndex = '99'
    } else {
        nav.style = ''
    }
}

export default {
  name: "Home",
  components: {
    VueSlickCarousel,
    HomeBanner,
    Card,
    SearchSpots,
    Footer,
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
