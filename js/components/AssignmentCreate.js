export default {
  template: `
    <form @submit.prevent="add">
      <input type="text" placeholder="add new assignment...." v-model="newAssignment">
      <button>Add</button>
    </form>
  `,

  data() {
    return {
      newAssignment: '',
    };
  },

  methods: {
    add() {
      this.$emit('adding', this.newAssignment);
      this.newAssignment = '';
    },
  },
};
