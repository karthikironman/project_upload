<template>
  <div class="dashboard">
    <w-navbar class="dashboard" />
    <div class="inner-body">
      <div v-if="item.length == 0 && loading == true" class="loading">
        <b-spinner class="pt-4" label="Spinning"></b-spinner>
        <h2>LOADING</h2>
      </div>
      <div v-if="item.length == 0 && loading == false" class="no-content">
        <h2>NO SCREENS DETECTED</h2>
        <p>Open a new screen and reload this page</p>
        <a
          href="http://karthik.buzz:1880/screen"
          target="_blank"
          rel="noopener noreferrer"
        >OPEN NEW SCREEN</a>
      </div>
      <w-screen-widget
        :device_id="i.device_id"
        :url="i.url"
        @update="refresh()"
        v-for="(i,index) in item"
        :key="index"
      />
    </div>
    <div class="reload-btn" @click="refresh()">RELOAD</div>
  </div>
</template>
<script>
import axios from "axios";
import navb from "@/components/widgets/portalNav";
import screen from "@/components/widgets/screens.vue";
export default {
  components: {
    "w-navbar": navb,
    "w-screen-widget": screen
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
      this.loading = true;
      this.item = [];
      axios
        .get("http://karthik.buzz:1880/allscreens")
        .then(res => {
          this.item = res.data;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
<style scoped>
.inner-body {
  margin-left: 200px;
  height: calc(100vh - 3.5rem);
  overflow-y: scroll;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
}
.no-content {
  position: absolute;
  top: 50%;
  left: 44%;

}
.dashboard {
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