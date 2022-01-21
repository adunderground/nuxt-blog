<template>
  <div class="single-post">
    <section class="post">
      <h1 class="post-title">Title</h1>
      <div class="post-details">
        <div>Last updated on XX/XX</div>
        <div>Written by NAME</div>
      </div>
      <p>Content of the post</p>
      <div class="post-footer">
        <p>
          Let us know your thoughts about this post. Send us an
          <a href="mailto:asdzxc@asd.zxc">email</a>!
        </p>
      </div>
    </section>
  </div>
</template>

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

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
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