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
      >Cancel
    </AppButton>

    <AppButton
      v-if="isEditing"
      type="button"
      style="margin-left: 10px"
      @click="onDelete"
      >Delete
    </AppButton>
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
    isEditing() {
      return !!this.post;
    },
    buttonCaption() {
      return this.isEditing ? "Update post" : "Submit post";
    },
  },
  methods: {
    onSave() {
      // submit the post
      this.$emit("submit", this.editedPost);
      this.$router.push("/admin");
    },
    onCancel() {
      // navigate back
      this.$router.push("/admin");
    },
    onDelete() {
      // navigate back
      this.$emit("delete", this.editedPost.id);
      this.$router.push("/admin");
    },
  },
};
</script>