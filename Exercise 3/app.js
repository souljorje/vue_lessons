new Vue({
  el: '#exercise',
  data: {
    value: 0,
    duration: 5000,
  },
  watch: {
    result: function (value) {
      setTimeout(() => {
        this.value = 0
      }, this.duration);
    }
  },
  computed: {
    result: function () {
      return this.value === 37 ? 'done' : 'not there yet'
    }
  },
  methods: {
    setDuration(event) {
      this.duration = event.target.value;
    }
  }
});