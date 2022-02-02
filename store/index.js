import Vuex from "vuex";
import axios from "axios";

// const BASE_URL = "https://api.airtable.com/v0/appN9ROFiOyvKhG3t/Nuxt%20Course";
const CONFIG = {
  headers: {
    Authorization: "Bearer keyqeZENw1Pv4W6c6",
  },
};

export default () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
    mutations: {
      setLoadedPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      },
      deletePost(state, postId) {
        state.loadedPosts = state.loadedPosts.filter(
          (post) => post.id != postId
        );
      },
    },
    actions: {
      async nuxtServerInit(vuexContext, nuxtContext) {
        const responce = await axios(process.env.baseURL, CONFIG);
        const data = await responce.data;
        const loadedPosts = data.records;
        vuexContext.commit("setLoadedPosts", loadedPosts);
      },
      async fetchPosts(context) {
        const responce = await axios(process.env.baseURL, CONFIG);
        const data = await responce.data;
        const loadedPosts = data.records;
        context.commit("setLoadedPosts", loadedPosts);
      },
      async createPost(context, postData) {
        const POST_BODY = {
          records: [postData],
        };

        console.log(POST_BODY);
        const responce = await axios.post(process.env.baseURL, POST_BODY, CONFIG);
        const data = await responce.data;

        context.commit("addPost", data.records[0]);
      },
      async updatePost(context, postData) {
        // need to delete createdTime to pass only id and post fields
        delete postData.createdTime;

        const PUT_BODY = {
          records: [postData],
        };
        console.log(PUT_BODY);

        // using destructive put call
        const responce = await axios.put(process.env.baseURL, PUT_BODY, CONFIG);
        const responceData = await responce.data;
        context.commit("editPost", postData);
      },
      async deletePost(context, postId) {
        const DELETE_URL = process.env.baseURL + `/${postId}`;
        const responce = await axios.delete(DELETE_URL, CONFIG);
        const responceData = await responce.data;
        context.commit("deletePost", postId);
      },
    },
  });
};
