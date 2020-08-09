import Vue from 'vue'

export default Vue.component('post', {
  template: '<div><p>{{ post.text }}</p><p>{{ post.created_at }}</p></div>',
  props: ['post']
})
