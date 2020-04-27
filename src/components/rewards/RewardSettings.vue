<template>
  <div>
    <!-- <a href @click.prevent="closeModal()">&times;</a> -->

    <div class="rewardsSettingBlock pl-5 pr-5 pt-4 pb-4 row m-0 text-left">
      <h6 class="col-12 color-green mb-4">Reward Settings</h6>
      <div class="col-6">
        <label>Choose / Upload product cover image</label>
        <div class="d-flex flex-wrap coverImgList justify-content-between">
          <span
            v-for="img in imgGroup"
            :key="img"
            :class="{active: data.image_url === img}"
            @click="data.image_url = img"
          >
            <img :src="img" alt />
          </span>
        </div>
        <!-- <label for="coverImg" class="btn-file d-block text-center mt-3">
          <input type="file" id="coverImg" />
          <button class="btn btn-dark pl-5 pr-5">Upload</button>
        </label>
        <small class="d-block mt-3">
          Recommended width is 300 x 300 pixels. (Images must be GIF, JPEG, JPG, PNG
          and
          maximum of 2MB Limit).
        </small>-->
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
                  v-model="data.required_minimum_points"
                  aria-invalid="false"
                />
              </div>
              <h6>Limit Referral Rewards Per Users?</h6>
              <div class="col-md-12 mt-2 mb-2 p-0">
                <div class="btn-group btnGrpToggle btnGrpCheck">
                  <input
                    type="checkbox"
                    v-model="data.quantity"
                    true-value="0"
                    false-value="1"
                    name="limitReferral"
                    id="limitReferral"
                  />
                  <label for="limitReferral" class="m-0">
                    <span class="btn btn-outline-dark">Unlimited</span>
                    <span class="btn btn-outline-dark">Limited</span>
                  </label>
                </div>
              </div>
              <div v-if="data.quantity > 0" class="form-group fLabel col-md-3 p-0 mb-0">
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
                    v-model="data.is_coupon"
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
              <div v-if="data.is_coupon == 1" class="themesBlock">
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
                          :options="{'2': 'Fixed off', '1': 'Percentage off', '3': 'Free shipping'}"
                        />
                      </div>
                      <div
                        class="row col-md-12 maxCouponValue"
                        v-if="data.realtime_coupon.type !== '3'"
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
                      <div class="row col-md-12">
                        <div class="mb-0 form-group fLabel col-md-10">
                          <label for>Manual coupons</label>
                          <input
                            type="text"
                            class="form-control"
                            id="mcoupn"
                            name="mcoupn"
                          />
                          <small>Add Coupons as comma separated values</small>
                        </div>
                      </div>
                  </b-tab>
                </b-tabs>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <!-- CALL TO ACTIONS -->
      <div class="pl-5 pr-5 pb-5 text-left">
        <button
          type="submit"
          @click.prevent="handleSubmit"
          class="btn btn-success pl-5 pr-5 mr-2"
        >Save</button>
        <button type="submit" @click.prevent="closeModal()" class="btn btn-dark pl-5 pr-5">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import RadioGroup from "@/components/RadioGroup";

export default {
  name: "RewardSettings",
  props: ["id", "closeModal"],
  components: { RadioGroup },
  data: function() {
    return {
      data: {},
      imgGroup: [
        "https://s3.us-east-1.amazonaws.com/devam.pro/gr/master/upload/img/683/83/3683_loyalty_1587031987.png",
        "https://s3.us-east-1.amazonaws.com/devam.pro/gr/master/upload/img/683/83/3683_loyalty_1587034530.png",
        "https://s3.us-east-1.amazonaws.com/devam.pro/gr/master/upload/img/683/83/3683_loyalty_1587032899.png",
        "https://s3.us-east-1.amazonaws.com/devam.pro/gr/master/upload/img/683/83/3683_loyalty_1587033446.png",
        "https://s3.us-east-1.amazonaws.com/devam.pro/gr/master/upload/img/683/83/3683_loyalty_1587033494.png"
      ],
      newSettings: {
        name: "Default title",
        description: "Default Description",
        required_minimum_points: 100,
        is_unlimited: 1,
        quantity: 0,
        image_url: "",
        type: "Coupon",
        is_coupon: 1,
        order: 1,
        realtime_coupon_on: 1,
        nb_rewards: 0,
        realtime_coupon: {
          type: "1",
          amount: 50,
          minimum_order: 100
        }
      }
    };
  },
  computed: {
    ...mapState(["rewardsData"])
  },
  methods: {
    ...mapActions([
      "addReward",
      "getRewardsData",
      "updateReward"
    ]),
    getDataById: function(id) {
      return this.rewardsData.find(data => data.id == id);
    },
    handleSubmit: function() {
      // EDIT REWARD - post functionality 
      if (this.id) {
        this.updateReward(this.data).then(res => {
          this.getRewardsData().then(re => {
            console.log("Reward updated SUccessfuly");
          }); 
        });
        
      } else {
        // ADD REWARD - post functionality 
        this.data.status = 1; 
        this.addReward(this.data).then(res => {
          this.getRewardsData().then(re => {
            console.log("Reward Added SUccessfuly");
          }); 
        });
      }
      this.closeModal();
    }
  },
  mounted: function() {
    this.id
      ? (this.data = this.getDataById(this.id))
      : (this.data = this.newSettings);
  }
};
</script>