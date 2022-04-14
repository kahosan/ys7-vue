import { createRouter, createWebHistory } from 'vue-router';
import handleCookie from './utils/cookie';

const layoutMap = [];

const routes = [
  {
    path: '/',
    name: 'index',
    meta: { requiresAuth: true },
    component: () => import('@pages/index.vue'),
    children: [
      {
        path: 'rootcloud',
        name: 'rootcloud',
        meta: { requiresAuth: true },
        component: () => import('@pages/root-cloud.vue'),
      },
      {
        path: 'ys7',
        name: 'ys7',
        meta: { requiresAuth: true },
        component: () => import('@pages/ys7.vue'),
      },
      {
        path: 'ys7/:deviceSerial',
        name: 'deviceIndex',
        meta: { requiresAuth: true },
        component: () => import('@components/camera-control.vue'),
      },
    ],
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
    route.push('/ys7');
  }

  if (to.meta.requiresAuth && !handleCookie.get('token')) {
    console.log('token not found');
    route.push('/login');
  }
});
