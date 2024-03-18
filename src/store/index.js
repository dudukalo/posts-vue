import Vuex from 'vuex';
import axios from 'axios';

export const store = new Vuex.Store({
  state: {
    posts: {
      isLoading: "idle",
      posts: [],
    },
    post: {
      isLoading: "idle",
      post: {
        post: {},
        user: {}
      },
    }
  },
  getters: {
    POSTS: state => {
      return state.posts.posts;
    },
    POSTS_LOADING: state => {
      return state.posts.isLoading;
    },
    POST: state => {
      return state.post.post;
    },
    POST_LOADING: state => {
      return state.post.isLoading;
    },
  },
  mutations: {
    SET_POSTS: (state, payload) => {
      state.posts.posts = payload;
    },
    SET_POSTS_LOADING: (state, payload) => {
      state.posts.isLoading = payload;
    },
    SET_POST: (state, payload) => {
      state.post.post = payload;
    },
    SET_POST_LOADING: (state, payload) => {
      state.post.isLoading = payload;
    },
  },
  actions: {
    GET_POSTS: async (context) => {
      context.commit('SET_POSTS_LOADING', 'loading');
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      
      context.commit('SET_POSTS', data);
      context.commit('SET_POSTS_LOADING', 'loaded');

    },
    GET_POST: async (context, postId) => {
      context.commit('SET_POST_LOADING', 'loading');
      const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`);
      
      context.commit('SET_POST_LOADING', 'loaded');
      context.commit('SET_POST', {
        post: postResponse.data,
        user: userResponse.data,
      });
    }
  },
});