<template>
  <div class="dashboard">
    <w-navbar />
    <div class="inner-body">
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
}
</style>