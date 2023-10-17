const app = Vue.createApp({
  data() {
    return {
      myName: "thisisme",
      myAge: 20,
      imageLink: 'https://img.freepik.com/free-photo/abstract-image-torn-paper-style_53876-129903.jpg?w=826&t=st=1697520052~exp=1697520652~hmac=bf494e94064ff80d0735128c747e4ff5a7fc8be0f5d3cc00fa85abf4866453c3'
    };
  },
  methods: {
    calculateAge() {
      return this.myAge + 5;
    },
    generateRandomNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment')