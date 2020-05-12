<template>
  <div class="setupSteps" v-bind:class="{disabled: review_status == '0'}">
    <div class="stepHead">
      <h3>WOOReview Rewards</h3>
      <p>Reward reviews of products, services by incentivizing</p>
      <EnableFeature v-if="review_status == '0'" />
      <label class="switch" for="d20">
        <input
          type="checkbox"
          true-value="1"
          false-value="0"
          name="mainSwitch"
          v-model="review_status"
          id="d20"
        />
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
            <em
              class="error"
              v-if="!$v.points.maxLength"
            >Allowed {{$v.points.$params.maxLength.max}} digits max</em>
          </div>
          <div class="col-md-12">
            <div class="custom-control d-flex scale-8 to-00 custom-checkbox">
              <input
                type="checkbox"
                true-value="1"
                false-value="0"
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
      <ResetBlock :handleReset="resetSettings" id="WooRewards" />
    </div>
  </div>
</template>

<script>
import EnableFeature from "./EnableFeature.vue";
import { validationMixin } from "vuelidate";
import {
  required,
  minValue,
  requiredIf,
  maxLength
} from "vuelidate/lib/validators";
import ResetBlock from "./ResetBlock";

export default {
  name: "WooRewards",
  props: ["data", "default", "triggerReset"],
  components: { ResetBlock, EnableFeature },
  mixins: [validationMixin],
  data: function() {
    return this.data.woo_reviews;
  },
  methods: {
    submit() {
      this.$v.$touch();
      return !this.$v.$invalid;
    },
    resetSettings() {
      this.data.points = this.default.points;
      this.data.is_approved_only = this.default.is_approved_only;
      if (this.triggerReset) {
        setTimeout(() => {
          this.triggerReset();
        }, 500);
      }
    }
  },
  validations: {
    points: {
      required: requiredIf(function() {
        return this.review_status;
      }),
      minValue: minValue(1),
      maxLength: maxLength(5)
    }
  }
};
</script>