<template>
  <div class="columns is-centered">
    <div class="column is-8">
      <div class="columns is-multiline">
        <div class="column is-12 container has-text-centered content">
          <h1>THE GITHUB LANGUAGE EDUCATED GUESSTIMATOR</h1>
          <p>(take it with a grain of salt)</p>
        </div>
        <div class="column is-12 container has-text-left content">
          <git-hub-user-search></git-hub-user-search>
        </div>
        <div class="column is-12 has-text-left content">
          <git-hub-user-card></git-hub-user-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { USER_LANGUAGE_QUERY } from 'graphql.js';
import GitHubUserSearch from '../components/GitHubBrowser/GitHubUserSearch.vue';
import GitHubUserCard from '../components/GitHubBrowser/GitHubUserCard.vue';

export default {
  name: 'Languages',
  data() {
    return {
      login: 'wesbos',
      allLanguages: []
    };
  },
  components: {
    GitHubUserSearch,
    GitHubUserCard
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

<style lang="scss" scoped>
.columns {
  padding: 50px;
}
.container {
  padding: 1rem;
  background-color: #fdfdf3;
  box-shadow: 0px 2px 20px 0px #0000006b;
}
</style>

