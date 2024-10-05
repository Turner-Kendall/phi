import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
// import Memes from "../views/ViewMemes.vue";
// import Edit from "../views/EditLink.vue";
// import Add from "../views/AddLink.vue"
// import PageView from "../views/PageView.vue";
// import MemeVote from "../views/MemeVote.vue";
// import { store } from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home, },
    // { path: "/memes",  name: "Memes", component: Memes, },
    // { path: "/page/:name", name: "PageView", component: PageView, },
    // { path: "/meme/:id",  name: "MemeVote", component: MemeVote, },
    { path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    }
  ],
});

export default router;