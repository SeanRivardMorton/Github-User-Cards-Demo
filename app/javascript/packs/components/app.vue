
<template>
  <div id='app'>
    <div v-for="user in users" :key="user.id" class="gituser__card">
      <img class="gituser__card__img" :src="user.avatar_url" alt="">
      <div class="gituser__card__description">
        <strong>{{ user.name }}</strong>
        <p class="">{{ user.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        users: [
          {
            name: 'horse_js',
            description: {
              text: `as much as I want to be, I am not`,
              link: `www.google.com`
            },
            avatar_url: 'https://pbs.twimg.com/profile_images/1844491454/horse-js_400x400.png'
          },
          {
            name: 'horse_js',
            description: 'as much as I want to be, I am not @horse_js',
            avatar_url: 'https://pbs.twimg.com/profile_images/1844491454/horse-js_400x400.png'
          },
          {
            name: 'horse_js',
            description: 'as much as I want to be, I am not @horse_js',
            avatar_url: 'https://pbs.twimg.com/profile_images/1844491454/horse-js_400x400.png'
          },
          {
            name: 'horse_js',
            description: 'as much as I want to be, I am not @horse_js',
            avatar_url: 'https://pbs.twimg.com/profile_images/1844491454/horse-js_400x400.png'
          }
       ]
      }
    },
     mounted() {
       console.log('asdfasdf')
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
  height: 4rem;
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
</style>