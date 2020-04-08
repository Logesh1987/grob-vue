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
    <div>
      <hr class="border-dark mb-0" />
      <div class="rewardAccordion pl-5 pr-5 pb-4" id="rewardAccordion">
        <b-card id="pointsSetupBlock" no-body class="pointsSetupBlock">
          <b-card-header header-tag="header" v-b-toggle.pointsSetup role="tab">
            <h2 class="color-green m-0">pointsSetup</h2>
            <i class="material-icons text-success">done</i>
          </b-card-header>
          <b-collapse id="pointsSetup" accordion="rewards-accordion" role="tabpanel">
            <b-card-body class="pr-0 pl-0 text-left">
              <div class="form-group fLabel col-md-5 p-0">
                <label for="rewardPoint">
                  Required Points
                  <a
                    href="#"
                    data-toggle="popover"
                    data-trigger="focus"
                    data-content="And here's some amazing content. It's very engaging. Right?"
                  >
                    <sup class="badge badge-pill badge-info">?</sup>
                  </a>
                </label>
                <input
                  type="text"
                  class="form-control valid"
                  id="rewardPoint"
                  name="rewardPoint"
                  v-model="data.required_points"
                  aria-invalid="false"
                />
              </div>
              <h6>Limit Referral Rewards Per Users?</h6>
              <div class="col-md-12 mt-2 mb-2 p-0">
                <div class="btn-group btnGrpToggle btnGrpCheck">
                  <input
                    type="checkbox"
                    v-model="data.quantity"
                    true-value="unlimited"
                    false-value="0"
                    name="limitReferral"
                    id="limitReferral"
                  />
                  <label for="limitReferral" class="m-0">
                    <span class="btn btn-outline-dark">Unlimited</span>
                    <span class="btn btn-outline-dark">Limited</span>
                  </label>
                </div>
              </div>
              <div v-if="data.quantity !== 'unlimited'" class="form-group fLabel col-md-3 p-0 mb-0">
                <label for="rewardPoint">Enter Quantity</label>
                <input
                  type="text"
                  class="form-control valid"
                  id="rewardPoint"
                  name="rewardPoint"
                  v-model="data.quantity"
                  aria-invalid="false"
                />
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card id="rewardsSetupBlock" no-body class="rewardsSetupBlock">
          <b-card-header header-tag="header" v-b-toggle.rewardsSetup role="tab">
            <h2 class="color-green m-0">rewardsSetup</h2>
            <i class="material-icons text-success">done</i>
          </b-card-header>
          <b-collapse id="rewardsSetup" accordion="rewards-accordion" role="tabpanel">
            <b-card-body class="pr-0 pl-0 text-left">
              <h6>
                Reward as a coupon?
                <div
                  class="alert alert-warning d-inline-flex align-items-center mb-0 ml-2"
                  role="alert"
                >
                  <span class="badge badge-pill badge-primary">i</span>
                  We will create coupon automatically on your webstore
                </div>
              </h6>
              <div class="col-md-12 mt-2 mb-4 p-0">
                <div class="btn-group btnGrpToggle btnGrpCheck">
                  <input
                    type="checkbox"
                    v-model="data.realtime_coupon_on"
                    true-value="1"
                    false-value="0"
                    name="rCoupon"
                    id="rCoupon"
                  />
                  <label for="rCoupon" class="m-0">
                    <span class="btn btn-outline-dark">Yes</span>
                    <span class="btn btn-outline-dark">No</span>
                  </label>
                </div>
              </div>
              <div class="themesBlock">
                <b-tabs nav-class="widget-tabs-nav" content-class="widget-tabs-panes">
                  <b-tab title="Automatic" active>
                    <h6>Coupon Type</h6>
                    <div class="row">
                      <div class="col-md-12 mt-2 mb-3">
                        <div class="alert alert-warning d-flex align-items-center" role="alert">
                          <span class="badge badge-pill badge-primary">i</span>
                          We will create coupon automatically on your webstore
                        </div>
                        <RadioGroup
                          v-model="data.realtime_coupon.type"
                          name="cTyp"
                          :options="{'Fixed amount': 'Fixed off', 'Percentage': 'Percentage off', 'Free shipping': 'Free shipping'}"
                        />
                      </div>
                      <div
                        class="row col-md-12 maxCouponValue"
                        v-if="data.realtime_coupon.type !== 'Free shipping'"
                      >
                        <div class="form-group fLabel col-md-4">
                          <div class="input-group-prepend">€</div>
                          <label for>Max. Coupon Value</label>
                          <input
                            type="number"
                            class="form-control"
                            id="rpMcv"
                            name="rpMcv"
                            v-model="data.realtime_coupon.amount"
                          />
                        </div>
                      </div>
                      <div class="row col-md-12">
                        <div class="mb-0 form-group fLabel col-md-4">
                          <div class="input-group-prepend">€</div>
                          <label for>Minimum Spend Value</label>
                          <input
                            type="number"
                            class="form-control"
                            id="rpMsv"
                            name="rpMsv"
                            v-model="data.realtime_coupon.minimum_order"
                          />
                        </div>
                      </div>
                    </div>
                  </b-tab>
                  <b-tab title="Manual">
                    <p>I'm the second tab</p>
                  </b-tab>
                </b-tabs>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <!-- CALL TO ACTIONS -->
      <div class="pl-5 pr-5 pb-5 text-left">
        <button type="submit" class="btn btn-success pl-5 pr-5 mr-2">Save</button>
        <button type="submit" @click.prevent="closeModal()" class="btn btn-dark pl-5 pr-5">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RadioGroup from "@/components/RadioGroup";
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
  components: { RadioGroup },
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
      console.log(this.rewardsData);
      console.log(id);
      return this.rewardsData.find(data => data.id === id);
    }
  },
  mounted: function() {
    this.id
      ? (this.data = this.getDataById(this.id))
      : (this.data = newSettings);
  }
};
</script>