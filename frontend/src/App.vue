<template>
  <div id="app">
    <Post v-for="post in posts" :post="post" :key="post.id"></Post>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'App',
  components: {
    Post
  },
  data: () => ({
    posts: [
      {text: 'First post', created_at: '10 Aug 2020'},
      {text: 'Second post', created_at: '10 Aug 2020'},
    ]
  })
}
</script>
