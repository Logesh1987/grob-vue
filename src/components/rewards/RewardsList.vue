<template>
  <div class="rewardList" v-if="data">
    <div class="rewardItem" v-for="item in data" :key="item.id">
      <div class="rewardDragger">
        <i class="material-icons">reorder</i>
      </div>
      <div class="rewardThumb">
        <figure :style="{ 'background-image': `url('${item.image_url}')` }"></figure>
      </div>
      <div class="rewardInfo">
        <h5>
          <strong>{{ item.name }}</strong>
        </h5>
        <p>{{ item.description }}</p>
        <hr />
        <div class="details">
          <span>Qty</span>
          <strong>{{ item.quantity > 0 ? item.quantity : 'Unlimited' }}</strong>
          <span>Required Points</span>
          <strong>{{ item.required_minimum_points }} {{ item.required_minimum_points > 1 ? 'Pts' : 'Point'}}</strong>
        </div>
      </div>
      <div class="rewardControls">
        <!-- <a href="#" class="text-success">
          <i class="material-icons">check</i>
        </a>-->
        <label class="switch" :for="item.id">
          <input
            type="checkbox"
            :id="item.id"
            checked="false"
            true-value="1"
            false-value="0"
            v-model="item.status"
            @change="handleSwitch(item)"
          />
          <i></i>
        </label>
        <a href="#" @click.prevent="handleEditRewards(item.id)">
          <i class="icon-undefined"></i>
        </a>
        <a href="#" @click.prevent="showConfirmModal(item.id)">
          <i class="material-icons">delete_outline</i>
        </a>
      </div>
    </div>

    <!-- DELETE MODAL -->
    <b-modal
      id="modal-delete"
      ref="modalDelete"
      hide-footer
      hide-header
      centered
      modal-class="setupModal modal-skip"
      body-class="d-flex flex-column align-items-center"
    >
      <template v-slot:default="{ hide }">
        <h4>Do you wish to delete</h4>
        <h5>Are you sure?</h5>
        <button
          class="btn btn-success pr-5 pl-5 mt-4"
          @click.prevent="handleDeleteRewards(selectedItem)"
        >confirm</button>
        <button
          @click.prevent="selectedItem = null; hide()"
          class="btn btn btn-link pr-5 pl-5 mb-2"
        >cancel</button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "RewardsList",
  props: ["data", "setEditReward", "setDeleteReward", "showModal"],
  data: function() {
    return {
      ...this.data,
      selectedItem: null
    };
  },

  methods: {
    ...mapActions(["getRewardsData", "updateReward", "deleteReward"]),
    handleEditRewards: function(id) {
      this.setEditReward(id);
      this.showModal();
    },
    handleDeleteRewards: function(id) {
      this.deleteReward(id).then(res => {
        this.selectedItem = null;
        this.$bvModal.hide("modal-delete");
        console.log("*******  DELETEED  ***********");
      });
    },
    handleSwitch: function(item) {
      item.status = item.status == true ? 1 : 0;
      this.updateReward(item).then(res => {
        console.log("********************************************");
      });
    },
    showConfirmModal: function(item) {
      this.selectedItem = item;
      this.$bvModal.show("modal-delete");
    }
  }
};
</script>