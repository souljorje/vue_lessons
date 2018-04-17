import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-http-test-a1b2.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  if (request.method === 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => {
      return {messages: response.body}
    }
  })
})
new Vue({
  el: '#app',
  render: h => h(App)
})
