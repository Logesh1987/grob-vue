<template>
  <div>
    <!-- <a href @click.prevent="closeModal()">&times;</a> -->

    <div class="rewardsSettingBlock pl-5 pr-5 pt-4 pb-4 row m-0 text-left">
      <h6 class="col-12 color-green mb-4">Reward Settings</h6>
      <div class="col-6">
        <label>Choose / Upload product cover image</label>
        <div class="d-flex coverImgList justify-content-between">
          <img src="https://picsum.photos/id/237/200/200" alt />
          <img src="https://picsum.photos/id/200/200" alt />
          <img src="https://picsum.photos/id/721/200/200" alt />
          <img src="https://picsum.photos/id/1/200/200" alt />
        </div>
        <label for="coverImg" class="btn-file d-block text-center mt-3">
          <input type="file" id="coverImg" />
          <button class="btn btn-dark pl-5 pr-5">Upload</button>
        </label>
        <small class="d-block mt-3">
          Recommended width is 300 x 300 pixels. (Images must be GIF, JPEG, JPG, PNG
          and
          maximum of 2MB Limit).
        </small>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label>
            Title
            <a
              href="#"
              data-toggle="popover"
              data-trigger="focus"
              data-content="And here's some amazing content. It's very engaging. Right?"
            >
              <sup class="badge badge-pill badge-info">?</sup>
            </a>
          </label>
          <input type="text" v-model="data.name" class="form-control" />
        </div>
        <div class="form-group">
          <label>
            Description
            <a
              href="#"
              data-toggle="popover"
              data-trigger="focus"
              data-content="And here's some amazing content. It's very engaging. Right?"
            >
              <sup class="badge badge-pill badge-info">?</sup>
            </a>
          </label>
          <textarea name class="form-control" v-model="data.description" cols="30" rows="3"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
const newSettings = {
  name: "Default title",
  description: "Default Description",
  required_points: 100,
  quantity: "unlimited",
  image: "assets/img/reward.jpg",
  type: "Coupon",
  is_coupon: true,
  realtime_coupon: true,
  order: 1,
  realtime_coupon_on: 1,
  nb_rewards: 0,
  coupon: {
    type: "Percentage",
    amount: 50,
    minimum_order: 100
  }
};
export default {
  name: "RewardSettings",
  props: ["id", "closeModal"],
  data: function() {
    return {
      data: {}
    };
  },
  computed: {
      ...mapState(["rewardsData"])
  },
  methods: {
    getDataById: function(id) {
        return this.rewardsData.find(data => data.id === id)
    }
  },
  mounted: function() {
    this.id
      ? (this.data = this.getDataById(parseInt(this.id)))
      : (this.data = newSettings);
  }
};
</script>