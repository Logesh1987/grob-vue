<template>
  <div class="setupSteps" v-bind:class="{disabled: !enabled}">
    <div class="stepHead">
      <h3>Sign Up Bonus</h3>
      <p>Reward customers for creating an account on your store</p>
      <label class="switch" for="signupBonus">
        <input type="checkbox" name="mainSwitch" v-model="enabled" id="signupBonus" />
        <i></i>
      </label>
    </div>
    <div class="stepBody">
      <div v-if="!enabled" class="alert alert-warning upmarketing">
        This feature could boost your sales by
        <br />200% from our customers reviews
      </div>
      <div class="stepWrapper">
        <form id="form-signup-bonus" class="mb-0">
          <div class="row">
            <div class="form-group fLabel col-md-6">
              <label for="welcomeBonus">Welcome Bonus Point</label>
              <input
                type="number"
                class="form-control"
                name="welcomeBonus"
                id="welcomeBonus"
                v-model.trim="welcome_points"
              />
              <em class="error" v-if="!$v.welcome_points.required">Field is required</em>
              <em class="error" v-if="!$v.welcome_points.minValue">Need a minimum value of {{$v.welcome_points.$params.minValue.min}}</em>
            </div>
          </div>
          <!-- <br><h6>Welcome Note</h6>
                          <div class="row d-flex align-items-center">
                            <div class="col-md-5 pr-0">
                              <div class="btn-group btnGrpToggle btnGrpCheck">
                                <input type="checkbox" id="welcomeNoteMandate">
                                <label for="welcomeNoteMandate"class="mb-0">
                                  <span class="btn btn-outline-dark">Show</span>
                                  <span class="btn btn-outline-dark">Hidden</span>
                                </label>
                              </div>
                            </div>
                            <a href="#" class="btn btn-link sampleModalTrigger" data-img="https://picsum.photos/id/1071/640/480">Sample</a>
                          </div>
                          <div class="form-row align-items-center">
                            <div class="form-group col-md-12">
                              <label for="inputEmail4">Welcome Note</label>
                              <textarea class="form-control" name="welcomeNote" id="welcomeNote" cols="30"
                                rows="5"></textarea>
                            </div>
          </div>-->
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
  name: "SignupBonus",
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
    welcome_points: {
      required: requiredIf(function() {
        return this.enabled;
      }),
      minValue: minValue(100)
    }
  }
};
</script>