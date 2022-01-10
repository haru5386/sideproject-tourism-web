import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyABZF8pzLVS29LypPQ1imvr-SwyG58KdiI",
    libraries: "places"
  },
  installComponents: true,
});

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/loading-pic.png'),
  loading: require('./assets/images/loading-pic.png'),
  attempt: 1
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
