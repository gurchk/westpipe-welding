import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
Vue.use(Router);

export default new Router({
  routes: [
      {
          path: '/',
          redirect: { path: "/sv/" }
      },
    {
      path: "/sv/",
      name: "home",
      component: Home
    },
    {
      path: "/sv/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/About.vue")
    },
    {
      path: "/sv/projects",
      name: "projects",
      component: () => import("./views/Projects.vue")
    },

    {
      path: "/sv/hse",
      name: "hse",
      component: () => import("./views/Hse.vue")
    },
    {
      path: "/sv/quality",
      name: "quality",
      component: () => import("./views/Quality.vue")
    },
    {
      path: "/sv/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },

      {
          path: "/en/",
          name: "homeEn",
          component: () => import("./views/HomeEn.vue")
      },
      {
          path: "/en/about",
          name: "aboutEn",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("./views/AboutEn.vue")
      },
      {
          path: "/en/projects",
          name: "projectsEn",
          component: () => import("./views/ProjectsEn.vue")
      },

      {
          path: "/en/hse",
          name: "hseEn",
          component: () => import("./views/HseEn.vue")
      },
      {
          path: "/en/quality",
          name: "qualityEn",
          component: () => import("./views/QualityEn.vue")
      },
      {
          path: "/en/contact",
          name: "contactEn",
          component: () => import("./views/ContactEn.vue")
      },
  ]
});
