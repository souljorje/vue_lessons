export default {
  getNames(state) {
    const names = Object.keys(state.defaultData);
    return names;
  },
};
