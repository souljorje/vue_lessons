import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      amount: {},
    };
  },
  computed: {
    stocksData() {
      return this.$store.state.currentData.features;
    },
    ...mapGetters(['getNames']),
  },
  watch: {
    getNames() {
      const amount = this.$store.getters.getNames.reduce((result, item) => {
        const immutable = { ...result };
        immutable[item] = null;
        return immutable;
      }, {});
      this.amount = amount;
    },
  },
};
