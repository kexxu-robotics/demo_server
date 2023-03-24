import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/Login.vue";
import Logout from "@/components/Logout.vue";
import Profile from "@/components/Profile.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
