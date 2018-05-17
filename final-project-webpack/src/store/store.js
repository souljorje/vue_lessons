import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import modules from './modules/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentData: {
      features: {
        Apple: {
          value: 230,
        },
        BMW: {
          value: 110,
        },
        Gazprom: {
          value: 140,
        },
        Google: {
          value: 190,
        },
      },
      day: 1,
    },
    currentData: {
    },
    userData: {
      stocks: {},
      funds: '-',
    },
  },
  getters,
  mutations,
  actions,
  modules,
});
