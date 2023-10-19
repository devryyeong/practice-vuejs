const app = Vue.createApp({
  data() {
    return {
      assignmentValue: '',
      assignments: [],
      isVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.isVisible ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addAssignment() {
      this.assignments.push(this.assignmentValue);
    },
    toggleList() {
      this.isVisible = !this.isVisible;
    }
  }
});

app.mount('#assignment');