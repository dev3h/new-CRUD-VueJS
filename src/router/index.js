// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/skills",
        name: "SkillIndex",
        component: () => import("@/views/skills/SkillIndex.vue"),
      },
      {
        path: "/skills/create",
        name: "SkillCreate",
        component: () => import("@/views/skills/SkillCreate.vue"),
      },
      {
        path: "/skills/:id/edit",
        name: "SkillEdit",
        component: () => import("@/views/skills/SkillEdit.vue"),
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
