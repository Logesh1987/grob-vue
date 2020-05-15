<template>
  <div class="setupItemList">
    <div class="stepHead">
      <h3>Birthday Rewards</h3>
      <p>
        This event will appear on your site's loyalty program, prompting visitors and members to
        enter a date
      </p>
      <label class="switch" for="card-bdr">
        <input type="checkbox" v-model="data.status" @change="saveData('events')" id="card-bdr" />
        <i></i>
      </label>
    </div>
    <div class="setupListBody">
      <ul class="mt-4 mb-4">
        <li>{{data.ob_points}} Reward point on birthday</li>
        <li>{{data.nb_points}} Reward point for entering birthday</li>
      </ul>
      <button class="btn btn-outline-dark pr-4 pl-4 mt-4" v-b-modal.modal-bdr>Edit</button>
    </div>
    <b-modal
      id="modal-bdr"
      hide-header
      centered
      modal-class="modal-edit"
      body-class="d-flex flex-column align-items-center"
    >
      <template v-slot:default>
        <div class="setupContainer">
          <BirthdayRewards :data="data" :default="defaultSetup.birthday_event" />
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
import BirthdayRewards from "@/components/setup/BirthdayRewards.vue";
import { mapState } from "vuex";
export default {
  name: "CardBirthdayRewards",
  props: ["data", "saveData", "cancelSave"],
  components: { BirthdayRewards },
  computed: {
    ...mapState(["defaultSetup"])
  },
  methods: {
    updateData() {
      this.saveData("events");
      this.$bvModal.hide("modal-bdr");
    },
    cancelModal() {
      this.$bvModal.hide("modal-bdr");
      this.cancelSave();
    }
  }
};
</script>