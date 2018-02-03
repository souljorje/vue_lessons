new Vue({
  el: '#exercise',
  data: {
    currentClass: 'highlight',
    needSomeBlue: true,
    customClasses: '',
    defaultClass: 'default',
    needSomeLarge: false,
    size: 50,
    progress: 0,
    singleClass: ''
  },
  methods: {
    startEffect: function() {
      setInterval(() => {
        this.currentClass === 'highlight' ? this.currentClass = 'shrink' : this.currentClass = 'highlight'
      }, 1000)
    },
    setCustomClasses: function(event) {
      this.customClasses = event.target.value.split(',').join(' ')
    },
    startProgress: function() {
      this.interval = setInterval(() => {
        if (this.progress >= 300) {
          clearInterval(this.interval);
        }
        this.progress += Math.random() * 5;
      }, 100);
    },
    makeLarger: function(event) {
      this.needSomeLarge = event.target.value === 'true'
    }
  }
});
