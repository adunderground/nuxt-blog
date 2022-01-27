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
    async onUpdate(postData) {
      await this.$store.dispatch("updatePost", postData);
      this.$router.push("/admin");
    },
    async onDelete(postId) {
      await this.$store.dispatch("deletePost", postId);
      this.$router.push("/admin");
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