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
    <b-button
      @click="onUpload"
   
      v-if="image_name.length > 0 "
      class="m-3 buttonn"
      variant="primary"
    >UPLOAD</b-button>

    <b-icon-trash class="trash-icon" @click="showdelete()" v-b-modal.modal-1 v-else></b-icon-trash>
    <b-modal :id="device_id" hide-footer title="DELETE SCREEN">
      <h5 class="text-center">Are you sure to delete this screen?</h5>

      <h4 class="my-4 text-center">{{device_id}}</h4>
      <b-spinner class="pt-4 spinners-delete" v-if="deleteLoading" label="Spinning"></b-spinner>
      <b-button class="delete-btn" @click="deleteScreen()" v-else variant="outline-primary">Delete</b-button>
    </b-modal>
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
      loading: false,
      deleteLoading: false
    };
  },
  methods: {
    deleteScreen() {
      this.deleteLoading = true;
      // setTimeout(()=>{this.deleteLoading = false},1000)
      let url = "http://karthik.buzz:1880/deletescreen";
      let data = {
        device_id: this.device_id
      };
      axios
        .put(url, data)
        .then(() => {this.$emit("update");})
        .catch()
        .finally(() => {
          this.deleteLoading = false;
        });
    },
    showdelete() {
      this.$bvModal.show(this.device_id);
    },
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
  position: relative;
  border-radius: 4px;
  float: left;
  -webkit-box-shadow: 0px -1px 30px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -1px 30px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -1px 30px -2px rgba(0, 0, 0, 0.75);
}
.screen-img {
  width: 95%;
  border-radius: 4px;
  height: 8.5rem;
}
.screen-img-modal {
  width: 10rem;
  border-radius: 4px;
  height: 8.5rem;
  margin-left: 6rem;
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
  height: 8.2rem;
  margin: 0 auto;
  font-weight: 900;
  padding-top: 3rem;
}
.spinners {
  margin: 3rem;
}
.trash-icon {
  position: absolute;
  bottom: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  right: 0.2rem;
}
.trash-icon:hover {
  color: red;
}
.delete-btn {
  width: 100%;
}
.spinners-delete {
  margin: 0 auto;
  display: block;
}
</style>
