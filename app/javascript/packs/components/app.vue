
<template>
  <div id='app'>
    <a href="/gitusers">Gitusers</a>
    <a href="/">Home</a>
    <div v-for="user in users" :key="user.id" class="gituser__card">
      <img class="gituser__card__img" :src="user.avatar_url" alt="">
      <div class="gituser__card__description">
        <span>
          <strong>{{ user.name }}</strong>
          <span class="gituser__card__time"> 7 days </span>
        </span>
        <!-- <p v-html="user.description" v-linkified:options="{ className: 'sdfasdfasasdf', formatHref }"></p> -->
        <p v-html="user.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
  // import Vue from 'vue/dist/vue.esm';
  // import linkify from 'vue-linkify'
  // import linkifyjs from 'linkifyjs'
  // Vue.directive('linkified', linkify)

  export default {
    data: function () {
      return {
        users: [
          {
            name: 'horse_js',
            description: 'as much as I want to be, I am not <a href="www.google.com">test</a>',
            avatar_url: 'https://pbs.twimg.com/profile_images/1844491454/horse-js_400x400.png'
          },
          {
            name: 'horse_js',
            description: 'as much as I want to be, I am not #horse_js',
            avatar_url: 'https://pbs.twimg.com/profile_images/1844491454/horse-js_400x400.png'
          },
          {
            name: 'horse_js',
            description: 'as much as I want to be, I am not sean@axcf.com',
            avatar_url: 'https://pbs.twimg.com/profile_images/1844491454/horse-js_400x400.png'
          },
          {
            name: 'horse_js',
            description: 'as much as I want to be, I am not @horse_js',
            avatar_url: 'https://pbs.twimg.com/profile_images/1844491454/horse-js_400x400.png'
          }
       ]
      }
    }
  }
</script>

<style scoped lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
}

.gituser__card {
  padding: 1.5rem;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 1px 0px #dcd9d9;
  display: flex;
}

.gituser__card__img {
  height: 3rem;
  margin: auto;
}

.gituser__card__description {
  width: 100%;
  padding: 0 0 0 1rem;
  margin: 0 auto;
  p {
    margin: 1px 0 0 0;
  }
}

.gituser__card__time {
  float: right;
  font-weight: 100;
  font-size: 0.8rem;
  color: lighten($color: black, $amount: 60%);
}
</style>