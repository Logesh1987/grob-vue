<template>
  <div class="setupSteps" v-bind:class="{ disabled: status == '0' }">
    <div class="stepHead">
      <h3>Twitter Share Setup</h3>
      <p>When members share your message on Twitter</p>
      <label class="switch" for="d13">
        <input
          type="checkbox"
          true-value="1"
          false-value="0"
          name="mainSwitch"
          v-model="status"
          id="d13"
        />
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
              id="twRewardPoint"
              name="twRewardPoint"
              v-model="worth_entries"
            />
            <em class="error" v-if="!$v.worth_entries.required">Field is required</em>
            <em
              class="error"
              v-if="!$v.worth_entries.minValue"
            >Need a minimum value of {{$v.worth_entries.$params.minValue.min}}</em>
            <em
              class="error"
              v-if="!$v.worth_entries.maxLength"
            >Allowed {{$v.worth_entries.$params.maxLength.max}} digits max</em>
          </div>
          <div class="form-group fLabel mb-5 col-md-12">
            <label for="inputEmail4">Twitter Share Text</label>
            <textarea
              class="form-control"
              cols="30"
              rows="3"
              id="twSharetxt"
              v-model="settings.tweet"
              name="twSharetxt"
            ></textarea>
            <em class="error" v-if="!$v.settings.tweet.required">Field is required</em>
            <a
              href="#"
              class="btn btn-link mt-2 p-0 sampleModalTrigger"
              data-img="https://picsum.photos/id/1073/640/480"
            >
              <small>Sample</small>
            </a>
          </div>
          <div class="form-group fLabel col-md-12 mb-2">
            <label for="inputEmail4">Connect URL from Twitter</label>
            <input
              type="text"
              class="form-control"
              id="twConnectUrl"
              name="twConnectUrl"
              v-model="settings.tweet_url"
            />
            <em class="error" v-if="!$v.settings.tweet_url.required">Field is required</em>
            <em class="error" v-if="!$v.settings.tweet_url.url">Please fill valid URL</em>
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
      <ResetBlock :handleReset="resetSettings" id="Twittershare" />
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minValue,
  requiredIf,
  maxLength,
  url
} from "vuelidate/lib/validators";
import ResetBlock from "./ResetBlock";

export default {
  name: "Twittershare",
  props: ["data", "default", "triggerReset"],
  mixins: [validationMixin],
  components: { ResetBlock },
  data: function() {
    return this.data;
  },
  methods: {
    submit() {
      this.$v.$touch();
      return !this.$v.$invalid;
    },
    resetSettings() {
      this.worth_entries = this.default.worth_entries;
      this.settings.tweet = this.default.tweet;
      this.settings.tweet_url = this.default.tweet_url;
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
      maxLength: maxLength(5)
    },
    settings: {
      tweet: {
        required: requiredIf(function() {
          return this.status;
        })
      },
      tweet_url: {
        required: requiredIf(function() {
          return this.status;
        }),
        url
      }
    }
  }
};
</script>