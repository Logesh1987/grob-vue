<template>
  <transition name="slide-fade">
    <div class="setupItemList">
      <div class="stepHead">
        <h3>Pay by Points</h3>
        <p>Setup if customers can pay using their points</p>
        <label class="switch" for="card-paybypoint">
          <input
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="data.redeem_purchase_status"
            @change="saveData('points_setup')"
            id="card-paybypoint"
          />
          <i></i>
        </label>
      </div>
      <div class="setupListBody">
        <ul class="mt-4 mb-4">
          <li>{{data.redeem_point_per_dollar}} Reward Point is equal to 1{{data.currency}}</li>
        </ul>
        <button class="btn btn-outline-dark pr-4 pl-4 mt-4" v-b-modal.modal-pbp>Edit</button>
      </div>
      <b-modal
        id="modal-pbp"
        hide-header
        centered
        modal-class="modal-edit"
        body-class="d-flex flex-column align-items-center"
      >
        <template v-slot:default>
          <div class="setupContainer">
            <PaybyPoints :data="data" />
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
  </transition>
</template>
<script>
import PaybyPoints from "@/components/setup/PaybyPoints.vue";
export default {
  name: "CardPaybyPoints",
  props: ["data", "saveData", "cancelSave"],
  components: { PaybyPoints },
  methods: {
    updateData() {
      this.saveData("points_setup");
      this.$bvModal.hide("modal-pbp");
    },
    cancelModal() {
      this.$bvModal.hide("modal-pbp");
      this.cancelSave();
    }
  }
};
</script>