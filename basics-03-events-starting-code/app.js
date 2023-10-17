const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '' // 실제로 출력되는 이름
    };
  },
  methods: {
    add(num) {
      // 메서드를 사용해 동적으로 출력하는 것이 아니라 이벤트가 발생하면 실행되도록 하려면 값을 반환해줄 필요 없음
      this.counter = this.counter + num;
    },
    reduce() {
      if (this.counter > 0) {
        this.counter--;
      } else {
        alert('value is 0!')
      }
    },
    setName(event, lastName) {
      this.name = lastName + ' ' + event.target.value;
    },
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');