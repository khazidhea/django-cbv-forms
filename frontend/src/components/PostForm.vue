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
      this.$emit('addPost', this.post)
    }
  }
}
</script>
