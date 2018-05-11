import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import { routes } from './routes.js';
import { store } from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   }
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   }
  //   return {
  //     x: 0,
  //     y: 700,
  //   }
  // }
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
