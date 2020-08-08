Vue.component('post', {
  template: '<div><p>{{ post.text }}</p><p>{{ post.created_at }}</p></div>',
  props: ['post']
})


var app = new Vue({
  el: 'main',
  methods: {
    addPost () {
      const input = document.querySelector('input')
      this.posts.unshift({
        text: input.value,
        created_at: '09 Aug 2020'
      })
      input.value = ''
    }
  },
  data: () => ({
    posts: [
      {
        text: 'First post',
        created_at: '09 Aug 2020'
      },
      {
        text: 'Second post',
        created_at: '09 Aug 2020'
      },
    ]
  })
})
