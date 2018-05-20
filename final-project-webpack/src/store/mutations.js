export default {
  calculateData(state) {
    const getRandom = (min, max) => (Math.random() * (max - min)) + min;
    const copiedData = { ...state.currentData };
    const names = Object.keys(copiedData.features);
    names.forEach((name) => {
      const defaultValue = copiedData.features[name].value;
      copiedData.features[name].buy = Math.round(defaultValue * getRandom(0.5, 1.5));
      copiedData.features[name].sell = Math.round(defaultValue * getRandom(0.5, 1.5));
    });
    state.currentData = copiedData;
  },
  buy(state, payload) {
    const userStocks = state.userData.stocks;
    const userFunds = state.userData.funds;
    const stockPrice = state.currentData.features[payload.name].buy;
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
        state.userData.funds += state.currentData.features[payload.name].sell * payload.amount;
      } else {
        userStocks[payload.name] -= payload.amount;
        state.userData.funds += payload.price;
      }
    }
  },
};
