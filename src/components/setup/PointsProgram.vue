<template>
  <div class="setupSteps" v-bind:class="{disabled: !enabled}">
    <div class="stepHead">
      <h3>Points Program</h3>
      <p>Start rewarding your customers for purchases</p>
      <label class="switch" for="pointsProgram">
        <input type="checkbox" name="mainSwitch" v-model="enabled" id="pointsProgram" />
        <i></i>
      </label>
    </div>
    <div class="stepBody">
      <div class="recommendFloater">
        <i class="material-icons info">info</i>
        <div class="floaterTxt">
          <i class="material-icons badge badge-pill badge-warning">star</i>
          Recommended setting it up as 1:1, And, you can control the redemption value through
          "2.Rewards
          Section"
        </div>
      </div>
      <div class="stepWrapper">
        <h6>Loyalty Points</h6>
        <form id="form-points-program" class="mb-0">
          <RadioGroup
            name="loyaltyPoints"
            :options="{
              fixed: 'Fixed',
              percentage: 'Percentage'
            }"
            v-model="lPoints"
          ></RadioGroup>
          <br />
          <br />
          <div
            id="input_fixed"
            v-if="lPoints === 'fixed'"
            class="loyaltyPtForm form-row align-items-start"
          >
            <div class="form-group fLabel col-md-5">
              <div class="input-group-prepend">€</div>
              <label for="purchaseFor">Purchase for</label>
              <input
                type="number"
                class="form-control"
                id="purchaseFor"
                name="purchaseFor"
                v-model.trim="priceValue"
              />
              <em class="error" v-if="!$v.priceValue.required">Field is required</em>
              <em class="error" v-if="!$v.priceValue.minValue">Need a minimum value of {{$v.priceValue.$params.minValue.min}}</em>
            </div>
            <div class="col-md-2 text-center mt-4 pt-1">to get</div>
            <div class="form-group fLabel col-md-5">
              <label for="rewardPoint">Reward Point</label>
              <input
                type="number"
                class="form-control"
                id="rewardPoint"
                name="rewardPoint"
                v-model="rewardPoint"
              />
              <em class="error" v-if="!$v.rewardPoint.required">Field is required</em>
              <em class="error" v-if="!$v.rewardPoint.minValue">Need a minimum value of {{$v.rewardPoint.$params.minValue.min}}</em>
            </div>
          </div>
          <div
            id="input_percentage"
            class="loyaltyPtForm form-row"
            v-if="lPoints === 'percentage'"
          >
            <div class="form-group fLabel col-md-5">
              <label for="purchasePercent">% of purchase amount.</label>
              <input
                type="number"
                class="form-control"
                id="purchasePercent"
                name="purchasePercent"
                v-model="percentageValue"
              />
              <em class="error" v-if="!$v.percentageValue.required">Field is required</em>
              <em class="error" v-if="!$v.percentageValue.minValue">Need a minimum value of {{$v.percentageValue.$params.minValue.min}}</em>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="stepFoot d-flex justify-content-end">
      <a
        href="#"
        class="resetSetting"
        onclick="document.getElementById('form-points-program').reset();"
      >
        <i class="material-icons">refresh</i>
        <u>Reset to recommended settings</u>
      </a>
    </div>
  </div>
</template>

<script>
import RadioGroup from "@/components/RadioGroup";
import { validationMixin } from 'vuelidate';
import { required, minValue, requiredIf } from 'vuelidate/lib/validators';

export default {
  name: "PointsProgram",
  props: ["data"],
  mixins: [validationMixin],
  components: { RadioGroup },
  data: function() {
    return this.data
  },
  methods: {
    submit() {
      this.$v.$touch()
      return !this.$v.$invalid
    }
  },
  validations: {
    priceValue: {
      required: requiredIf(function() {return this.enabled && this.lPoints === "fixed"}),
      minValue: minValue(10)
    },
    rewardPoint: {
      required: requiredIf(function() {return this.enabled && this.lPoints === "fixed"}),
      minValue: minValue(10)
    },
    percentageValue: {
      required: requiredIf(function() {return this.enabled && this.lPoints === "percentage"}),
      minValue: minValue(10)
    }
  }
};
</script>