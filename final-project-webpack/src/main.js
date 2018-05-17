
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VMenu,
  VForm,
  VTextField,
  VCard,
  VAlert,
  transitions,
} from 'vuetify';

import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import store from './store/store';
import './stylus/main.styl';

Vue.use(VueResource);
Vue.http.options.root = 'https://tradeapp-db8bb.firebaseio.com/';
Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VMenu,
    VForm,
    VTextField,
    VCard,
    VAlert,
    transitions,
  },
  theme: {
    primary: '#A5D6A7',
    secondary: '#E8F5E9',
    accent: '#4CAF50',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
