import { createWebHistory, createRouter } from 'vue-router';

import PostsView from './views/PostsView.vue';
import PostView from './views/PostView.vue';

const routes = [
  {
    path: '/',
    name: 'posts',
    component: PostsView
  },
  {
    path: '/:page',
    name: 'posts-page',
    component: PostsView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
