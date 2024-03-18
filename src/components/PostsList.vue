<script setup>
  import Post from './Post.vue';

  let props = defineProps({
    posts: Array,
  });

</script>

<template>
  <ul class="list">
    <li v-for='post in posts' :key='post.id'>
      <Post :post='post' />
    </li>
  </ul>
</template>

<style scoped>
  .list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
</style>