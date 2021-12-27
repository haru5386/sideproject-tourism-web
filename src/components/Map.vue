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
  data() {
    return {
      markers: [
        {
          position: { lat: 25.033671, lng: 121.564427 },
          infoText:
            "<div class='img'><img src='https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_7927_32.jpg'  alt='台北101'></div><h4 style='font-size: 1rem;'>台北101</h4>",
        },
        {
          position: { lat: 25.0325917, lng: 121.5624999 },
          infoText: "<div class='img'><img src='https://photo.travelking.com.tw/scenery/1F8576A4-EFD5-494E-B117-9F89E5A9A9C6_e.jpg'  alt='捷運世貿站'></div><h4 style='font-size: 1rem;'>捷運世貿站</h4>",
        },
      ],
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
  methods: {
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;
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