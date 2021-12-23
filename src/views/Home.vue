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
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import HomeBanner from "./../components/HomeBanner.vue";
import Card from "./../components/Card.vue";
import SearchSpots from "./../components/SearchSpots.vue";


window.onscroll = function () {
  // navBar固定
  let topScroll = document.documentElement.scrollTop;
  let nav = document.getElementById("navbar");
  if (topScroll > 30) {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.zIndex = "99";
  } else {
    nav.style = "";
  }
  // spots banner固定
  let spotsBanner = document.getElementById("spots-banner");
  let spotsTitle = document.getElementById("spots-title");
  if (spotsBanner) {
    if (topScroll > 30) {
      spotsBanner.style.height = "80px";
      spotsBanner.style.position = "fixed";
      spotsBanner.style.top = "60px";
      spotsBanner.style.zIndex = "99";
      spotsTitle.classList.add("after-scroll");
    } else {
      spotsBanner.style.height = "172px";
      spotsTitle.classList.remove("after-scroll");
      spotsBanner.style.position = "static";
    }
  }
};

export default {
  name: "Home",
  components: {
    VueSlickCarousel,
    HomeBanner,
    Card,
    SearchSpots,
    
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
        prevArrow: "<div class='btn'>></div>",
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
