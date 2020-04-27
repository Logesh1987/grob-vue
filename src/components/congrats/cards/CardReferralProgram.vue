<template>
  <div class="setupItemList">
    <div class="stepHead">
      <h3>Referral Program</h3>
      <p>Setup refer a friend program</p>
      <label class="switch" for="card-rp">
        <input type="checkbox" true-value="1" false-value="0" v-model="data.status" @change="saveData" id="card-rp" />
        <i></i>
      </label>
    </div>
    <div class="setupListBody">
      <ul class="mt-4 mb-4">
        <li>1 referral to have {{data.is_rwd_points_percentage ? data.rwd_points_percentage : data.referrer_reward_points}} reward {{data.is_rwd_points_percentage ? 'percentage' : 'points'}}</li>
        <li v-if="data.realtime_coupon_type_friend ==  3 ">Free shipping, {{parseInt(data.realtime_min_order_friend) ? data.realtime_min_order_friend : 'no'}} minimum value </li>
        <li v-else>
          {{data.realtime_coupon_type_friend == 1 ? data.realtime_coupon_value_friend : data.realtime_coupon_type_friend == 2 ? data.realtime_coupon_value_friend+'%': ''}}
          coupon with {{data.realtime_coupon_type_friend == 1 ? 'Fixed' : data.realtime_coupon_type_friend == 2 ? 'Percentage': ''}} off,
          {{parseInt(data.realtime_min_order_friend) ? data.realtime_min_order_friend : 'no'}} minimum value
        </li>
      </ul>
      <button class="btn btn-outline-dark pr-4 pl-4 mt-4" v-b-modal.modal-rp>Edit</button>
    </div>
    <b-modal
      id="modal-rp"
      hide-header
      centered
      modal-class="modal-edit"
      body-class="d-flex flex-column align-items-center"
    >
      <template v-slot:default>
        <div class="setupContainer">
          <ReferralProgram :data="data" />
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
import ReferralProgram from "@/components/setup/ReferralProgram.vue";
export default {
  name: "CardReferralProgram",
  props: ["data", "saveData", "cancelSave"],
  components: { ReferralProgram },
  methods: {
    updateData() {
      this.saveData();
      this.$bvModal.hide("modal-rp");
    },
    cancelModal() {
      this.$bvModal.hide("modal-rp");
      this.cancelSave();
    }
  }
};
</script>