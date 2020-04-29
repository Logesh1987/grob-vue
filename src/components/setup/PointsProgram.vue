<template>
  <div class="setupSteps" v-bind:class="{disabled: !vData.purchase_status}">
    <div class="stepHead">
      <h3>Points Program</h3>
      <p>Start rewarding your customers for purchases</p>
      <label class="switch" for="d22">
        <input
          type="checkbox"
          true-value="1"
          false-value="0"
          name="mainSwitch"
          v-model="vData.purchase_status"
          id="d22"
        />
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
              0: 'Fixed',
              1: 'Percentage'
            }"
            v-model="vData.is_points_percentage"
          ></RadioGroup>
          <br />
          <br />
          <div
            id="input_fixed"
            v-if="vData.is_points_percentage == 0"
            class="loyaltyPtForm form-row align-items-start"
          >
            <div class="form-group fLabel col-md-5">
              <div class="input-group-prepend">{{ vData.currency }}</div>
              <label for="purchaseFor">Purchase for</label>
              <input
                type="number"
                class="form-control"
                id="purchaseFor"
                name="purchaseFor"
                v-model.trim="vData.price"
              />
              <em class="error" v-if="!$v.vData.price.required">Value is required</em>
              <em
                class="error"
                v-if="!$v.vData.price.minValue"
              >Enter a minimum value of {{$v.vData.price.$params.minValue.min}}</em>
              <em
                class="error"
                v-if="!$v.vData.price.maxLength"
              >Allowed {{$v.vData.price.$params.maxLength.max}} digits max</em>
            </div>
            <div class="col-md-2 text-center mt-4 pt-1">to get</div>
            <div class="form-group fLabel col-md-5">
              <label for="rewardPoint">Reward Point</label>
              <input
                type="number"
                class="form-control"
                id="rewardPoint"
                name="rewardPoint"
                v-model="vData.points"
              />
              <em class="error" v-if="!$v.vData.points.required">Value is required</em>
              <em
                class="error"
                v-if="!$v.vData.points.minValue"
              >Need a minimum value of {{$v.vData.points.$params.minValue.min}}</em>
              <em
                class="error"
                v-if="!$v.vData.points.maxLength"
              >Allowed {{$v.vData.points.$params.maxLength.max}} digits max</em>
            </div>
          </div>
          <div
            id="input_percentage"
            class="loyaltyPtForm form-row"
            v-if="vData.is_points_percentage == 1"
          >
            <div class="form-group fLabel col-md-5">
              <label for="purchasePercent">% of purchase amount.</label>
              <input
                type="number"
                class="form-control"
                id="purchasePercent"
                name="purchasePercent"
                v-model="vData.points_percentage"
              />
              <em class="error" v-if="!$v.vData.points_percentage.required">Value is required</em>
              <em
                class="error"
                v-if="!$v.vData.points_percentage.minValue"
              >Need a minimum value of {{$v.vData.points_percentage.$params.minValue.min}}</em>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="stepFoot d-flex justify-content-end">
      <ResetBlock :handleReset="resetSettings" id="PointsProgram" />
    </div>
  </div>
</template>

<script>
import RadioGroup from "@/components/RadioGroup";
import { validationMixin } from "vuelidate";
import {
  required,
  minValue,
  requiredIf,
  maxLength
} from "vuelidate/lib/validators";
import ResetBlock from "./ResetBlock";

export default {
  name: "PointsProgram",
  props: ["data", "default", "triggerReset"],
  mixins: [validationMixin],
  components: { RadioGroup, ResetBlock },
  data: function() {
    return {
      vData: this.data
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      return !this.$v.$invalid;
    },
    resetSettings() {
      this.data.purchase_status = this.default.purchase_status;
      this.data.is_points_percentage = this.default.is_points_percentage;
      this.data.price = this.default.price;
      this.data.points = this.default.points;
      this.data.points_percentage = this.default.points_percentage;
      setTimeout(() => {
        this.triggerReset();
      }, 500);
    }
  },
  watch: {
    data() {
      this.vData = this.data;
    }
  },
  validations: {
    vData: {
      price: {
        required,
        minValue: minValue(1),
        maxLength: maxLength(9)
      },
      points: {
        required,
        minValue: minValue(1),
        maxLength: maxLength(9)
      },
      points_percentage: {
        required: requiredIf(function() {
          return this.purchase_status && this.is_points_percentage == 1;
        }),
        minValue: minValue(1)
      }
    }
  }
};
</script>