<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
  head: {
    title: "🍕 | Rando Blog",
  },
  // async asyncData({ $axios }) {
  //   const responce = await $axios(
  //     "https://api.airtable.com/v0/appN9ROFiOyvKhG3t/Nuxt%20Course?&view=Grid%20view",
  //     {
  //       headers: {
  //         Authorization: "Bearer keyqeZENw1Pv4W6c6",
  //       },
  //     }
  //   );
  //   const data = await responce.data;
  //   const loadedPosts = data.records;
  //   return { loadedPosts };
  // },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>