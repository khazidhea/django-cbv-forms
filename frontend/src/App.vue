<template>
  <div id="app">
    {{ username }}
    <PostForm @addPost="addPost"></PostForm>
    <Post v-for="post in posts" :post="post" :key="post.id"></Post>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Post from '@/components/Post.vue'
import PostForm from '@/components/PostForm.vue'

export default {
  name: 'App',
  components: {
    Post, PostForm
  },
  data: () => ({
    posts: []
  }),
  computed: {
    ...mapState(['username'])
  },
  methods: {
    addPost (post) {
      this.$store.commit('setUsername', post.text)
      fetch('http://localhost:8000/api/posts/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post)
      }).then(response => {
        if (response.status == 201) {
          this.posts.unshift(post)
        }
      })
    }
  },
  created () {
    fetch('http://localhost:8000/api/posts/')
      .then(response => response.json())
      .then(data => this.posts = data)
  }
}
</script>
