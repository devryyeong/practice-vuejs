const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "", // 실제로 출력되는 이름
      fullname: "",
    };
  },
  watch: {
    // 자동으로 name을 인수로 가져옴
    name(newValue, oldValue) {
      if (value === "") {
        this.fullname = "";
      } else {
        this.fullname = newValue + " is my name";
      }
    },
    counter(value) {
      const that = this;
      if (value > 50) {
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    }
  },
  // computed: 함수처럼 사용하는 것이 아니라 data property처럼 사용
  computed: {
    // fullname() {
    //   console.log('Running again...');
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + '' + 'Lee';
    // }
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
        alert("value is 0!");
      }
    },
    setName(event, lastName) {
      this.name = lastName + " " + event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
