<template>
  <div class="form-group">
    <label for="id_text">Text</label>
    <input type="text" name="text" id="id_text" class="form-control"
        minlength="10" required="required" 
        v-model="post.text">
    <button @click="addPost">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  data: () => ({
    post: {}
  }),
  methods: {
    addPost () {
      this.post.created_at = '10 Aug 2020'
      this.$emit('addPost', this.post)
    }
  }
}
</script>
