import Vue from 'vue';
import VueRouter from 'vue-router';
import frontEnd from '../pages/frontEnd/index.vue';
import login from '../pages/login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'frontEnd',
    component: frontEnd,
    redirect: 'home',
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../pages/frontEnd/home'),
      },
      {
        name: 'test1',
        path: 'test1',
        component: () => import(/* webpackChunkName: "test1" */ '../pages/frontEnd/test1'),
      },
      // {
      //   name: 'test2',
      //   path: 'test2',
      //   component: () => import(/* webpackChunkName: "test2" */ '../pages/frontEnd/test2'),
      // },
      {
        name: 'test3',
        path: 'test3',
        beforeEnter(to, from, next) {
          console.log('beforeEnter');
          next();
        },
        component: () => import(/* webpackChunkName: "test3" */ '../pages/frontEnd/test3'),
      },
      {
        name: 'myArticle',
        path: 'article',
        component: () => import(/* webpackChunkName: "article" */ '../pages/frontEnd/article'),
      },
      {
        name: 'articleDetail',
        path: 'article/:id',
        component: () => import(/* webpackChunkName: "article" */ '../pages/frontEnd/article/detail.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/admin/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
];

const router = new VueRouter({
  routes,
});
// 设置全局守卫
router.beforeEach((to, from, next) => {
  if (to.name === 'admin') {
    // 判断是否有token
    const token = sessionStorage.getItem('userToken');
    if (token) {
      next();
    } else {
      next({ replace: false, name: 'login' });
    }
  }
  next();
});
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve');
  next();
});
// eslint-disable-next-line
router.afterEach((to, from) => {
  console.log('afterEach');
});
export default router;
