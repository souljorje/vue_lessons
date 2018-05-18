import { StocksData, UserData, SavedData } from './resources';

export default {
  getStocksData() {
    return StocksData.get();
  },
  updateStocksData(data) {
    return StocksData.update(data);
  },
  getUserData() {
    return UserData.get();
  },
  updateUserData(data) {
    return UserData.update(data);
  },
  loadData() {
    return SavedData.get();
  },
  saveData(data) {
    return SavedData.update(data);
  },
};
