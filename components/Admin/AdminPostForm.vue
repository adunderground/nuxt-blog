<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.fields.author"
      >Author Name</AppControlInput
    >

    <AppControlInput v-model="editedPost.fields.title">Title</AppControlInput>

    <AppControlInput v-model="editedPost.fields.thumbnail"
      >Thumbnail Link</AppControlInput
    >

    <AppControlInput
      control-type="textarea"
      v-model="editedPost.fields.previewText"
      >Preview Text</AppControlInput
    >

    <AppControlInput
      control-type="textarea"
      v-model="editedPost.fields.postContent"
      >Content</AppControlInput
    >

    <AppButton type="submit"> {{ buttonCaption }}</AppButton>

    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
  </form>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
  components: {
    AppButton,
    AppControlInput,
  },
  props: ["post"],
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            fields: {
              author: "",
              title: "",
              thumbnail: "",
              previewText: "",
              postContent: "",
            },
          },
    };
  },
  computed: {
    buttonCaption() {
      return this.post ? "Update post" : "Submit post";
    },
  },
  methods: {
    onSave() {
      // submit the post
      console.log(this.editedPost);
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      // navigate back
      this.$router.push("/admin");
    },
  },
};
</script>