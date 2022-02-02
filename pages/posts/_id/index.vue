<template>
  <div class="single-post">
    <section class="post">
      <h1 class="post-title">{{ post.fields.title }}</h1>
      <div class="post-details">
        <div>Last updated on {{ formattedDate }}</div>
        <div>Written by {{ post.fields.author }}</div>
      </div>
      <p>{{ post.fields.postContent }}</p>
      <div class="post-footer">
        <p>
          Let us know your thoughts about this post. Send us an
          <a href="mailto:asdzxc@asd.zxc">email</a>!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log(this.$route.params.id);
    },
  },
  computed: {
    post() {
      return this.$store.getters.loadedPosts.filter(
        (post) => post.id === this.$route.params.id
      )[0];
    },
    formattedDate() {
      const date = new Date(this.post.fields.lastUpdated);

      return date.toLocaleDateString() + " at " + date.toLocaleTimeString();
    },
  },
  head: {
    title: `🍌 | Rando Blog`,
  },
};
</script>

<style scoped>
.single-post {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (max-width: 768px) {
  .post-details {
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-footer a {
  color: red;
  text-decoration: none;
}

.post-footer a:hover,
.post-footer a:active {
  color: salmon;
}
</style>