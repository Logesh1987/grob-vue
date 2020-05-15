<template>
  <transition name="slide-fade">
    <div class="setupItemList">
      <div class="stepHead">
        <h3>Points Program</h3>
        <p>Purchase rewards for customers</p>
        <label class="switch" for="card-pointsProgram">
          <input
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="data.purchase_status"
            id="card-pointsProgram"
            @change="saveData('points_setup')"
          />
          <i></i>
        </label>
      </div>
      <div class="setupListBody">
        <ul class="mt-4 mb-4">
          <li>{{data.is_points_percentage ? "Fixed": "Percentage"}} Points</li>
          <li>Get {{data.points}} point for {{data.price}} {{data.currency}} purchase</li>
        </ul>
        <button class="btn btn-outline-dark pr-4 pl-4 mt-4" v-b-modal.modal-edit>Edit</button>
      </div>
      <b-modal
        id="modal-edit"
        ref="modaledit"
        hide-header
        centered
        modal-class="modal-edit"
        body-class="d-flex flex-column align-items-center"
      >
        <template v-slot:default>
          <div class="setupContainer">
            <PointsProgram ref="PointsProgram" :data="data" :default="defaultSetup.points_program" />
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
import PointsProgram from "@/components/setup/PointsProgram.vue";
import { mapState } from "vuex";
export default {
  name: "CardPointsProgram",
  props: ["data", "saveData", "cancelSave"],
  components: { PointsProgram },
  computed: {
    ...mapState(["defaultSetup"])
  },
  methods: {
    updateData() {
      this.saveData("points_setup");
      this.$bvModal.hide("modal-edit");
    },
    cancelModal() {
      this.$bvModal.hide("modal-edit");
      this.cancelSave();
    }
  }
};
</script>