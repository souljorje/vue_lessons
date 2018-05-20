import { mapActions } from 'vuex';

export default {
  methods: {
    endDay() {
      this.$store.dispatch('newDay');
    },
    ...mapActions(['saveData', 'loadData']),
  },
};
