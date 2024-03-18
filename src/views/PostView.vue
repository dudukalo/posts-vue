<script setup>
  import { reactive, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';

  import BackBtn from '../components/BackBtn.vue';
  import Preloader from '../components/Preloader.vue';
  import User from '../components/User.vue';

  const store = useStore();
  const router = useRoute();

  store.dispatch('GET_POST', router.params.id);
</script>

<template>
  <main class='page'>
      <section>
        <div class='container'>
          <Preloader v-if='store.getters.POST_LOADING !== "loaded"' />
          <template v-else>
            <BackBtn class='back-btn' />
            <div class='content'>
              <h1 class='title'>
                {{ store.getters.POST.post.title }}
              </h1>
              <p class='text'>
                {{ store.getters.POST.post.body }}
              </p>
            </div>
            <User
              :name='store.getters.POST.user.name'
              :id='store.getters.POST.user.id' 
            />
          </template>
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    max-width: 1200px;
    padding: 60px 15px;
  }

  .back-btn {
    margin-bottom: 30px;
  }

  .content {
    margin-bottom: 30px;
    padding: 30px;
    height: 100%;
    border-radius: 5px;
    background-color: white;
  }

  .title {
    margin: 0 0 40px 0;
  }

  .text {
    margin: 0;
    font-size: 18px;
  }
</style>