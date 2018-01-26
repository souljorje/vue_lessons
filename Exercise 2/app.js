new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    alert: function () {
      alert('Button was clicked!')
    },
    input: function (event) {
      this.value = event.target.value
    }
  }
});