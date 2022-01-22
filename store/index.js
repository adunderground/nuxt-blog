import Vuex from "vuex";
import axios from "axios";

const BASE_URL = "https://api.airtable.com/v0/appN9ROFiOyvKhG3t/Nuxt%20Course";
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
    },
    actions: {
      async nuxtServerInit(vuexContext, nuxtContext) {
        const responce = await axios(BASE_URL, CONFIG);
        const data = await responce.data;
        const loadedPosts = data.records;
        vuexContext.commit("setLoadedPosts", loadedPosts);
      },
      async fetchPosts(context) {
        const responce = await axios(BASE_URL, CONFIG);
        const data = await responce.data;
        const loadedPosts = data.records;
        context.commit("setLoadedPosts", loadedPosts);
      },
      async createPost(context, postData) {
        const POST_BODY = {
          records: [
            {
              fields: postData,
            },
          ],
        };

        const responce = await axios.post(BASE_URL, POST_BODY, CONFIG);
        const data = await responce.data;
      },
      async updatePost(context, data) {
        const PATCH_BODY = {
          id: data.id,
          records: [
            {
              fields: data.postData,
            },
          ],
        };
        console.log(PATCH_BODY);
        const responce = await axios.patch(BASE_URL, POST_BODY, CONFIG);
        const responceData = await responce.data;

        console.log(responceData);
      },
    },
  });
};
