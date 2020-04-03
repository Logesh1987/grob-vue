<template>
  <div class="setupSteps" v-bind:class="{ disabled: !enabled }">
    <div class="stepHead">
      <h3>Facebook Share Setup</h3>
      <p>When members share your message on Facebook</p>
      <label class="switch" for="fbShareSetup">
        <input type="checkbox" name="mainSwitch" v-model="enabled" id="fbShareSetup" />
        <i></i>
      </label>
    </div>
    <div class="stepBody">
      <div class="stepWrapper">
        <form id="form-fb-share" class="mb-0">
          <div class="form-group fLabel mt-0 mb-5 col-md-5">
            <label for="inputEmail4">Reward Point</label>
            <input
              type="number"
              class="form-control"
              id="fbRewardPoint"
              name="fbRewardPoint"
              v-model="rewardPoint"
            />
            <em class="error" v-if="!$v.rewardPoint.required">Field is required</em>
            <em
              class="error"
              v-if="!$v.rewardPoint.minValue"
            >Need a minimum value of {{$v.rewardPoint.$params.minValue.min}}</em>
          </div>
          <div class="form-group fLabel mb-5 col-md-12">
            <label for="inputEmail4">Facebook Share Text</label>
            <textarea
              class="form-control"
              cols="30"
              rows="3"
              id="fbSharetxt"
              v-model="share_text"
              name="fbSharetxt"
            ></textarea>
            <em class="error" v-if="!$v.share_text.required">Field is required</em>
            <a
              href="#"
              class="btn btn-link mt-2 p-0 sampleModalTrigger"
              data-img="https://picsum.photos/id/1073/640/480"
            >
              <small>Sample</small>
            </a>
          </div>
          <div class="form-group fLabel col-md-12 mb-2">
            <label for="inputEmail4">Connect URL from facebook</label>
            <input
              type="text"
              class="form-control"
              id="fbConnectUrl"
              name="fbConnectUrl"
              v-model="url"
            />
            <em class="error" v-if="!$v.url.required">Field is required</em>
          </div>
          <!-- <div class="col-md-12 ">
                            <div class="custom-control d-flex scale-8 to-00 custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="fbcustomCheck1">
                              <label class="custom-control-label" for="fbcustomCheck1">Is your website has HTTPS?</label>
                            </div>
          </div>-->
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
import { validationMixin } from "vuelidate";
import { required, minValue, requiredIf } from "vuelidate/lib/validators";

export default {
  name: "FacebookShare",
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
    rewardPoint: {
      required: requiredIf(function() {
        return this.enabled;
      }),
      minValue: minValue(100)
    },
    share_text: {
      required: requiredIf(function() {
        return this.enabled;
      })
    },
    url: {
      required: requiredIf(function() {
        return this.enabled;
      })
    }
  }
};
</script>