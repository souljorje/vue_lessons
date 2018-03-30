import Vue from 'vue'
import App from './App.vue'

export const events = new Vue({
  methods: {
    checkStatus(status) {
      this.$emit('checkStatus', status);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
