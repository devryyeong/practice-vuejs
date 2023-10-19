const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragrapthToggle: true,
      inputBGColor: '',
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        hidden: this.paragrapthToggle,
        visible: !this.paragrapthToggle
      }
    }
  },
  methods: {
    setToggle() {
      this.paragrapthToggle = !this.paragrapthToggle;
    }
  },
});

app.mount("#assignment");
