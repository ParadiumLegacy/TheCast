var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'gnitisiv rof uoy knahT'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})