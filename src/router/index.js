import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/spots",
    name: "spots",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Spots.vue"),
  },
  {
    path: "/spots/:id",
    name: "spot",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Spot.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
