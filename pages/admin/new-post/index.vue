<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmit" />
    </section>
  </div>
</template>
<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  components: {
    AdminPostForm,
  },
  layout: "admin",
  methods: {
    onSubmit(postData) {
      // create a new post
      this.$store.dispatch("createPost", postData);

      // call vuex to update the list of loaded posts
      this.$store.dispatch("fetchPosts");
    },
  },
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>