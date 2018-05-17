import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import modules from './modules/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defaultData: {

    },
    transformedData: {
    },
    userData: {
      stocks: {},
      funds: 10000,
    },
  },
  getters,
  mutations,
  actions,
  modules,
});
