<template>
  <div class="columns">
    <a href="/" class="column">Home</a>
    <input v-model.lazy="login" placeholder="edit me">
    <br>
    <h1 class="column">{{ login }}'s most use language:</h1>
    <h1>{{ mostUsedLanguage }}</h1>
  </div>
</template>

<script>
import { USER_LANGUAGE_QUERY } from 'graphql.js';

export default {
  name: 'Languages',
  data() {
    return {
      login: 'wesbos',
      allLanguages: []
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
          login: this.login
        };
      }
    }
  }
};
</script>

<style lang="scss">
</style>
