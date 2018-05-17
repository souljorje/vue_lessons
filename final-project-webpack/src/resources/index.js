import { StocksData, UserData } from './resources';

export default {
  getStocksData() {
    return StocksData.get();
  },
  updateStockData(data) {
    return StocksData.put(data);
  },
  getUserData() {
    return UserData.get();
  },
  updateUserData(data) {
    return UserData.update(data);
  },
};
