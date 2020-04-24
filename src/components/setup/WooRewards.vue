<template>
  <div class="setupSteps" v-bind:class="{disabled: !review_status}">
    <div class="stepHead">
      <h3>WOOReview Rewards</h3>
      <p>Reward reviews of products, services by incentivizing</p>
      <label class="switch" for="d20">
        <input type="checkbox" name="mainSwitch" v-model="review_status" id="d20" />
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
              v-model="points"
            />
            <em class="error" v-if="!$v.points.required">Field is required</em>
            <em
              class="error"
              v-if="!$v.points.minValue"
            >Need a minimum value of {{$v.points.$params.minValue.min}}</em>
          </div>
          <div class="col-md-12">
            <div class="custom-control d-flex scale-8 to-00 custom-checkbox">
              <input
                type="checkbox"
                v-model="is_approved_only"
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
    points: {
      required: requiredIf(function() {
        return this.review_status;
      }),
      minValue: minValue(1)
    }
  }
};
</script>