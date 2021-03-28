import Vue from 'vue';
import VueRouter from 'vue-router';
import frontEnd from '../pages/frontEnd/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'frontEnd',
    component: frontEnd,
    children: [{
      name: 'home',
      path: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../pages/frontEnd/home'),
    }],
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/admin/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
