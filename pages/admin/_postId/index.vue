<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onUpdate" />
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