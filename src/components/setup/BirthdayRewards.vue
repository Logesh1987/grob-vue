<template>
  <div class="setupSteps" v-bind:class="{disabled: !status}">
    <div class="stepHead">
      <h3>Birthday Rewards</h3>
      <p>
        This event will appear on your site's loyalty program,
        <br />prompting visitors and members to
        enter a date
      </p>
      <label class="switch" for="d12">
        <input
          type="checkbox"
          name="mainSwitch"
          v-model="status"
          id="d12"
        />
        <i></i>
      </label>
    </div>
    <div class="stepBody pb-0">
      <div class="stepWrapper">
        <form id="form-birthday-rewards" class="mb-0">
          <div class="row mr-0 ml-0 mt-2 mb-0 align-items-center">
            <div class="form-group fLabel mt-0 mb-0 col-md-5">
              <label for="bRewards">Reward Point</label>
              <input type="number" class="form-control" id="bRewards" name="bRewards" v-model="points.nb_points" />
            </div>
            <div class="col-md-5 p-0 asideInfo">to users when they enter their birthday</div>
            <label for="bRewards" generated="true" class="error col-md-10"></label>
          </div>
          <br />
          <div class="row mr-0 ml-0 mt-2 mb-0 align-items-center">
            <div class="form-group fLabel mt-0 mb-0 col-md-5">
              <label for="obRewards">Reward Point</label>
              <input type="number" class="form-control" id="obRewards" name="obRewards" v-model="reward.points.r_nb_points" />
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
      <a
        href="#"
        class="resetSetting"
        onclick="document.getElementById('form-birthday-rewards').reset();"
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
  name: "BirthdayRewards",
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
      nb_points: {
        required: requiredIf(function() {
          return this.status;
        }),
        minValue: minValue(100)
      }
    },
    reward: {
      points: {
        r_nb_points: {
          required: requiredIf(function() {
            return this.status;
          }),
          minValue: minValue(100)
        }
      }
    }
  }
};
</script>