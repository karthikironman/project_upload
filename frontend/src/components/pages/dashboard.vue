<template>
  <div class="dashboard-page">
    <w-navbar />
    <div class="inside-body">
      <div class="section-top">
        <div class="tiles">
           <div>
               <div class="tiles-small"> tile 1</div>
                <div class="tiles-small">tile 2</div>
                 <div class="tiles-small">tile 3</div>


           </div>
            <div> bbutton </div>



        </div>
        <div class="preview">preview</div>
      </div>
      <div class="section-bottom">section bottom</div>
    </div>
  </div>
</template>
<script>
import navb from "@/components/widgets/portalNav";
export default {
  components: {
    "w-navbar": navb
  }
};
</script>
<style scoped>
.dashboard-page {
  background-color: red !important;
  height: 100vh;
  width: 100vw;
}
.section-top{
  padding-left:200px;
}
.tiles{
  width:50%;
  float:left;
  height:auto;
  background-color:white
}
.preview{
  width:50%;
  float:left;
  height:5rem;
  background-color:grey
}
.tiles-small{
  float:left;
  width:28%;
  height:8rem;
  background-color:#e4aeae;
  margin:1rem;
}
</style>