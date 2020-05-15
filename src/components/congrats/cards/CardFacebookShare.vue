<template>
  <div class="setupItemList">
    <div class="stepHead">
      <h3>Facebook Share Setup</h3>
      <p>When members share your message on Facebook</p>
      <label class="switch" for="card-fbshare">
        <input
          type="checkbox"
          true-value="1"
          false-value="0"
          v-model="data.facebook_share.status"
          @change="saveData('entries')"
          id="card-fbshare"
        />
        <i></i>
      </label>
    </div>
    <div class="setupListBody">
      <ul class="mt-4 mb-4">
        <li>{{data.facebook_share.worth_entries}} Reward Point</li>
      </ul>
      <button class="btn btn-outline-dark pr-4 pl-4 mt-4" v-b-modal.modal-fbs>Edit</button>
    </div>
    <b-modal
      id="modal-fbs"
      hide-header
      centered
      modal-class="modal-edit"
      body-class="d-flex flex-column align-items-center"
    >
      <template v-slot:default>
        <div class="setupContainer">
          <FacebookShare :data="data" :default="defaultSetup.facebook_share" />
        </div>
      </template>
      <template v-slot:modal-footer>
        <b-button
          variant="outline-secondary"
          class="float-right"
          @click.prevent="cancelModal"
        >Cancel</b-button>
        <b-button variant="warning" class="float-right" @click.prevent="updateData">Save & update</b-button>
      </template>
    </b-modal>
  </div>
</template>
<script>
import FacebookShare from "@/components/setup/FacebookShare.vue";
import { mapState } from "vuex";
export default {
  name: "CardFacebookShare",
  props: ["data", "saveData", "cancelSave"],
  components: { FacebookShare },
  computed: {
    ...mapState(["defaultSetup"])
  },
  methods: {
    updateData() {
      this.saveData("entries");
      this.$bvModal.hide("modal-fbs");
    },
    cancelModal() {
      this.$bvModal.hide("modal-fbs");
      this.cancelSave();
    }
  }
};
</script>