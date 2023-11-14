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
      assignments: [
        {
          name: 'Design a Vue.js App',
          completed: false,
          id: 1,
          tag: 'Design',
        },
        {
          name: 'Build a Vue.js App',
          completed: false,
          id: 2,
          tag: 'Build',
        },
        {
          name: 'Deploy a Vue.js App',
          completed: false,
          id: 3,
          tag: 'Build'
        },
      ],

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
