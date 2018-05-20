import resources from '../resources/index';

export default {
  async trade({ state, dispatch }, payload) {
    debugger;
    try {
      await dispatch('makeAction', payload);
      const updateData = await dispatch('updateUserData');
      return updateData;
    } catch (error) {
      throw new Error(error);
    }
      // .then(() => {
      //   dispatch('updateUserData');
      // })
      // .catch((message) => {
      //   throw new Error(message);
      // });
  },
  getStocksData({ state, commit }) {
    return resources.getStocksData()
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Server responded with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const currentDay = localStorage.getItem('day');
        if (!data) {
          localStorage.setItem('day', state.currentData.day);
        } else if (data.day !== currentDay) {
          const dayToSet = Math.max(data.day, currentDay);
          state.currentData.day = dayToSet;
          localStorage.setItem('day', dayToSet);
        } else {
          state.currentData = data;
          return data;
        }
        commit('calculateData');
        return state.currentData;
      });
  },
  updateStocksData({ state }) {
    resources.updateStocksData(state.currentData)
      .then(response => response, error => new Error(error));
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
  saveData({ state }) {
    resources.saveData({
      currentData: state.currentData,
      userData: state.userData,
    });
  },
  loadData({ state, dispatch }) {
    resources.loadData()
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Server responded with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        state.currentData = data.currentData;
        state.userData = data.userData;
        return data;
      })
      .then(() => {
        dispatch('updateStocksData');
        dispatch('updateUserData');
      });
  },
  makeAction({ commit, state }, payload) {
    const result = new Promise((resolve, reject) => {
      if (typeof payload.amount !== 'number') {
        return reject('Use only numbers!');
      }
      if (!state.userData.stocks) {
        state.userData.stocks = {};
      }
      const type = payload.type;
      const stock = state.currentData.features[payload.name];
      const price = stock[type] * payload.amount;
      const args = {
        name: payload.name,
        amount: payload.amount,
        price,
      };
      commit(type, args);
      return resolve(true);
    });
    return result;
  },
  newDay({ dispatch }) {
    const currentDay = +localStorage.getItem('day') || 0;
    localStorage.setItem('day', currentDay + 1);
    dispatch('getStocksData')
      .then(() => {
        dispatch('updateStocksData');
      });
  },
};
