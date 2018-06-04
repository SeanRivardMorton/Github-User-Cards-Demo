import Vue from 'vue/dist/vue.esm';
import BestGuess from './components/bestguess.vue';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import 'bulma/css/bulma.css';

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  // URL to graphql server, you should use an absolute URL here
  uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const token = 'cc1c86671fc902f7fd85373c3e6444b2846009cd';

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null
    }
  };
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

// Install the vue plugin
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('bestGuess'));
  const bestGuess = new Vue({
    el: 'bestGuess',
    provide: apolloProvider.provide(),
    template: '<BestGuess/>',
    components: { BestGuess }
  });
});
