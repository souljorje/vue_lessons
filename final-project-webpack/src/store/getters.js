export default {
  getNames(state) {
    const names = Object.keys(state.currentData);
    return names;
  },
  hasStocks(state) {
    const values = Object.values(state.userData.stocks);
    const condition = values.length ? Math.max(...Object.values(state.userData.stocks)) < 1 : false;
    return condition;
  },
};
