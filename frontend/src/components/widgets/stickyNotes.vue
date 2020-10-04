<template>
  <div class="sticky-notes" :style="{ transform: 'rotate('+ angle+'deg)'}">
    <i class="fa fa-paperclip" aria-hidden="true"></i>
    <p class="date">{{item.createdDate}}</p>
    <p class="message">{{item.message}}</p>
    <b-btn class="buttons" @click="removeme()">
      <i class="fa fa-check" aria-hidden="true"></i>
    </b-btn>
  </div>
</template>
<script>
export default {
  props: ["item", "index"],
  data() {
    return {
      angle: null,
      color: null
    };
  },
  created() {
    this.angle = Math.floor(Math.random() * 20 - 10);
  },

  methods: {
    removeme() {
      this.$emit("removeme");
    }
  }
};
</script>
<style scoped>
.sticky-notes {
  width: 200px;
  height: 200px;
  border: 1px solid white;
  border-radius: 5px;
  position: relative;
  background-color: #f4f5b2;
  float: left;
  margin: 1.8rem;
}
.fa-paperclip {
  position: absolute;
  top: -1.3rem;
  font-size: 50px;
  left: 10rem;
}
.date {
  font-style: arial;
  font-size: 11px;
  text-align: left;
  padding-left: 0.8rem;
}
.message {
  height: 67%;
  width: 90%;
  border: 1px solid grey;
  overflow-y: auto;
  margin: 0 auto;
  text-align: left;
  padding-left: 5px;
  padding-right: 5px;
}
.buttons {
  background-color: #17a2b8;
  border-radius: 50%;
}
.angle1 {
  transform: rotate(-10deg);
}
.angle2 {
  transform: rotate(-5deg);
}
.angle3 {
  transform: rotate(0deg);
}
.angle4 {
  transform: rotate(5deg);
}
.angle5 {
  transform: rotate(10deg);
}
</style>