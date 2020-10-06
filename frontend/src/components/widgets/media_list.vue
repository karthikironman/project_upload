<template>
  <div>
    <ul class="flex-container row">
      <li class="flex-item" v-if="sl !== 'SL'">{{sl+1}}</li>
      <li class="flex-item" v-else >{{sl}}</li>
      <li class="flex-item asset-name1">{{name}}</li>
      <li class="flex-item ml-5 img-cnt">
        <span v-if="url=='URL'">IMAGE</span>
        <span v-else><img  class="image-cnt" :src="url" />
        <b-spinner class="spinners-back" ></b-spinner></span>
        
      </li>
      <li class="flex-item ml-5">
        <span v-if="url=='URL'" >DELETE</span>
        <b-icon-trash v-else class="trash-icon" @click="showdelete()" v-b-modal.modal-1></b-icon-trash>
      </li>
    </ul>
    <b-modal :id="name" hide-footer title="DELETE ASSET">
      <h5 class="text-center">Are you sure to delete this asset?</h5>

      <h5 class="my-4 text-center asset-name">{{name}}</h5>
      <b-spinner class="pt-4 spinners-delete" v-if="deleteLoading" label="Spinning"></b-spinner>
      <b-button class="delete-btn" @click="deleteScreen()" v-else variant="outline-danger">Delete</b-button>
    </b-modal>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    props:["sl","name","url"],
  data() {
    return {
    //   sl: 0,
    //   name: "test12324534747894677235461345134.jpg",
    //   url: "https://upload-project-ieee.s3.ap-south-1.amazonaws.com/image.png",
      deleteLoading: false
    };
  },
  methods: {
    showdelete() {
      this.$bvModal.show(this.name);
    },
    deleteScreen() {
      this.deleteLoading = true;
      // setTimeout(()=>{this.deleteLoading = false},1000)
      let url = `http://karthik.buzz:1880/deleteassets?url=${this.url}`;
      let data = {
        filename: this.name
      };
      axios
        .put(url, data)
        .then(() => {this.$emit("update"); this.$bvModal.hide(this.name);})
        .catch()
        .finally(() => {
          this.deleteLoading = false;
        });
    }
  }
};
</script>
<style scoped>
.spinners-delete {
  margin: 0 auto;
  display: block;
}
.delete-btn {
  width: 70%;
  margin: 0 auto;
  display: block;
}
.asset-name {
  width: 70%;
  text-align: center;
  margin: 0 auto;
  font-size: 2-0px;
  display: block;
  overflow-wrap: break-word;
  color: blue;
}
.asset-name1 {
  width: 15rem;
  padding-top: 13px;
  line-height: 21px !important;
  text-align: left !important;
  margin: 0 auto;
  font-size: 2-0px;
  display: block;
  overflow-wrap: break-word;
  /* color: blue !important; */
}
.image-cnt {
  width: 10rem;
  position:relative;
  z-index:2;
  border-radius: 3px;
  border:3px solid black;
  background:black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 
0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.spinners-back{
    position:absolute;
    left:40%;
    top:30%;
    z-index:0
}
.img-cnt{
     width: 10rem;
     position:relative;
      
}
.trash-icon {
  margin-top: 10px;
  font-size: 2rem;
  cursor: pointer;
  right: 0.2rem;
}
.trash-icon:hover {
  color: red;
}
.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;

  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
}

.row {
  -webkit-flex-direction: row;
  flex-direction: row;
}

.row-reverse {
  -webkit-flex-direction: row-reverse;
  flex-direction: row-reverse;
}
.row-reverse li {
  background: gold;
}

.column {
  -webkit-flex-direction: column;
  flex-direction: column;
  float: left;
}
.column li {
  background: deepskyblue;
}

.column-reverse {
  -webkit-flex-direction: column-reverse;
  flex-direction: column-reverse;
  float: right;
}
.column-reverse li {
  background: lightgreen;
}

.flex-item {
  min-width: 50px;
  min-height: 50px;
  margin: 5px;

  line-height: 50px;
  color: black;
  font-weight: bold;
  text-align: center;
}
</style>