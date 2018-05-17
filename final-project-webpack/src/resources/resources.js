import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = 'https://tradeapp-db8bb.firebaseio.com/';

export const StocksData = Vue.resource('currentData.json');
export const UserData = Vue.resource('userData.json');
