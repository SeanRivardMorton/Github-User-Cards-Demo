import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    MusicianStore
  }
});

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment(state) {
//       state.count++;
//     }
//   },
//   getters: {},
//   actions: {}
// });
