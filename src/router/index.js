import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import('../views/Home.vue');
    },
  },
  {
    path: '/about',
    name: 'About',

    component: function () {
      return import('../views/About.vue');
    },
  },
  {
    path: '/skills',
    name: 'Skills',

    component: function () {
      return import('../views/Skills.vue');
    },
  },
  {
    path: '/work',
    name: 'Work',

    component: function () {
      return import('../views/Work.vue');
    },
  },
  {
    path: '/contact',
    name: 'contact',

    component: function () {
      return import('../views/Contact.vue');
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
