<template>
  <div class="setupSteps" v-bind:class="{disabled: status == '0'}">
    <div class="stepHead">
      <h3>Subscribe to Newsletter Setup</h3>
      <p>Incentivize users for signing up to your newsletters.</p>
      <EnableFeature v-if="status == '0'" />
      <label class="switch" for="d31">
        <input type="checkbox" true-value="1" false-value="0" v-model="status" id="d31" />
        <i></i>
      </label>
    </div>
    <div class="stepBody">
      <div class="stepWrapper">
        <form id="form-subscribe" class="mb-0">
          <div class="form-group fLabel mt-0 mb-0 col-md-5">
            <label for="subscribeRewards">Reward Points</label>
            <input
              type="number"
              class="form-control"
              id="subscribeRewards"
              name="subscribeRewards"
              v-model="worth_entries"
            />
            <em class="error" v-if="!$v.worth_entries.required">Field is required</em>
            <em
              class="error"
              v-if="!$v.worth_entries.minValue"
            >Please enter points between 1 to 10000</em>
            <em
              class="error"
              v-if="!$v.worth_entries.maxValue"
            >Please enter points between 1 to 10000</em>
          </div>
        </form>
      </div>
    </div>
    <div class="stepFoot d-flex justify-content-end">
      <ResetBlock :handleReset="resetSettings" id="Newsletter" />
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
  maxValue
} from "vuelidate/lib/validators";
import ResetBlock from "./ResetBlock";

export default {
  name: "Newsletter",
  props: ["data", "default", "triggerReset"],
  components: { ResetBlock, EnableFeature },
  mixins: [validationMixin],
  data: function() {
    return this.data.newsletter_subscription;
  },
  methods: {
    submit() {
      this.$v.$touch();
      return !this.$v.$invalid;
    },
    resetSettings() {
      this.data.worth_entries = this.default.worth_entries;
      if (this.triggerReset) {
        setTimeout(() => {
          this.triggerReset();
        }, 500);
      }
    }
  },
  validations: {
    worth_entries: {
      required: requiredIf(function() {
        return this.status;
      }),
      minValue: minValue(1),
      maxValue: maxValue(10000)
    }
  }
};
</script>