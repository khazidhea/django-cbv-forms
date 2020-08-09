<template>
  <div>
    <p>{{ post.text }}</p>
    <p>{{ post.created_at }}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post']
}
</script>
