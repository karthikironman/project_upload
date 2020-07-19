<template>
  <div class="welcome_page">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">UPLOAD</b-navbar-brand>
      <button class="get_start" @click="getStarted()">Get Started</button>
    </b-navbar>Fill up the content here, this is the page user will see first after coming to our site.
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getStarted() {
      this.$router.push({
        path: "/get-started"
      });
    }
  }
};
</script>
<style>
.get_start {
  position: absolute;
  right: 1rem;
  border: none;
  border-radius: 6px;
  padding: 3px 10px 3px 10px;
  font-weight: 600;
}
.welcome_page {
  background: white;
  height: calc(100vh );
  width: 100vw;
  position: relative;
  z-index: 10000;
}
</style>