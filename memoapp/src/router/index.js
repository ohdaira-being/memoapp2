import { createRouter, createWebHistory } from "vue-router";

import EditView from "../views/EditView.vue";
import AdditionView from "../views/AdditionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/edit/:id",
      name: "edit",
      component: EditView,
    },
    {
      path: "/addition",
      name: "addition",
      component: AdditionView,
    },
  ],
});

export default router;
