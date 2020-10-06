<template>
  <div class="media_page">
    <w-navbar />
    <div class="inner-contents p-3">
      <h4>MEDIA</h4>
      <w-list
        :sl="'SL'"
        :url="'URL'"
        :name="'FILENAME'"
        v-if="item.length > 0"
      />
      <w-list
        @update="refresh()"
        :sl="index"
        :url="i.url"
        :name="i.filename"
        v-for="(i,index) in item"
        :key="i.name"
      />
      <div v-if="item.length == 0 && loading == false" class="no-content">
        <h2>NO ASSETS PRESENT</h2>
        <p>Open a new screen and Upload a new asset in the dashboard page</p>
        <a
          href="http://karthik.buzz:1880/screen"
          target="_blank"
          rel="noopener noreferrer"
        >OPEN NEW SCREEN</a>
      </div>
      <div class="loading" v-if="loading">
        <h3>Loading</h3>
        <b-spinner label="Spinning"></b-spinner>
      </div>
    </div>
    <div class="reload-btn" @click="refresh()">RELOAD</div>
  </div>
</template>
<script>
import axios from "axios";
import navb from "@/components/widgets/portalNav";
import list from "@/components/widgets/media_list";
export default {
  components: {
    "w-navbar": navb,
    "w-list": list
  },
  data() {
    return {
      item: [],
      loading: false
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    refresh() {
      let url = "http://karthik.buzz:1880/allassets";
      this.loading = true;
      axios
        .get(url)
        .then(res => {
          let final = [];
          let image_name = [];
          for (let a = 0; a < res.data.length; a++) {
            delete res.data[a]._id;

            if (image_name.indexOf(res.data[a].filename)) {
              final.push(res.data[a]);
              image_name.push(res.data[a].filename);
            }
          }
          this.item = final;
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    containsObject(obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
          return true;
        }
      }

      return false;
    }
  }
};
</script>
<style scoped>
.no-content {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 44%;
}
.loading {
  text-align: center;
  margin-top: 6rem;
}
.media_page {
  text-align: left;
}
.inner-contents {
  /* background: yellow; */
  margin-left: 201px;
  height: calc(100vh - 3.5rem);
  overflow-y: scroll;
}
.reload-btn {
  width: 8rem;
  height: auto;
  background-color: yellow;
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  z-index: 99;
  padding: 1rem;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  opacity: 0.3;
}
.reload-btn:hover {
  opacity: 1;
}
</style>