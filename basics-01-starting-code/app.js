// vue 앱을 생성하는 전역 객체 사용
const app = Vue.createApp({
  data() {
    // 항상 객체만을 반환
    return {
      courseGoalA: 'Finish',
      courseGoalB: 'Hello',
      vueLink: 'https://vuejs.org/'
    }
  },
  methods: {
    // 각종 필요한 함수들을 여기에 정의 (꼭 함수여야만 함)
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA
      } else {
        return this.courseGoalB
      }
    }
  }
});

app.mount("#user-goal")