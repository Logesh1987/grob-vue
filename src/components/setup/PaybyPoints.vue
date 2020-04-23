<template>
  <div class="setupSteps" v-bind:class="{disabled: !redeem_purchase_status}">
    <div class="stepHead">
      <h3>Pay by Points</h3>
      <p>Setup if customers can pay using their points</p>
      <label class="switch" for="d25">
        <input type="checkbox" name="mainSwitch" v-model="redeem_purchase_status" id="d25" />
        <i></i>
      </label>
    </div>
    <div class="stepBody">
      <div class="stepWrapper">
        <h6>Set Reward Point Value</h6>
        <form id="form-payby-points" class="mb-0">
          <div class="form-row align-items-start">
            <div class="form-group fLabel col-md-2">
              <div class="input-group-prepend">{{ currency }}</div>
              <input type="number" readonly class="form-control" id="inputEmail4" value="1" />
            </div>
            <div class="col-md-3 text-center mt-4 pt-1">is equal to</div>
            <div class="form-group fLabel col-md-4">
              <label for="pbpRewardpoints">Reward Point</label>
              <input
                type="number"
                class="form-control"
                id="pbpRewardpoints"
                name="pbpRewardpoints"
                v-model="redeem_point_per_dollar"
              />
            </div>
            <div class="col-md-2 text-center mt-4">
              <a
                href="#"
                class="btn btn-link sampleModalTrigger"
                data-img="https://picsum.photos/id/1082/640/480"
              >Sample</a>
            </div>
            <label class="error col-md-10" v-if="!$v.redeem_point_per_dollar.required">Field is required</label>
            <label
              class="error col-md-10"
              v-if="!$v.redeem_point_per_dollar.minValue"
            >Need a minimum value of {{$v.redeem_point_per_dollar.$params.minValue.min}}</label>
          </div>
        </form>
      </div>
    </div>
    <div class="stepFoot">&nbsp;</div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minValue, requiredIf } from "vuelidate/lib/validators";

export default {
  name: "PaybyPoints",
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
    redeem_point_per_dollar: {
      required: requiredIf(function() {
        return this.redeem_purchase_status;
      }),
      minValue: minValue(100)
    }
  }
};
</script>