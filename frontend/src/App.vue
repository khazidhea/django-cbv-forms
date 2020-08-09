<template>
  <div id="app">
    <PostForm @addPost="addPost"></PostForm>
    <Post v-for="post in posts" :post="post" :key="post.id"></Post>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import PostForm from '@/components/PostForm.vue'

export default {
  name: 'App',
  components: {
    Post, PostForm
  },
  data: () => ({
    posts: [
      {text: 'First post', created_at: '10 Aug 2020'},
      {text: 'Second post', created_at: '10 Aug 2020'},
    ]
  }),
  methods: {
    addPost (post) {
      this.posts.unshift(post)
    }
  }
}
</script>
