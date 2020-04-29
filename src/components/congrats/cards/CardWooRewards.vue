<template>
  <div class="setupItemList">
    <div class="stepHead">
      <h3>WOOReview Rewards</h3>
      <p>Reward reviews of products, services by incentivizing</p>
      <label class="switch" for="card-woor">
        <input
          type="checkbox"
          true-value="1"
          false-value="0"
          v-model="data.review_status"
          @change="saveData"
          id="card-woor"
        />
        <i></i>
      </label>
    </div>
    <div class="setupListBody">
      <ul class="mt-4 mb-4">
        <li>{{data.points}} Reward point for approved review</li>
      </ul>
      <button class="btn btn-outline-dark pr-4 pl-4 mt-4" v-b-modal.modal-wrr>Edit</button>
    </div>
    <b-modal
      id="modal-wrr"
      hide-header
      centered
      modal-class="modal-edit"
      body-class="d-flex flex-column align-items-center"
    >
      <template v-slot:default>
        <div class="setupContainer">
          <WooRewards :data="data" :default="defaultSetup.woo_review" />
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
import WooRewards from "@/components/setup/WooRewards.vue";
import { mapState } from "vuex";
export default {
  name: "CardWooRewards",
  props: ["data", "saveData", "cancelSave"],
  components: { WooRewards },
  computed: {
    ...mapState(["defaultSetup"])
  },
  methods: {
    updateData() {
      this.saveData();
      this.$bvModal.hide("modal-wrr");
    },
    cancelModal() {
      this.$bvModal.hide("modal-wrr");
      this.cancelSave();
    }
  }
};
</script>