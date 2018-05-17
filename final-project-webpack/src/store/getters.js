export default {
  getNames(state) {
    const names = Object.keys(state.currentData);
    return names;
  },
};
