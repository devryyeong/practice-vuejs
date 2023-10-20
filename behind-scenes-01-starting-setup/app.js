const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
    beforeCreate() {
      console.log("beforeCreate");
    },
    created() {
      console.log("created");
    },
    brforeMount() {
      console.log("brforeMount");
    },
    mounted() {
      console.log("mounted");
    },
    brforeUpdate() {
      console.log("beforeUpdate");
    },
    updated() {
      console.log("updated");
    },
    beforeUnmount() {
      console.log("beforeUnmount");
    },
    unmounted() {
      console.log("unmounted");
    }
  },
});

app.mount('#app');


/**
 * [Javascript Proxy에 대해 알아보자]
 * 개요: Javascript는 기본적으로 반응형이 아니다.
 */
const data = {
  message: 'Hello!',
  longMessage: "I am brave, I am bruised. I am who I'm meant to be, ",
};

// setter 함수를 정의해서 proxy에 새 프로퍼티가 설정될 때마다 트리거된다.
const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + 'this is me'
    }
    target.message = value;

    console.log(target);
    console.log(key);
    console.log(value);
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'HELLO!';

console.log(proxy.longMessage);