import Assignment from './Assignment.js';

export default {
  components: { Assignment },
  template: `
  <section v-show="assignments.length">
  <h3>{{ title }}</h3>
  <div>
  <button v-for="tag in tags" :class="{active: currentTag === tag}" @click="currentTag = tag">{{tag}}</button>
  </div>
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

  data(){
    return {
      currentTag: 'all'
    }
  },

  computed: {
    filteredAssignments() {
      if(this.currentTag === 'all'){
        return this.assignments;
      }

      return this.assignments.filter(assign => assign.tag === this.currentTag)
    },
    tags() {
      return ['all', ...new Set(this.assignments.map((assign) => assign.tag))];
    },
  },
};
