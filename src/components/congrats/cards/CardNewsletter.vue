<template>
  <div class="setupItemList">
    <div class="stepHead">
      <h3>Subscribe to Newsletter Setup</h3>
      <p>Incentivize users for signing up to your newsletters.</p>
      <label class="switch" for="card-ns">
        <input
          type="checkbox"
          true-value="1"
          false-value="0"
          v-model="data.newsletter_subscription.status"
          @change="saveData"
          id="card-ns"
        />
        <i></i>
      </label>
    </div>
    <div class="setupListBody">
      <ul class="mt-4 mb-4">
        <li>{{data.newsletter_subscription.worth_entries}} Reward point for subscription</li>
      </ul>
      <button class="btn btn-outline-dark pr-4 pl-4 mt-4" v-b-modal.modal-nl>Edit</button>
    </div>
    <b-modal
      id="modal-nl"
      hide-header
      centered
      modal-class="modal-edit"
      body-class="d-flex flex-column align-items-center"
    >
      <template v-slot:default>
        <div class="setupContainer">
          <Newsletter :data="data" :default="defaultSetup.newsletter" />
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
import Newsletter from "@/components/setup/Newsletter.vue";
import { mapState } from "vuex";
export default {
  name: "CardNewsletter",
  props: ["data", "saveData", "cancelSave"],
  components: { Newsletter },
  computed: {
    ...mapState(["defaultSetup"])
  },
  methods: {
    updateData() {
      this.saveData("entries");
      this.$bvModal.hide("modal-nl");
    },
    cancelModal() {
      this.$bvModal.hide("modal-nl");
      this.cancelSave();
    }
  }
};
</script>