export default {
  calculateData(state) {
    const getRandom = (min, max) => (Math.random() * (max - min)) + min;
    const copiedData = { ...state.defaultData };
    const names = Object.keys(copiedData);
    names.forEach((name) => {
      if (name === 'day') return;
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
};
