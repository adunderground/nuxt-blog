<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

// const Airtable = require("airtable");
// const base = new Airtable({ apiKey: "keyqeZENw1Pv4W6c6" }).base(
//   "appN9ROFiOyvKhG3t"
// );

export default {
  components: {
    PostList,
  },
  data() {
    // return {
    //   loadedPosts: [],
    // };
  },
  async asyncData({ $axios }) {
    const responce = await $axios(
      "https://api.airtable.com/v0/appN9ROFiOyvKhG3t/Nuxt%20Course?maxRecords=3&view=Grid%20view",
      {
        headers: {
          Authorization: "Bearer keyqeZENw1Pv4W6c6",
        },
      }
    );
    const data = await responce.data;
    const loadedPosts = data.records;

    return { loadedPosts };
  },

  methods: {
    log() {
      console.log(this.loadedPosts);
    },
  },
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/bigbrain.jpg");
  background-position: center;
  background-size: contain;
  text-align: center;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
