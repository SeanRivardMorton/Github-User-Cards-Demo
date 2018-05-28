import Vue from 'vue/dist/vue.esm';
import App from './components/bestguess.vue';

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'));
  const app = new Vue({
    el: 'app',
    template: '<App/>',
    components: { App }
  });
});
