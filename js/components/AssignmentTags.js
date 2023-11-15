export default {
  template: `
  <div>
  <button v-for="tag in tags" :class="{active: currentTag === tag}" @click="$emit('update:currentTag', tag)">{{tag}}</button>
  </div>
  `,

  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ['all', ...new Set(this.initialTags)];
    },
  },
};
