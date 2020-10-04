<template>
  <div class="dashboard">
    <w-navbar />
    <div class="inner-body"><w-screen-widget v-for="i in 5" :key="i" /></div>
    
  </div>
</template>
<script>
import navb from "@/components/widgets/portalNav";
import screen from "@/components/widgets/screens.vue"
export default {
  components: {
    "w-navbar": navb,
    "w-screen-widget":screen
  }
};
</script>
<style scoped>
.inner-body{
  margin-left:200px;
}
</style>