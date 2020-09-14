import Vue from 'vue';
import VueRouter from 'vue-router';

import Menu from '../partials/menu.vue';
import Dashboard from '../views/dashboard.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  // mode: 'history',
  routes: [
    {
      name: 'Dashboard',
      path: '/',
      components: {
        main: Dashboard,
        menu: Menu,
      },
    },
  ],
});

export default router;
