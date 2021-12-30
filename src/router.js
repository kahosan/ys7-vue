import { createRouter, createWebHistory } from 'vue-router';
import handleCookie from './utils/cookie';

const layoutMap = [];

const routes = [
  {
    path: '/',
    name: 'index',
    meta: { requiresAuth: true },
    component: () => import('@pages/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@pages/login.vue'),
  },
];

const route = new createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default route;

route.beforeEach((to, from) => {
  if (to.name === 'login' && handleCookie.get('token')) {
    route.push('/');
  } else if (to.meta.requiresAuth && !handleCookie.get('token')) {
    route.push('/login');
  }
});
