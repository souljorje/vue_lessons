import resources from '../resources/index';

export default {
  trade({ state, dispatch }, payload) {
    dispatch('makeAction', payload)
      .then(() => {
        dispatch('updateUserData');
      })
      .catch((message) => {
        throw new Error(message);
      });
  },
  getStocksData({ state, commit }) {
    debugger
    return resources.getStocksData()
      .then((response) => {
        if (response.status !== 200) {
          commit('calculateData');
          return state.currentData;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        state.currentData = data;
      });
  },
  updateStocksData({ state }) {
    resources.updateUserData(state.currentData);
  },
  getUserData({ state }) {
    return resources.getUserData()
      .then(response => response.json())
      .then((data) => {
        state.userData = data;
      });
  },
  updateUserData({ state }) {
    resources.updateUserData(state.userData);
  },
  makeAction({ commit, state }, payload) {
    const result = new Promise((resolve, reject) => {
      if (typeof payload.amount !== 'number') {
        reject('Use only numbers!');
      }
      if (!state.userData.stocks) {
        state.userData.stocks = {};
      }
      const type = payload.type;
      const stock = state.currentData[payload.name];
      const price = stock[type] * payload.amount;
      const args = {
        name: payload.name,
        amount: payload.amount,
        price,
      };
      commit(type, args);
      resolve();
    });
    return result;
  },
  newDay({ commit }) {
    const currentDay = +localStorage.getItem('day');
    localStorage.setItem('day', currentDay + 1);
    commit('calculateData');
  },
};
