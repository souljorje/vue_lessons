import Vue from 'vue'
import App from './App.vue'

export const events = new Vue({
  methods: {
    checkStatus(data) {
      this.$emit('checkStatus', data);
    },
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
