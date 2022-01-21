<template>
  <div>
    <TheHeader @sidenavToggle="toggleNav" isAdmin />
    <TheSidenav :show="displaySideNav" @close="displaySideNav = false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";

export default {
  components: {
    TheHeader,
    TheSidenav,
  },
  data() {
    return {
      displaySideNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.displaySideNav = !this.displaySideNav;
    },
  },
};
</script>


<style>
html {
  font-family: "Open Sans", sans-serif;
}

body {
  padding: 0;
  margin: 0;
  font-size: 125%;
}
</style>