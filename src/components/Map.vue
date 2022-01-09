<template>
  <div class="map">
    <GmapMap
      :center="center"
      :zoom="15"
      :options="options"
      style="width: 100%; height: 100%"
    >
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
      </GmapInfoWindow>
      <GmapMarker
        :icon="{ url: require('../assets/images/mappin.png') }"
        v-for="(m, i) in markers"
        :key="i"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="toggleInfoWindow(m, i)"
      />
    </GmapMap>
  </div>
</template>
 
<script>
export default {
  name: "AddGoogleMap",
    props: {
    ScenicSpots: {
      type: Array,
      required: true,
    },
    City: {
      type: String
    }
  },
  
  data() {
    return {
      markers: [],
      center: { lat: 25.033671, lng: 121.564427 },
      options: {
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        disableDefaultUI: true,
        scrollwheel: true,
        clickableIcons: false,
      },
      infoWindowPos: null,
      infoWinOpen: false,
      currentIdx: null,

      infoOptions: {
        maxWidth: 200,
        content: "",
        pixelOffset: {
          width: 0,
          height: -40,
        },
      },
    };
  },
  created() {
    this.fetchScenicSpots()
  },
  methods: {
    fetchScenicSpots(){
      this.center = { lat: this.ScenicSpots[0].Position.PositionLat, lng:  this.ScenicSpots[0].Position.PositionLon }
      this.markers = this.ScenicSpots.map(ScenicSpot => {
        return {
          position: { lat: ScenicSpot.Position.PositionLat, lng:  ScenicSpot.Position.PositionLon },
          infoText: `<a href="#/spots/${this.City}/${ScenicSpot.id}"><div class='img'><img src='${ScenicSpot.pic}'  alt='${ScenicSpot.picDes}'></div><h4 style='font-size: 1rem;'>${ScenicSpot.name}</h4></a>`
        }
      })
    },
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;
      this.center = marker.position;
      if (this.currentIdx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentIdx = idx;
      }
    },
  },
};
</script>