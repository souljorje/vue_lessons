import './vue.js'

new Vue({
	el: '#app',
  data: {
  	title: 'Hello World!'
  },
  methods: {
  	changeTitle: function(event) {
    	this.title = event.target.value;
    },
    sayHello: function() {
      return 'Hello!';
    }
  }
})