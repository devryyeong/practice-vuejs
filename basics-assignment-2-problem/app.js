const app = Vue.createApp({
  data() {
    return {
      value: '',
      output: '', // 실제 출력
    };
  },
  methods: {
    showAlert() {
      alert('hello alert');
    },
    setValue(event) {
      this.value = event.target.value;
    },
    confirmInput() {
      this.output = this.value;
    },
  },
});

app.mount('#assignment');
