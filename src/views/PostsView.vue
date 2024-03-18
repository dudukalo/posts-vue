<script setup>
  import { computed, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import router from '@/router';
  import { useStore } from 'vuex';

  import PostsList from '../components/PostsList.vue';
  import Pagination from '../components/Pagination.vue';
  import Preloader from '../components/Preloader.vue';

  const store = useStore();

  store.dispatch('GET_POSTS');

  const route = useRoute();
  const page = ref(route.params.page);

  const postsPerPage=8;
  
  const pagePosts = computed(() => {
    const correctPage = +page.value > 0 ? +page.value - 1 : 0;
    const offset = (correctPage * postsPerPage) % store.getters.POSTS.length;
    return store.getters.POSTS.slice(offset, offset + postsPerPage);
  });

  const pagesCount = computed(() => Math.ceil(store.getters.POSTS.length / postsPerPage));

  const navigate = (index) =>{
    page.value = index;
    router.push(`/${index}`);
  }

</script>

<template>
  <main class='page'>
      <section>
        <div class='container'>
          <Preloader v-if='store.getters.POSTS_LOADING !== "loaded"' />
          <h1 class='title'>Статьи {{ page }}</h1>
          <PostsList class='posts-list' :posts='pagePosts'/> 
          <Pagination
            :pages-count='pagesCount'
            @navigate='navigate'
          />
        </div>
      </section>
    </main>
</template>

<style scoped>
  .page {
    background-color: var(--bg-gray-color);
    min-height: 100vh;
  }

  .container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 60px 15px;
  }

  .title {
    margin: 0 0 40px 0;
  }

  .posts-list {
    margin-bottom: 30px;
  }
</style>