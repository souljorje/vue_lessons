export default {
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
  newDay({ commit }) {
    const currentDay = +localStorage.getItem('day');
    localStorage.setItem('day', currentDay + 1);
    commit('calculateData');
  },
};
