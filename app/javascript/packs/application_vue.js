import Vue from 'vue/dist/vue.esm';
import App from './components/GitHubBrowser.vue';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import 'bulma/css/bulma.css';
import Vuex from 'vuex';

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  // URL to graphql server, you should use an absolute URL here
  uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const element = document.getElementById('Github_Token');
  const token = JSON.parse(element.getAttribute('data'));

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
Vue.use(VueApollo, Vuex);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'));
  const app = new Vue({
    el: 'app',
    provide: apolloProvider.provide(),
    template: '<App/>',
    components: { App }
  });
});
