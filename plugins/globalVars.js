import Vue from "vue";

export default ({ app }, inject) => {
  inject(
    "globalVars",
    Vue.observable({
      PREVIEW_TEXT_MAX_LEN: 100,
    })
  );
};
