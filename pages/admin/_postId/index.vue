<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  components: {
    AdminPostForm,
  },
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: "ad",
        title: "asdzxc",
        thumbnailLink:
          "https://blueseatblogs.com/wp-content/uploads/2018/07/consciousness-709143.jpg",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, aspernatur?",
      },
    };
  },
};
</script>

<style scoped>

</style>