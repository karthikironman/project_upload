<template>
  <div>
    <w-navbar />
    <div class="my-plan-page">
      <sticky :item="items" v-for="(items,index) in notes" :key="index" @removeme="remove(index)" />
      <div class="sticky-not" v-if="isempty()">ADD YOUR PLANS AS STICKY NOTES HERE</div>
    </div>
    <b-btn v-b-modal.modal-prevent-closing class="add-btn">
      <i class="fa fa-plus-circle" aria-hidden="true"></i>
    </b-btn>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="UPLOAD MY PLANS"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Message"
          label-for="name-input"
          invalid-feedback="Message is required"
        >
          <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <div>
      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>
<script>
import navb from "@/components/widgets/portalNav";
import sticky from "@/components/widgets/stickyNotes.vue";
export default {
  components: {
    "w-navbar": navb,
    sticky
  },
  data() {
    return {
      name: "",
      nameState: null,
      notes: [
       
      ]
    };
  },
  methods:{
    isempty(){
     if(this.notes.length === 0)
     return true;
     else
     return false;
    },
    remove(index){
     console.log("removing",index);
     this.notes.splice(index,1);
    },
    checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        var notes = { "message":this.name, "createdDate":"UPLOAD STICKY NOTES"};
        this.notes.push(notes)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    
  }
};
</script>
<style scoped>
.my-plan-page {
  background-color: #e7e2e2;
  height: calc(100vh - 56px);
  width: calc(100vw - 200px);
  position: fixed;
  right: 0;
  bottom: 0;
  margin-left: 200px;
  overflow-y:auto;
}
.add-btn {
  position: absolute;
  font-size: 35px;
  border-radius: 50%;
  background-color: #17a2b8;
  height:4rem;
  left:56.5%;
  border-radius:9px;
  top:90%;
  transform: translate(-50%, -50%);
}
.sticky-not{
  font-weight:900;
  position:absolute;
  left:50%;
  top:50%;
    border-radius:9px;
  transform:translate(-50%,-50%);
  background-color:yellow;
  border:2px dotted grey;
  padding:5rem;
}
</style>