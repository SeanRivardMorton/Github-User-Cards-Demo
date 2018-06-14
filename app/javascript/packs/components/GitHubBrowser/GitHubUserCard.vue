<template>
  <section>
    <div v-for="user in users" :key="user.id" class="gituser__card">
      <img class="gituser__card__img" :src="user.avatar_url" alt="">
      <div class="gituser__card__description">
        <h1>{{ user.name }}</h1>
        <span class="gituser__card__time"> 7 days </span>
        <p v-html="user.description"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      placeholder: 'wesbos',
      users: [
        {
          name: 'horse_js',
          description:
            'as much as I want to be, I am not <a href="www.google.com">@horse_js</a>',
          avatar_url:
            'https://pbs.twimg.com/profile_images/1844491454/horse-js_400x400.png'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.gituser__card {
  padding: 1.5rem;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 1px 0px #dcd9d9;
  display: flex;
  box-shadow: 0px 2px 20px 0px #0000006b;
  border-radius: 1px;
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
  h1 {
    font-size: 1rem;
    display: contents;
  }
}

.gituser__card__time {
  float: right;
  font-weight: 100;
  font-size: 0.8rem;
  color: lighten($color: black, $amount: 60%);
}
</style>
