<template>
  <div class="screen-widget">
    <p class="device_id">
      Device Id :
      <b>{{device_id}}</b>
    </p>
    <img class="screen-img" :src="url" />
    <b-button class="m-3 buttonn" variant="dark">UPLOAD</b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      device_id: "564756",
      url:
        "https://cache.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/2330/2019/3/7/Events%20of%20Cambridge%20Institute%20of%20Technology%20Ranchi_Events.jpg"
    };
  }
};
</script>
<style scoped>
.screen-widget {
  height: 270px;
  width: 250px;
  border: 2px solid rgb(104, 94, 94);
  background-color: #d6d6f0;
  margin: 1rem;
  border-radius: 4px;
  float: left;
  -webkit-box-shadow: 0px -1px 30px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -1px 30px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -1px 30px -2px rgba(0, 0, 0, 0.75);
}
.screen-img {
  width: 95%;
  border-radius: 4px;
}
.device_id {
  font-size: 20px;
}
.buttonn{
    border-radius:10px;
}
</style>
