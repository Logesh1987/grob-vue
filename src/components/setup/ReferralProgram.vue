<template>
  <div class="setupSteps" v-bind:class="{disabled: !enabled}">
    <div class="stepHead">
      <h3>Referral Program</h3>
      <p>Setup refer a friend program</p>
      <label class="switch" for="referralProgram">
        <input
          type="checkbox"
          name="mainSwitch"
          v-model="enabled"
          id="referralProgram"
        />
        <i></i>
      </label>
    </div>
    <div class="stepBody">
      <div class="stepWrapper">
        <h6>Get</h6>
        <form id="form-referral-program" class="mb-0">
          <div class="row">
            <div class="col-md-12 mt-2 mb-3">
              <RadioGroup
                name="loyaltyPoints"
                :options="{
                  fixed: 'Fixed',
                  percentage: 'Percentage'
                }"
                v-model="rpType"
              ></RadioGroup>
            </div>
            <div
              class="referralOffer"
              id="referral_fixed"
              v-if="rpType === 'fixed'"
            >
              <div class="d-flex">
                <div class="mt-2 mb-2 form-group fLabel col-md-5">
                  <label for>Reward points</label>
                  <input
                    type="number"
                    class="form-control"
                    id="rpRewardpoints"
                    name="rpRewardpoints"
                    v-model="rewardPoint"
                  />
                <em class="error" v-if="!$v.rewardPoint.required">Field is required</em>
                <em class="error" v-if="!$v.rewardPoint.minValue">Need a minimum value of {{$v.rewardPoint.$params.minValue.min}}</em>
                </div>
                <div class="col-md-5 p-0 d-flex align-items-center">
                  <small>
                    When referrer
                    <br />reach referral goal
                  </small>
                </div>
              </div>
            </div>
            <div
              class="referralOffer"
              id="referral_percentage"
              v-if="rpType === 'percentage'"
            >
              <div class="d-flex row m-0">
                <div class="mt-2 mb-2 form-group fLabel col-md-5">
                  <label for>Reward Percentage</label>
                  <input
                    type="number"
                    class="form-control"
                    id="rpRewardpoints"
                    name="rpRewardpoints"
                    v-model="rewardPercentage"
                  />
                <em class="error" v-if="!$v.rewardPercentage.required">Field is required</em>
                <em class="error" v-if="!$v.rewardPercentage.minValue">Need a minimum value of {{$v.rewardPercentage.$params.minValue.min}}</em>
                </div>
                <div class="col-md-5 p-0 d-flex align-items-center">
                  <small>
                    calculated from that
                    <br />referred order value
                  </small>
                </div>
                <div class="col-md-10 mt-2">
                  <div class="alert alert-warning d-flex align-items-center m-0" role="alert">
                    <span class="badge badge-pill badge-primary">i</span>
                    Your goal is set to 1, you will be rewarded based
                    <br />on referral count when
                    percentage is selected
                  </div>
                </div>
              </div>
            </div>
            <!-- sad -->
          </div>
          <hr class="mt-4 mb-4" />
          <!-- <h6>Goals</h6>
                          <div class="row">
                            <div class="mt-2 mb-2 form-group col-md-5">
                              <label for="">Total Numbers</label>
                              <input type="number" class="form-control" id="rpTotalGoals" name="rpTotalGoals" value="1">
                            </div>
                            <div class="col-md-12">
                              <a href="#" class="btn btn-link p-0"><small>Get no. of invited friends to
                                  purchase</small></a>
                            </div>
                          </div>
                          <hr class="mt-4 mb-4">
                          <h6>Limit Referral Rewards Per Users?</h6>
                          <div class="row">
                            <div class="col-md-12 mt-2 mb-3">
                              <div class="btn-group btnGrpToggle btnGrpCheck">
                                <input type="checkbox" checked name="limitReferral" id="limitReferral">
                                <label for="limitReferral">
                                  <span class="btn btn-outline-dark">Yes</span>
                                  <span class="btn btn-outline-dark">No</span>
                                </label>
                              </div>
                            </div>
                            <div id="limitReferralForm" class="mt-3 mb-2 form-group col-md-5">
                              <label for="">Max. Rewards</label>
                              <input type="number" class="form-control" id="rpMaxrewards" name="rpMaxrewards" value="1">
                            </div>
                          </div>
          <hr class="mt-4 mb-4">-->
          <h6>Coupon Type</h6>
          <div class="row">
            <div class="col-md-12 mt-2 mb-3">
              <div class="alert alert-warning d-flex align-items-center" role="alert">
                <span class="badge badge-pill badge-primary">i</span>
                We will create coupon automatically on your webstore
              </div>
              <RadioGroup
                name="cType"
                :options="{
                  fixed: 'Fixed off',
                  percentage: 'Percentage off',
                  freeship: 'Free shipping'
                }"
                v-model="rpCouponType"
              ></RadioGroup>
            </div>
            <div
              class="row col-md-12 maxCouponValue"
              v-if="rpCouponType !== 'freeship'"
            >
              <div class="form-group fLabel col-md-6">
                <div class="input-group-prepend">€</div>
                <label for>Max. Coupon Value</label>
                <input type="number" class="form-control" id="rpMcv" name="rpMcv" v-model="maxCouponVal" />
                <em class="error" v-if="!$v.maxCouponVal.required">Field is required</em>
                <em class="error" v-if="!$v.maxCouponVal.minValue">Need a minimum value of {{$v.maxCouponVal.$params.minValue.min}}</em>
              </div>
            </div>
            <div class="row col-md-12">
              <div class="mb-0 form-group fLabel col-md-6">
                <div class="input-group-prepend">€</div>
                <label for>Minimum Spend Value</label>
                <input type="number" class="form-control" id="rpMsv" name="rpMsv" v-model="minSpendVal" />
                <em class="error" v-if="!$v.minSpendVal.required">Field is required</em>
                <em class="error" v-if="!$v.minSpendVal.minValue">Need a minimum value of {{$v.minSpendVal.$params.minValue.min}}</em>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="stepFoot d-flex justify-content-end">
      <a
        href="#"
        class="resetSetting"
        onclick="document.getElementById('form-referral-program').reset();"
      >
        <i class="material-icons">refresh</i>
        <u>Reset to recommended settings</u>
      </a>
    </div>
  </div>
</template>

<script>
import RadioGroup from "@/components/RadioGroup";
import { validationMixin } from "vuelidate";
import { required, minValue, requiredIf } from "vuelidate/lib/validators";

export default {
  name: "ReferralProgram",
  props: ["data"],
  mixins: [validationMixin],
  components: { RadioGroup },
  data: function() {
    return this.data;
  },
  methods: {
    submit() {
      this.$v.$touch();
      return !this.$v.$invalid;
    }
  },
  validations: {
    rewardPoint: {
      required: requiredIf(function() {return this.enabled && this.rpType === "fixed"}),
      minValue: minValue(10)
    },
    rewardPercentage: {
      required: requiredIf(function() {return this.enabled && this.rpType === "fixed"}),
      minValue: minValue(10)
    },
    maxCouponVal: {
      required: requiredIf(function() {return this.enabled && this.rpCouponType !== "freeship"}),
      minValue: minValue(20)
    },
    minSpendVal: {
      required: requiredIf(function() {return this.enabled}),
      minValue: minValue(1)
    }

    // welcome_points: {
    //   required: requiredIf(function() {
    //     return this.enabled;
    //   }),
    //   minValue: minValue(100)
    // }
  }
};
</script>