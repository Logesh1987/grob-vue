<template>
  <div class="setupItemList">
    <div class="stepHead">
      <h3>Sign Up Bonus</h3>
      <p>Reward customers for creating an account on your store</p>
      <label class="switch" for="card-signupbonus">
        <input
          type="checkbox"
          true-value="1"
          false-value="0"
          v-model="data.bonus_status"
          @change="saveData('points_setup')"
          id="card-signupbonus"
        />
        <i></i>
      </label>
    </div>
    <div class="setupListBody">
      <ul class="mt-4 mb-4">
        <li>{{data.welcome_bonus}} Welcome points for new signed up users</li>
      </ul>
      <button class="btn btn-outline-dark pr-4 pl-4 mt-4" v-b-modal.modal-csb>Edit</button>
    </div>
    <b-modal
      id="modal-csb"
      hide-header
      centered
      modal-class="modal-edit"
      body-class="d-flex flex-column align-items-center"
    >
      <template v-slot:default>
        <div class="setupContainer">
          <SignupBonus :data="data" :default="defaultSetup.signup_bonus" />
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
import SignupBonus from "@/components/setup/SignupBonus.vue";
import { mapState } from "vuex";
export default {
  name: "CardSignupBonus",
  props: ["data", "saveData", "cancelSave"],
  components: { SignupBonus },
  computed: {
    ...mapState(["defaultSetup"])
  },
  methods: {
    updateData() {
      this.saveData("points_setup");
      this.$bvModal.hide("modal-csb");
    },
    cancelModal() {
      this.$bvModal.hide("modal-csb");
      this.cancelSave();
    }
  }
};
</script>