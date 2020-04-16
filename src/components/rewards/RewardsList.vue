<template>
  <div class="rewardList" v-if="data">
    <div class="rewardItem" v-for="item in data" :key="item.id">
      <div class="rewardDragger">
        <i class="material-icons">reorder</i>
      </div>
      <div class="rewardThumb">
        <figure
          :style="{ 'background-image': `url('${item.image_url}')` }"
        ></figure>
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
        <a href="#" class="text-success">
          <i class="material-icons">check</i>
        </a>
        <a href="#" @click.prevent="handleEditRewards(item.id)">
          <i class="icon-undefined"></i>
        </a>
        <label class="switch" for="r1">
          <input type="checkbox" checked id="r1" />
          <i></i>
        </label>
        <a href="#" @click.prevent="handleDeleteRewards(item.id)">
          <i class="material-icons">delete_outline</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "RewardsList",
  props: ["data", "setEditReward", "setDeleteReward", "showModal"],
  data: function() {
    return this.data;
  },

  methods: {
    ...mapActions([
      "deleteReward",
      "getRewardsData"
    ]),
    handleEditRewards: function(id) {
      this.updateReward(this.data).then(res => {
          this.getRewardsData().then(re => {
          this.saved.setupBlock = true;
        }); 
      });
    },
    handleDeleteRewards: function(id) {
      this.deleteReward(id).then(res => {
          this.getRewardsData().then(re => {

        }); 
      });
    }
  }
};
</script>