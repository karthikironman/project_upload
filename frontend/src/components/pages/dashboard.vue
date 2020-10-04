<template>
  <div class="dashboard">
    <w-navbar class="dashboard" />
    <div class="inner-body">
      <div v-if="item.length == 0" class="loading">
        <b-spinner class="pt-4" label="Spinning"></b-spinner>
        <h2>LOADING</h2>
      </div>
      <w-screen-widget
        :device_id="i.device_id"
        :url="i.url"
        @update="refresh()"
        v-for="(i,index) in item"
        :key="index"
      />
    </div>
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
      item: []
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.item = [];
      axios.get("http://karthik.buzz:1880/allscreens").then(res => {
        this.item = res.data;
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
.dashboard {
}
</style>