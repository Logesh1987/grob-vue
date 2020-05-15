<template>
  <transition name="slide-fade">
    <div class="setupItemList">
      <div class="stepHead">
        <h3>Twitter Share Setup</h3>
        <p>When members share your message on Twitter</p>
        <label class="switch" for="card-twshare">
          <input
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="data.twitter_tweet.status"
            @change="saveData('entries')"
            id="card-twshare"
          />
          <i></i>
        </label>
      </div>
      <div class="setupListBody">
        <ul class="mt-4 mb-4">
          <li>{{data.twitter_tweet.worth_entries}} Reward Point</li>
        </ul>
        <button class="btn btn-outline-dark pr-4 pl-4 mt-4" v-b-modal.modal-tws>Edit</button>
      </div>
      <b-modal
        id="modal-tws"
        hide-header
        centered
        modal-class="modal-edit"
        body-class="d-flex flex-column align-items-center"
      >
        <template v-slot:default>
          <div class="setupContainer">
            <TwitterShare :data="data" :default="defaultSetup.twitter_share" />
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
import TwitterShare from "@/components/setup/TwitterShare";
import { mapState } from "vuex";
export default {
  name: "CardTwitterShare",
  props: ["data", "saveData", "cancelSave"],
  components: { TwitterShare },
  computed: {
    ...mapState(["defaultSetup"])
  },
  methods: {
    updateData() {
      this.saveData("entries");
      this.$bvModal.hide("modal-tws");
    },
    cancelModal() {
      this.$bvModal.hide("modal-tws");
      this.cancelSave();
    }
  }
};
</script>