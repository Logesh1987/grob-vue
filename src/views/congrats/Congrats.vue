<template>
  <div class="grOnboarding">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <Loader v-if="loading" />
    <div class="congratsPage" :class="{'paused': live == '0'}">
      <header>
        <div class="contentArea d-flex align-items-center justify-content-between">
          <a href="#" class="logo">
            <img src="@/images/logo_gr.png" alt="Gratisfaction" />
          </a>
          <router-link to="/" class="viewOnboarding">
            View Onboarding tutorial
            <i class="icon-onboard"></i>
          </router-link>
        </div>
      </header>
      <section>
        <div class="contentArea">
          <div class="row">
            <div class="col-md-3">
              <div class="controlBox">
                <div class="controlSection">
                  <div class="d-flex justify-content-sm-between mb-3">
                    <h6>
                      Your Loyalty
                      <br />Program is
                      <strong>LIVE</strong>
                    </h6>
                    <label class="switch" for="programSwitch-1" @click="toggleStatus()">
                      <input
                        type="checkbox"
                        v-model="live"
                        true-value="1"
                        false-value="0"
                        id="programSwitch"
                      />
                      <i></i>
                    </label>
                  </div>
                  <a
                    v-if="setupData"
                    :href="setupData.shop.url"
                    target="_blank"
                    class="btn btn-outline-light"
                  >
                    Preview in your website
                    <i class="material-icons">chevron_right</i>
                  </a>
                </div>
                <aside>
                  <h6>SUMMARY</h6>
                  <ul class="summaryPoints">
                    <li>
                      <p>
                        Guest checklist shoud be optional - So customers shoud have the option to
                        create
                        an account
                      </p>
                    </li>
                    <li>
                      <p>You can enroll past customers</p>
                    </li>
                    <li>
                      <p>
                        You are giving 100 welcome points, puchase points = 1 point for every
                        currency
                        spent
                      </p>
                    </li>
                  </ul>
                  <a
                    href="https://jai.devam.pro/gr/admin#/view/campaigns"
                    class="btn gotoDashboard"
                  >
                    Go to Dashboard
                    <i class="material-icons">chevron_right</i>
                  </a>
                </aside>
              </div>
              <div class="otherContents">
                <ul>
                  <li>
                    <a href="#">
                      Tips to promote your program
                      <sup class="text-danger">*</sup>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-9">
              <div class="statusRep">
                <div class="head">
                  <div class="live">
                    <h2>Congratulations</h2>
                    <p>
                      Your loyalty program is
                      <strong>Live</strong>.
                    </p>
                  </div>
                  <div class="paused">
                    <h2>Attention</h2>
                    <p>
                      Your loyalty program is
                      <strong>Paused</strong>.
                    </p>
                  </div>
                </div>
                <div class="statusInfo" style="display: none;">
                  <i class="material-icons">info</i>
                  <div>
                    <i class="icon-settings"></i>
                    <span>You can pause and edit any of these features at any time later</span>
                  </div>
                  <div>
                    <i class="icon-list"></i>
                    <span>Checkout all the available features</span>
                  </div>
                </div>
              </div>

              <div class="setupContainer" id="setupAccordion">
                <b-card no-body>
                  <b-card-header
                    v-b-toggle.accordion-1
                    class="justify-content-start align-items-center"
                    role="tab"
                  >
                    <h2>1. Setup</h2>
                    <div class="alert alert-warning d-inline-flex align-items-center mb-0 ml-2">
                      <i class="text-primary material-icons mr-2">info</i>
                      You can edit, pause any setup anytime
                    </div>
                    <!-- <b-button block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button> -->
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion1" role="tabpanel">
                    <b-card-body>
                      <SetupList />
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body>
                  <b-card-header
                    v-b-toggle.accordion-2
                    class="justify-content-start align-items-center"
                    role="tab"
                  >
                    <h2>2. Rewards</h2>
                  </b-card-header>
                  <b-collapse id="accordion-2" visible accordion="my-accordion2" role="tabpanel">
                    <b-card-body>
                      <div class="text-right">
                        <button @click.stop="rewardModalOpen" class="btn btn-success">Add Reward</button>
                      </div>
                      <div v-if="rewardsData">
                        <RewardsList
                          :data="rewardsData"
                          :setEditReward="setEditReward"
                          :showModal="rewardModalOpen"
                        />
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body>
                  <b-card-header
                    v-b-toggle.accordion-3
                    class="justify-content-start align-items-center"
                    role="tab"
                  >
                    <h2>3. Themes</h2>
                  </b-card-header>
                  <b-collapse id="accordion-3" visible accordion="my-accordion3" role="tabpanel">
                    <b-card-body>
                      <div class="themesBlock">
                        <Themes v-if="popupData" page="congrats" />
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="rateExperience" v-if="!this.feedback.submitted">
        <div class="contentArea">
          <div class="rateContainer d-flex align-items-center justify-content-between">
            <p
              class="m-0"
              data-reply="Thank you for your feedback!"
              ref="rcText"
            >How was your onboarding experience?</p>
            <div class="rating feedbackRating" ref="rcRating">
              <Fragment v-for="n in 5" :key="'r'+n">
                <input
                  type="radio"
                  :id="'rStar'+(6-n)"
                  name="rate"
                  :value="6-n"
                  :checked="(6-n) == feedback.rating"
                />
                <label
                  :for="'rStar'+(6-n)"
                  @click="handleRating(6-n)"
                  title="text"
                >{{6-n}} stars {{feedback.rating}}</label>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal
      id="feedbackModal"
      ref="feedbackModal"
      hide-footer
      hide-header
      centered
      modal-class="feedbackModal"
    >
      <template v-slot:default="{ hide }">
        <a href class="bvClose" @click.prevent="hide()">&times;</a>
        <div v-if="feedback.submitted" class="thanksFeedback d-flex flex-column align-items-center">
          <div class="rating popupRate">
            <Fragment v-for="n in 5" :key="'p'+n">
              <input
                type="radio"
                :id="'pStar'+(6-n)"
                name="star"
                :value="6-n"
                :checked="(6-n) == feedback.rating"
              />
              <label
                :for="'pStar'+(6-n)"
                @click="handleRating(6-n)"
                title="text"
              >{{6-n}} stars {{feedback.rating}}</label>
            </Fragment>
          </div>
          <p>Thank you for your feedback!</p>
        </div>
        <div v-else>
          <h5 class="mt-4">
            <strong>Help us improve</strong>
          </h5>
          <div class="d-flex align-items-center justify-content-center p-3">
            <div class="rating popupRate">
              <Fragment v-for="n in 5" :key="'p'+n">
                <input
                  type="radio"
                  :id="'pStar'+(6-n)"
                  name="star"
                  :value="6-n"
                  :checked="(6-n) == feedback.rating"
                />
                <label
                  :for="'pStar'+(6-n)"
                  @click="handleRating(6-n)"
                  title="text"
                >{{6-n}} stars {{feedback.rating}}</label>
              </Fragment>
            </div>
          </div>
          <div class="lowRatingFeedback">
            <p class="text-info text-center">
              <small>Let us know what went wrong</small>
            </p>
            <div class="predefinedFeedbacks d-flex flex-wrap justify-content-center">
              <div
                class="btn-group-toggle"
                data-toggle="buttons"
                v-for="(point, index) in feedback.improvePoints"
                :key="index"
              >
                <label
                  class="btn"
                  :class="{'active': feedback.selectedImprovePoint.indexOf(point) > -1}"
                  @click.prevent="pushPoint(point)"
                >{{ point }}</label>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-10 mt-3">
                <textarea
                  class="form-control"
                  ref="feedbackTxt"
                  id="exampleFormControlTextarea1"
                  placeholder="Something else you want to say?"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-10 mb-3 mt-3 justify-content-end d-flex">
              <button type="submit" class="btn btn-success" @click.prevent="feedbackSubmit">Submit</button>
            </div>
          </div>
        </div>
      </template>
    </b-modal>

    <!-- REWARD MODAL -->
    <b-modal
      id="modal-reward"
      ref="modalSkip"
      hide-footer
      hide-header-close
      title="Add Reward setup"
      centered
      modal-class="setupModal  modal-1 modal-reward"
      dialog-class="addRewardsModal"
      body-class="d-flex flex-column"
    >
      <template v-slot:default>
        <a href @click.prevent="rewardModalClose" aria-label="Close">&times;</a>
        <RewardSettings :id="editRewardId" :closeModal="rewardModalClose" />
      </template>
    </b-modal>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { Fragment } from "vue-fragment";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/styles/overwrite-bootstrap.css";
import "@/views/setup/style.less";
import "./congrats.less";
import { mapState, mapActions } from "vuex";
import SetupList from "@/components/congrats/SetupList";
import RewardsList from "@/components/rewards/RewardsList";
import RewardSettings from "@/components/rewards/RewardSettings";
import Themes from "@/components/themes/Themes";
import Loader from "@/components/Loader";

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
  name: "Congrats",
  components: {
    Loader,
    Fragment,
    SetupList,
    RewardsList,
    RewardSettings,
    Themes
  },
  data: function() {
    return {
      live: null,
      feedback: {
        submitted: null,
        rating: null,
        selectedImprovePoint: [],
        improvePoints: [
          "Don't like the look",
          "Can't find the things",
          "Too hard to use",
          "Missing feature",
          "Too slow to load",
          "Difficult to learn",
          "Others"
        ]
      },
      editRewardId: null,
      data: {
        rewards: null,
        popup: null,
        widget: null
      }
    };
  },
  computed: {
    ...mapState([
      "loading",
      "setupData",
      "rewardsData",
      "popupData",
      "widgetData"
    ])
  },
  watch: {
    setupData: function() {
      this.live = this.setupData.campaign.status;
    }
  },
  methods: {
    ...mapActions([
      "saveSetupData",
      "getRewardsData",
      "getPopupData",
      "getWidgetData",
      "updateLoyaltyStatus",
      "submitReview"
    ]),
    toggleStatus() {
      var newStatus = this.live == "0" ? "1" : "0";
      this.updateLoyaltyStatus(newStatus).then(res => {
        this.live = newStatus;
      });
    },
    handleRating(rate) {
      this.feedback.rating = rate;
      if (this.feedback.rating < 5) {
        this.$bvModal.show("feedbackModal");
      } else {
        // PROCEED WITH CALL ON 5 STARS
        let params = {
          rating: this.feedback.rating
        };
        this.submitReview(params).then(res => {
          this.$refs.rcText.innerHTML = this.$refs.rcText.getAttribute(
            "data-reply"
          );
          this.$refs.rcRating.remove();
          window.localStorage.setItem(
            "feedbackSubmitted",
            this.feedback.rating
          );
          setTimeout(() => {
            this.feedback.submitted = true;
          }, 3000);
        });
      }
    },
    pushPoint(point) {
      if (this.feedback.selectedImprovePoint.indexOf(point) > -1) {
        let tempArr = this.feedback.selectedImprovePoint.filter(
          item => item !== point
        );
        this.feedback.selectedImprovePoint = tempArr;
      } else {
        this.feedback.selectedImprovePoint.push(point);
      }
    },
    feedbackSubmit() {
      let params = {
        rating: this.feedback.rating
      };
      if (this.feedback.selectedImprovePoint.length) {
        params.improvePoints = this.feedback.selectedImprovePoint;
      }
      if (this.$refs.feedbackTxt.value.length) {
        params.customfeed = this.$refs.feedbackTxt.value;
      }
      this.submitReview(params).then(res => {
        console.log("Review");
      });
      //console.log(params);
      // PARAMS READY TO POST
      // POST CALL THEN
      this.feedback.submitted = true;
      window.localStorage.setItem("feedbackSubmitted", this.feedback.rating);
    },
    setEditReward(id) {
      this.editRewardId = id ? id : null;
    },
    rewardModalClose() {
      this.$bvModal.hide("modal-reward");
      this.setEditReward(null);
    },
    rewardModalOpen() {
      this.$bvModal.show("modal-reward");
    }
  },
  mounted: function() {
    this.feedback.rating = window.localStorage.getItem("feedbackSubmitted");
    this.feedback.submitted = window.localStorage.getItem("feedbackSubmitted");

    if (window.localStorage.getItem("inProgress") !== "themesBlock") {
      this.$router.push("setup");
    }
    if (this.rewardsData == null) {
      this.getRewardsData();
    }
    if (this.popupData == null) {
      this.getPopupData();
    }
    if (this.widgetData == null) {
      this.getWidgetData();
    }
  }
};
</script>

<style lang="less" scoped>
// setup steps save to local storage

// SETUP
// Do not close all three - DONE
// save & proceed - save setup & goto themes - remove from rewards - DONE
// on change setup value from other block - show save & proceed to rewards - DONE

// Congrats
// open all by default - DONE
// --- congrats live mapping - DONE

// --- widget setup - ux call - DONE
// reset settings add popup - DONE
// on click reset - set the block values & post api - DONE
// --- Reset settings - DONE
</style>