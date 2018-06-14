<template>
  <div class="content">
    <div class="columns">
      <h2 class="column">Start the search</h2>
      <span class="tag is-success column is-narrow">{{ mostUsedLanguage }}</span>
    </div>
    <input v-model.lazy="input" class="input" type="text" :placeholder="placeholder">
  </div>
</template>

<script>
import { USER_LANGUAGE_QUERY } from 'graphql.js';

export default {
  data() {
    return {
      placeholder: 'wesbos',
      input: 'wesbos',
      message: ''
    };
  },
  methods: {
    findMode(array) {
      let counted = array.reduce((acc, curr) => {
        if (curr in acc) {
          acc[curr]++;
        } else {
          acc[curr] = 1;
        }

        return acc;
      }, {});

      let mode = Object.keys(counted).reduce(
        (a, b) => (counted[a] > counted[b] ? a : b)
      );

      return mode;
    }
  },
  computed: {
    mostUsedLanguage() {
      let lang = [];
      if (this.user) {
        let repositories = this.user.repositories.edges;
        repositories.forEach(repo => {
          repo.node.languages.edges.forEach(language => {
            lang.push(language.node.name);
          });
        });
        lang = this.findMode(lang);
      }
      return lang;
    }
  },
  apollo: {
    user: {
      query: USER_LANGUAGE_QUERY,
      variables() {
        return {
          login: this.input
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
