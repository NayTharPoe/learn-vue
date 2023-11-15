import Assignment from './Assignment.js';
import AssignmentTags from './AssignmentTags.js';

export default {
  components: { Assignment, AssignmentTags },
  template: `
  <section v-show="assignments.length">
  <h3>{{ title }}</h3>
    <assignment-tags
    :initial-tags="assignments.map((a) => a.tag)"
    @change="currentTag = $event"
    v-model:currentTag = "currentTag"/
    />
  <ul>
  <assignment
  v-for="assignment in filteredAssignments"
  :key="assignment.id"
  :assignment="assignment"
></assignment>
  </ul>
</section>`,

  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: 'all',
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments;
      }

      return this.assignments.filter((assign) => assign.tag === this.currentTag);
    },
    tags() {
      return ['all', ...new Set(this.assignments.map((assign) => assign.tag))];
    },
  },
};
