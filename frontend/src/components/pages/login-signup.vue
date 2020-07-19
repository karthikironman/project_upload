<template>
  <div class="loginsign">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">UPLOAD</b-navbar-brand>
    </b-navbar>Add login option in this page (signup we can add later)
    <br />
    <br />
    <br />
    <br />
    <b>
      Username
      <br />Password
    </b>
    <br />
    <b-button @click="gotoportal()" variant="outline-primary">Login</b-button>
  </div>
</template>
<script>
export default {
    methods:{
        gotoportal(){
            this.$router.push("/portal/dashboard")
        }
    }
}
</script>
<style scoped>
.loginsign {
  background: white;
  height: calc(100vh);
  width: 100vw;
  position: relative;
  z-index: 10000;
}
</style>