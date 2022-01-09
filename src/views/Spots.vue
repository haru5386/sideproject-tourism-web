<template>
  <div id="spots">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div id="spots-banner">
        <div id="spots-title" class="title">
          <h1>景點列表</h1>
          <form class="d-flex justify-content-between"
          @submit.stop.prevent="fetchCitySpot">
            <select v-model="selectCity">
              <option
                v-for="city in cities"
                :key="city.value"
                :value="city.value"
              >
                {{ city.text }}
              </option>
            </select>
            <div class="icon d-flex">
              <button
                class="btn btn-filled mr-3"
                type="submit"
              >
                篩選
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6.84408 11.1946C6.94068 11.1472 7.02209 11.0738 7.07909 10.9825C7.1361 10.8913 7.16644 10.7859 7.16667 10.6783V7.57501C7.16667 7.42218 7.22792 7.27518 7.33758 7.16668L10.9082 3.63518C11.1269 3.41876 11.25 3.12476 11.25 2.81851V1.32751C11.2497 1.25127 11.2344 1.17583 11.2049 1.10552C11.1754 1.03522 11.1323 0.971415 11.0781 0.917774C11.0239 0.864133 10.9597 0.821704 10.8891 0.792917C10.8185 0.76413 10.7429 0.74955 10.6667 0.750011H1.33333C1.01075 0.750011 0.75 1.00784 0.75 1.32751V2.81851C0.75 3.12476 0.873083 3.41876 1.09183 3.63518L4.66242 7.16668C4.71652 7.22004 4.75948 7.28361 4.78882 7.3537C4.81816 7.4238 4.83329 7.49902 4.83333 7.57501V11.2558C4.83333 11.6846 5.2895 11.9634 5.67742 11.7715L6.84408 11.1946Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </button>
              <div
                v-if="listMode"
                class="btn btn-filled"
                @click="mapModeChange()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                >
                  <path
                    d="M5 0C2.24315 0 5.09024e-05 2.1534 5.09024e-05 4.797C-0.0180739 8.664 4.81 11.8704 5 12C5 12 10.0181 8.664 9.99995 4.8C9.99995 2.1534 7.75685 0 5 0ZM5 7.2C3.61876 7.2 2.50003 6.126 2.50003 4.8C2.50003 3.474 3.61876 2.4 5 2.4C6.38124 2.4 7.49998 3.474 7.49998 4.8C7.49998 6.126 6.38124 7.2 5 7.2Z"
                  />
                </svg>
              </div>
              <div v-else class="btn btn-filled" @click="listModeChange()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                >
                  <path
                    d="M5.41667 0.333344H11.25V1.50001H5.41667V0.333344ZM5.41667 2.66668H8.91667V3.83334H5.41667V2.66668ZM5.41667 6.16668H11.25V7.33334H5.41667V6.16668ZM5.41667 8.50001H8.91667V9.66668H5.41667V8.50001ZM0.75 0.333344H4.25V3.83334H0.75V0.333344ZM1.91667 1.50001V2.66668H3.08333V1.50001H1.91667ZM0.75 6.16668H4.25V9.66668H0.75V6.16668ZM1.91667 7.33334V8.50001H3.08333V7.33334H1.91667Z"
                    fill="#F0F0F0"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div v-if="listMode" class="d-flex justify-content-center">
        <div class="card-apots-area">
          <Card
            v-for="ScenicSpot in ScenicSpots"
            :key="ScenicSpot.ScenicSpotID"
            :ScenicSpot="ScenicSpot"
            :City="city"
            class="card-rwd-width"
          />
        </div>
      </div>
      <div v-else>
        <div class="spots-map">
          <div class="card-area">
            <Card
              v-for="ScenicSpot in ScenicSpots"
              :key="ScenicSpot.ScenicSpotID"
              :ScenicSpot="ScenicSpot"
              :City="city"
            />
          </div>
          <Map :ScenicSpots="ScenicSpots" :City="city" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Map from "../components/Map.vue";
import scenicSpotAPI from "../apis/scenicSpot";
import Spinner from "./../components/Spinner.vue";
import { Toast } from './../utils/helpers'

export default {
  components: {
    Card,
    Map,
    Spinner,
  },
  data() {
    return {
      selectCity: "",
      city: "",
      cities: [
        { text: "請選擇縣市", value: "" },
        { text: "台北市", value: "Taipei" },
        { text: "桃園市", value: "Taoyuan" },
        { text: "台中市", value: "Taichung" },
        { text: "台南市", value: "Tainan" },
        { text: "高雄市", value: "Kaohsiung" },
        { text: "基隆市", value: "Keelung" },
        { text: "新竹市", value: "Hsinchu" },
        { text: "新竹縣", value: "HsinchuCounty" },
        { text: "苗栗縣", value: "MiaoliCounty" },
        { text: "彰化縣", value: "ChanghuaCounty" },
        { text: "南投縣", value: "NantouCounty" },
        { text: "雲林縣", value: "YunlinCounty" },
        { text: "嘉義縣", value: "ChiayiCounty" },
        { text: "嘉義市", value: "Chiayi" },
        { text: "屏東縣", value: "PingtungCounty" },
        { text: "宜蘭縣", value: "YilanCounty" },
        { text: "花蓮縣", value: "HualienCounty" },
        { text: "台東縣", value: "TaitungCounty" },
        { text: "金門縣", value: "KinmenCounty" },
        { text: "澎湖縣", value: "PenghuCounty" },
        { text: "連江縣", value: "LienchiangCounty" },
      ],
      listMode: true,
      ScenicSpots: "",
      isLoading: true,
    };
  },
  created() {
    const { city = "" } = this.$route.query;
    this.fetchScenicSpot({ queryCity: city });
  },
  beforeRouteUpdate(to, from, next) {
    const { city = "" } = to.query;
    this.fetchScenicSpot({ queryCity: city });
    next();
  },
  methods: {
    async fetchScenicSpot({ queryCity }) {
      try {
        if (queryCity) {
          this.city = queryCity
          this.isLoading = true;
          const res = await scenicSpotAPI.getCityScenicSpot(queryCity);
          let rawData = res.data.map((data) => {
            if (!data.Picture.PictureUrl1) {
              return {
                ...data,
                Picture: {
                  PictureUrl1: require("@/assets/images/noimage.png"),
                  PictureDescription1: "圖片不存在",
                },
              };
            } else {
              return {
                ...data,
              };
            }
          });
          this.ScenicSpots = rawData;
          this.isLoading = false;
        } else {
          this.city = ""
          const res = await scenicSpotAPI.getScenicSpotAll();
          let rawData = res.data.map((data) => {
            if (!data.Picture.PictureUrl1) {
              return {
                ...data,
                Picture: {
                  PictureUrl1: require("@/assets/images/noimage.png"),
                  PictureDescription1: "圖片不存在",
                },
              };
            } else {
              return {
                ...data,
              };
            }
          });
          this.ScenicSpots = rawData;
          this.isLoading = false;
        }
      } catch (err) {
        this.isLoading = false;
        console.log(err);
        this.city = []
        Toast.fire({
          icon: 'error',
          title: '網頁發生錯誤。'
      })
      }
    },
    async fetchCitySpot() {
        this.city = this.selectCity
        this.$router.push({ path: "spots", query: { city: `${this.city}` } });
    },
    listModeChange() {
      this.listMode = true;
    },
    mapModeChange() {
      this.listMode = false;
    },
  },
};
</script>

