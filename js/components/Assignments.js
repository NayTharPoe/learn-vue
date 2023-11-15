import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
  <section>
  <assignment-list :assignments="filter.progress" title="In progress"></assignment-list>
  <assignment-list :assignments="filter.completed" title="Completed"></assignment-list>

    <assignment-create @adding="add"></assignment-create>
  </section>
  `,

  data() {
    return {
      assignments: [],

      newAssignment: '',
    };
  },

  computed: {
    filter() {
      return {
        progress: this.assignments.filter((assign) => !assign.completed),
        completed: this.assignments.filter((assign) => assign.completed),
      };
    },
  },

  created() {
    return fetch('http://localhost:3000/assignments').then((response) => {
      return response.json()
    }).then((assignments) => this.assignments = assignments)
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });

      this.newAssignment = '';
    },
  },
};
