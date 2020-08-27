import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import active from "../views/active.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/active",
    name:'active',
    component: active
  }
];

const router = new VueRouter({
  mode: "history",
  // base: window.__POWERED_BY_QIANKUN__ ? '/' : '',
  routes
});

export default router;
