<template>
  <div class="setupSteps" v-bind:class="{disabled: status != 1}">
    <div class="stepHead">
      <h3>Subscribe to Newsletter Setup</h3>
      <p>Incentivize users for signing up to your newsletters.</p>
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
            >Need a minimum value of {{$v.worth_entries.$params.minValue.min}}</em>
          </div>
        </form>
      </div>
    </div>
    <div class="stepFoot d-flex justify-content-end">
      <a
        href="#"
        class="resetSetting"
        onclick="document.getElementById('form-signup-bonus').reset();"
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
  name: "Newsletter",
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
    worth_entries: {
      required: requiredIf(function() {
        return this.status;
      }),
      minValue: minValue(1)
    }
  }
};
</script>