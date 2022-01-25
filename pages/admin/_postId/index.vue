<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onUpdate" @delete="onDelete" />
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
  computed: {
    loadedPost() {
      return this.$store.getters.loadedPosts.filter(
        (post) => post.id === this.$route.params.postId
      )[0];
    },
  },
  methods: {
    onUpdate(postData) {
      delete postData.createdTime;
      this.$store.dispatch("updatePost", postData);
    },
    onDelete(postId) {
      this.$store.dispatch("deletePost", postId);
    },
  },
};
</script>

<style scoped>
.admin-post-page {
  display: flex;
  justify-content: center;
}
.update-form {
  width: 70vw;
}
</style>