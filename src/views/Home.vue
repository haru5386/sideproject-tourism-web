<template>
  <div class="home">
    <Spinner v-if="isLoading" />
    <template v-else>
      <HomeBanner />
      <section class="hot-spots">
        <div class="title d-flex justify-content-between align-items-center">
          <h3>熱門打卡景點</h3>
          <router-link :to="{path: '/spots'}" class="btn btn-filled">查看更多</router-link>
        </div>
        <VueSlickCarousel :arrows="true" v-bind="settings" class="card-area">
          <Card
            v-for="ScenicSpot in ScenicSpotTop5"
            :key="ScenicSpot.ScenicSpotID"
            :ScenicSpot="ScenicSpot"
          />
        </VueSlickCarousel>
      </section>
      <SearchSpots />
      <section class="rainbow-life">
        <div class="title d-flex justify-content-between align-items-center">
          <h3>Rainbow Life!</h3>
          <router-link :to="{path: '/spots'}" class="btn btn-filled">查看更多</router-link>
        </div>
        <VueSlickCarousel :arrows="true" v-bind="settings" class="card-area">
          <Card
            v-for="ScenicSpot in ScenicSpot6To10"
            :key="ScenicSpot.ScenicSpotID"
            :ScenicSpot="ScenicSpot"
          />
        </VueSlickCarousel>
      </section>
    </template>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import HomeBanner from "./../components/HomeBanner.vue";
import Card from "./../components/Card.vue";
import SearchSpots from "./../components/SearchSpots.vue";
import Spinner from "./../components/Spinner.vue";
import scenicSpotAPI from "../apis/scenicSpot";

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
    if (topScroll > 200) {
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
    Spinner
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
      ScenicSpotTop5: [],
      ScenicSpot6To10: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchScenicSpotTop5();
  },
  methods: {
    async fetchScenicSpotTop5() {
      try {
        const res = await scenicSpotAPI.getScenicSpotTop10();
        console.log(res.data);
        this.ScenicSpotTop5 = res.data.slice(0,5);
        this.ScenicSpot6To10 = res.data.slice(5,10);
        this.isLoading = false
      } catch (err) {
        this.isLoading = false
        console.log(err);
      }
    }
  },
};
</script>
