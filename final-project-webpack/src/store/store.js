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
      BMW: {
        value: 110,
      },
      Google: {
        value: 190,
      },
      Apple: {
        value: 230,
      },
      Gazprom: {
        value: 140,
      },
    },
    transformedData: null,
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
