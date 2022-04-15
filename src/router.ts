import Vue from 'vue';
import Router from 'vue-router';
import LocalStorageService from '@/services/localStorage/LocalStorageService';
import store from '@/store';
import * as Pages from './pages';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Pages.Home,
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Pages.Auth,
      beforeEnter: (to, from, next) => {
        if (LocalStorageService.isAuth) {
          next('/');
        }
        next();
      },
    },
    {
      path: '/claims',
      name: 'Claims',
      component: Pages.Claims,
    },
    {
      path: '/control',
      name: 'Control',
      component: Pages.Control,
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Pages.Reports,
    },
    {
      path: '/seizure',
      name: 'Seizure',
      component: Pages.Seizure,
    },
    {
      path: '/inspection',
      name: 'InspectionForm',
      component: Pages.InspectionForm,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Auth') {
    if (LocalStorageService.isAuth) {
      store.commit('auth/toggleAuth', true);
      next();
    } else {
      next({ name: 'Auth' });
    }
  } else {
    next();
  }
});

export default router;
