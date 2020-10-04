<template>
  <div class="screen-widget">
    <p class="device_id">
      Device Id :
      <b>{{device_id}}</b>
    </p>
    <b-spinner class="pt-4 spinners" v-if="loading" label="Spinning"></b-spinner>
    <div v-else>
      <div v-if="image_name.length > 0 " class="img-name">{{image_name}}</div>
      <img v-else class="screen-img" :src="url" />
    </div>

    <input type="file" @change="onFileSelected" ref="fileInput" style="display:none" />
    <button @click="$refs.fileInput.click()">CHANGE IMAGE</button>
    <b-button @click="onUpload" class="m-3 buttonn" variant="dark">UPLOAD</b-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["device_id", "url"],
  data() {
    return {
      image_name: "",
      selectedFile: null,
      loading: false
    };
  },
  methods: {
    onFileSelected(event) {
      console.log(event);
      this.selectedFile = event.target.files[0];
      this.image_name = this.selectedFile.name;
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      this.loading = true;
      axios
        .post(
          `http://karthik.buzz:1880/updateScreen?device_id=${this.device_id}`,
          fd
        )
        .then(() => {
          this.$emit("update");
        })
        .catch()
        .finally(() => {
          this.image_name = "";
          this.loading = false;
        });
    }
  }
};
</script>
<style scoped>
.screen-widget {
  height: 270px;
  width: 250px;
  border: 2px solid rgb(104, 94, 94);
  background-color: #d6d6f0;
  margin: 2rem;
  border-radius: 4px;
  float: left;
  -webkit-box-shadow: 0px -1px 30px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -1px 30px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -1px 30px -2px rgba(0, 0, 0, 0.75);
}
.screen-img {
  width: 95%;
  border-radius: 4px;
  max-height: 8.5rem;
}
.device_id {
  font-size: 20px;
}
.buttonn {
  border-radius: 10px;
}
.img-name {
  width: 95%;
  overflow-wrap: break-word;
  border-radius: 4px;
  height: 9.9rem;
  margin: 0 auto;
  font-weight: 900;
  padding-top: 4rem;
}
.spinners {
  margin: 3rem;
}
</style>
