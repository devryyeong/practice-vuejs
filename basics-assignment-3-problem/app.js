const app = Vue.createApp({
  data() {
    return {
      result: 0,
      text: 'Press the button to make 37'
    }
  },
  watch: {
    result() {
      console.log('Watcher executing...');
      const that = this;
      setTimeout(function () {
        that.result = 0;
      }, 5000);
    }
  },
  computed: {
    result() {
      if (this.result < 37) {
        return 'Not there yet.';
      } else if (this.result > 37) {
        return 'Too much!';
      } else {
        return this.result;
      }
    }
  },
  methods: {
    addFive() {
      this.result += 5;
    },
    addOne() {
      this.result++;
    },
  },
});

app.mount('#assignment');