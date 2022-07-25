import Router from "vue-router";
import Vue from "vue";
import MainView from "@/views/MainView";

Vue.use(Router);

const routes = [
  {
    path: "/table",
    name: "table",
    component: () => import("@/views/TableView.vue"),
  },

  {
    path: "/",
    name: "page",
    component: MainView,
  },
];

const router = new Router({
  mode: "history", // https://router.vuejs.org/api/#mode
  linkActiveClass: "open active",
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: routes,
});

export default router;
