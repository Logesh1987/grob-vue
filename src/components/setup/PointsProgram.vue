<template>
  <div class="setupSteps" v-bind:class="{disabled: !data.enabled}">
    <div class="stepHead">
      <h3>Points Program</h3>
      <p>Start rewarding your customers for purchases</p>
      <label class="switch" for="pointsProgram">
        <input type="checkbox" name="mainSwitch" v-model="data.enabled" id="pointsProgram" />
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
            v-model="data.lPoints"
          ></RadioGroup>
          <br />
          <br />
          <div
            id="input_fixed"
            v-if="data.lPoints === 'fixed'"
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
                v-model="data.priceValue"
              />
            </div>
            <div class="col-md-2 text-center mt-4 pt-1">to get</div>
            <div class="form-group fLabel col-md-5">
              <label for="rewardPoint">Reward Point</label>
              <input
                type="number"
                class="form-control"
                id="rewardPoint"
                name="rewardPoint"
                v-model="data.rewardPoint"
              />
            </div>
            <div class="col-6" id="purchaseFor-errorWrap"></div>
            <div class="col-6" id="rewardPoint-errorWrap"></div>
          </div>
          <div
            id="input_percentage"
            class="loyaltyPtForm form-row"
            v-if="data.lPoints === 'percentage'"
          >
            <div class="form-group fLabel col-md-5">
              <label for="purchasePercent">% of purchase amount.</label>
              <input
                type="number"
                class="form-control"
                id="purchasePercent"
                name="purchasePercent"
                v-model="data.percentageValue"
              />
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

export default {
  name: "PointsProgram",
  props: ["data"],
  components: { RadioGroup }
};
</script>