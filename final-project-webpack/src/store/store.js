import Vue from 'vue';
import Vuex from 'vuex';
import header from './modules/header';

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
      stocks: {
      },
      funds: 10000,
    },
  },
  getters: {
    getNames(state) {
      const names = Object.keys(state.defaultData);
      return names;
    },
  },
  mutations: {
    calculateData(state) {
      const getRandom = (min, max) => (Math.random() * (max - min)) + min;
      const copiedData = { ...state.defaultData };
      const names = Object.keys(copiedData);
      names.forEach((name) => {
        copiedData[name].buy = Math.round(copiedData[name].value * getRandom(0.5, 1.5));
        copiedData[name].sell = Math.round(copiedData[name].value * getRandom(0.5, 1.5));
      });
      state.transformedData = copiedData;
    },
    buy(state, payload) {
      const userStocks = state.userData.stocks;
      const userFunds = state.userData.funds;
      const stockPrice = state.transformedData[payload.name].buy;
      let { amount } = payload;
      let { price } = payload;
      if (stockPrice * amount >= userFunds) {
        amount = Math.floor(userFunds / stockPrice);
        price = stockPrice * amount;
      }
      if (userStocks[payload.name]) {
        userStocks[payload.name] += amount;
      } else {
        userStocks[payload.name] = amount;
      }
      state.userData.funds -= price;
    },
    sell(state, payload) {
      const userStocks = state.userData.stocks;
      const currentAmount = userStocks[payload.name];
      if (currentAmount && currentAmount > 0) {
        if (currentAmount < payload.amount) {
          userStocks[payload.name] = 0;
          state.userData.funds += state.transformedData[payload.name].sell * payload.amount;
        } else {
          userStocks[payload.name] -= payload.amount;
          state.userData.funds += payload.price;
        }
      }
    },
  },
  actions: {
    trade({ commit, state }, payload) {
      const type = payload.type;
      const stock = state.transformedData[payload.name];
      const price = stock[type] * payload.amount;
      const args = {
        name: payload.name,
        amount: payload.amount,
        price,
      };
      commit(type, args);
    },
  },
  modules: {
    header,
  },
});
