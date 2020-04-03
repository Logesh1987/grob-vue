<template>
  <div class="setupSteps" v-bind:class="{disabled: !enabled}">
    <div class="stepHead">
      <h3>WOOReview Rewards</h3>
      <p>Reward reviews of products, services by incentivizing</p>
      <label class="switch" for="wooSetup">
        <input type="checkbox" name="mainSwitch" v-model="enabled" id="wooSetup" />
        <i></i>
      </label>
    </div>
    <div class="stepBody">
      <div class="stepWrapper">
        <form id="form-woo-rewards" class="mb-0">
          <div class="form-group fLabel col-md-6 mb-2">
            <label for="wooRewards">Reward points per review</label>
            <input
              type="text"
              class="form-control"
              id="wooRewards"
              name="wooRewards"
              v-model="rewardPoint"
            />
            <em class="error" v-if="!$v.rewardPoint.required">Field is required</em>
            <em
              class="error"
              v-if="!$v.rewardPoint.minValue"
            >Need a minimum value of {{$v.rewardPoint.$params.minValue.min}}</em>
          </div>
          <div class="col-md-12">
            <div class="custom-control d-flex scale-8 to-00 custom-checkbox">
              <input
                type="checkbox"
                v-model="approvedReviews"
                class="custom-control-input"
                id="woo"
              />
              <label class="custom-control-label" for="woo">Reward only for approved reviews</label>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="stepFoot d-flex justify-content-end">
      <a
        href="#"
        class="resetSetting"
        onclick="document.getElementById('form-woo-rewards').reset();"
      >
        <i class="material-icons">refresh</i>
        <u>Reset to recommended settings</u>
      </a>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minValue, requiredIf } from "vuelidate/lib/validators";

export default {
  name: "WooRewards",
  props: ["data"],
  mixins: [validationMixin],
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
      required: requiredIf(function() {
        return this.enabled;
      }),
      minValue: minValue(100)
    }
  }
};
</script>