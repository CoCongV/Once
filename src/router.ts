import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/netease/home',
      name: 'home',
      component: () => import('@/views/netease/Home.vue'),
    },
    {
      path: '/netease',
      component: () => import('@/views/netease/Home.vue'),
      children: [
        {
          path: 'home',
          name: 'netease',
          component: () => import('@/views/netease/Remommend.vue'),
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/User.vue'),
    },
  ],
});
