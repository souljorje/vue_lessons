import Vue from 'vue'
import App from './App.vue'

export const events = new Vue({
  methods: {
    addQuote(text) {
      this.$emit('quoteWritten', text);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
