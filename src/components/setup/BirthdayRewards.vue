<template>
  <div class="setupSteps" v-bind:class="{disabled: status == '0'}">
    <div class="stepHead">
      <h3>Birthday Rewards</h3>
      <p>
        This event will appear on your site's loyalty program,
        <br />prompting visitors and members to
        enter a date
      </p>
      <EnableFeature v-if="status == '0'" />
      <label class="switch" for="d12">
        <input type="checkbox" name="mainSwitch" v-model="status" id="d12" />
        <i></i>
      </label>
    </div>
    <div class="stepBody pb-0">
      <div class="stepWrapper">
        <form id="form-birthday-rewards" class="mb-0">
          <div class="row mr-0 ml-0 mt-2 mb-0 align-items-center">
            <div class="form-group fLabel mt-0 mb-0 col-md-5">
              <label for="bRewards">Reward Point</label>
              <input
                type="number"
                class="form-control"
                id="bRewards"
                name="bRewards"
                v-model="points.nb_points"
              />
              <em class="error" v-if="!$v.points.nb_points.required">Field is required</em>
              <em
                class="error"
                v-if="!$v.points.nb_points.minValue"
              >Please enter points between 1 to 10000</em>
              <em
                class="error"
                v-if="!$v.points.nb_points.maxValue"
              >Please enter points between 1 to 10000</em>
            </div>
            <div class="col-md-5 p-0 asideInfo">to users when they enter their birthday</div>
            <label for="bRewards" generated="true" class="error col-md-10"></label>
          </div>
          <br />
          <div class="row mr-0 ml-0 mt-2 mb-0 align-items-center">
            <div class="form-group fLabel mt-0 mb-0 col-md-5">
              <label for="obRewards">Reward Point</label>
              <input
                type="number"
                class="form-control"
                id="obRewards"
                name="obRewards"
                v-model="reward.points.r_nb_points"
              />
              <em class="error" v-if="!$v.reward.points.r_nb_points.required">Field is required</em>
              <em
                class="error"
                v-if="!$v.reward.points.r_nb_points.minValue"
              >Please enter points between 1 to 10000</em>
              <em
                class="error"
                v-if="!$v.reward.points.r_nb_points.maxValue"
              >Please enter points between 1 to 10000</em>
            </div>
            <div class="col-md-5 p-0 asideInfo">on the birthday</div>
            <label for="obRewards" generated="true" class="error col-md-10"></label>
          </div>
        </form>
        <div class="greetingTemplate">
          <ul>
            <li>
              <img src="@/images/template-birthday.jpg" alt />
            </li>
            <li>
              <img src="@/images/template-anniversary.jpg" alt />
            </li>
            <li>
              <img src="@/images/template-birthday-mom.jpg" alt />
            </li>
          </ul>
          <p>These templates available only when basic setups are completed</p>
        </div>
      </div>
    </div>
    <div class="stepFoot d-flex justify-content-end">
      <ResetBlock :handleReset="resetSettings" id="BirthdayRewards" />
    </div>
  </div>
</template>

<script>
import EnableFeature from './EnableFeature.vue'
import { validationMixin } from "vuelidate";
import {
  required,
  minValue,
  requiredIf,
  maxValue
} from "vuelidate/lib/validators";
import ResetBlock from "./ResetBlock";

export default {
  name: "BirthdayRewards",
  props: ["data", "default", "triggerReset"],
  mixins: [validationMixin],
  components: { ResetBlock, EnableFeature },
  data: function() {
    return this.data;
  },
  methods: {
    submit() {
      this.$v.$touch();
      return !this.$v.$invalid;
    },
    resetSettings() {
      this.data.points.nb_points = this.default.entry_points;
      this.data.reward.points.r_nb_points = this.default.birthday_points;
      if (this.triggerReset) {
        setTimeout(() => {
          this.triggerReset();
        }, 500);
      }
    }
  },
  validations: {
    points: {
      nb_points: {
        required: requiredIf(function() {
          return this.status;
        }),
        minValue: minValue(1),
        maxValue: maxValue(10000)
      }
    },
    reward: {
      points: {
        r_nb_points: {
          required: requiredIf(function() {
            return this.status;
          }),
          minValue: minValue(1),
          maxValue: maxValue(10000)
        }
      }
    }
  }
};
</script>