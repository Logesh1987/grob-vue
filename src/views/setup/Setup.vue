<template>
  <div class="grOnboarding">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <div class="setupPage">
      <header>
        <div class="grad">
          <a href="#" class="logo">
            <img src="@/images/logo_gr_white.png" alt="Gratisfaction" />
          </a>
        </div>
        <div class="head">
          <div>
            <h1>Welcome, Start with a quick setup.</h1>
            <ul class="paginate" id="setupPaginate">
              <li
                :class="{'current' : activeStep === 'setupBlock', 'completed' : saved.setupBlock}"
              >1</li>
              <li
                :class="{'current' : activeStep === 'rewardsBlock', 'completed' : saved.rewardsBlock}"
              >2</li>
              <li
                :class="{'current' : activeStep === 'themesBlock', 'completed' : saved.themesBlock}"
              >3</li>
            </ul>
          </div>
        </div>
        <div class="skipSteps">
          <p>
            <strong>SKIP ALL STEPS?</strong>
            Proceed with recommended settings
          </p>
          <b-button variant="outline-success" v-b-modal.modal-skip>Proceed</b-button>
        </div>
      </header>
      <div role="tablist" class="setupContainer" id="setupAccordion">
        <b-card no-body class="setupBlock" :class="activeStep === 'setupBlock' ? 'active' : null">
          <b-card-header
            header-tag="header"
            v-b-toggle.setupBlock
            role="tab"
            @click="toggleCollapse('setupBlock')"
          >
            <h2>1. Setup</h2>
            <span class="completeSteps">Complete all steps before proceed</span>
          </b-card-header>
          <b-collapse id="setupBlock" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <div v-if="data.setup">
                <swiper
                  ref="setupSwiper"
                  :options="swiperOptions"
                  @slideChangeTransitionEnd="swiperScte"
                >
                  <swiper-slide data-ref="PointsProgram">
                    <PointsProgram
                      ref="PointsProgram"
                      :reset="resetSetupBlock"
                      :data="data.setup.points_setup"
                    />
                  </swiper-slide>
                  <swiper-slide data-ref="SignupBonus">
                    <SignupBonus
                      ref="SignupBonus"
                      :reset="resetSetupBlock"
                      :data="data.setup.points_setup"
                    />
                  </swiper-slide>
                  <swiper-slide data-ref="PaybyPoints">
                    <PaybyPoints
                      ref="PaybyPoints"
                      :reset="resetSetupBlock"
                      :data="data.setup.points_setup"
                    />
                  </swiper-slide>
                  <swiper-slide data-ref="ReferralProgram">
                    <ReferralProgram
                      ref="ReferralProgram"
                      :reset="resetSetupBlock"
                      :data="data.setup.referral"
                    />
                  </swiper-slide>
                  <swiper-slide data-ref="FacebookShare">
                    <FacebookShare
                      ref="FacebookShare"
                      :reset="resetSetupBlock"
                      :data="data.setup.entries.facebook_share"
                    />
                  </swiper-slide>
                  <swiper-slide data-ref="TwitterShare">
                    <TwitterShare
                      ref="TwitterShare"
                      :reset="resetSetupBlock"
                      :data="data.setup.entries.twitter_tweet"
                    />
                  </swiper-slide>
                  <swiper-slide data-ref="BirthdayRewards">
                    <BirthdayRewards
                      ref="BirthdayRewards"
                      :reset="resetSetupBlock"
                      :data="data.setup.events.member_birthday"
                    />
                  </swiper-slide>
                  <swiper-slide data-ref="WooRewards">
                    <WooRewards
                      ref="WooRewards"
                      :reset="resetSetupBlock"
                      :data="data.setup.reviews.woo_reviews"
                    />
                  </swiper-slide>
                  <swiper-slide data-ref="Newsletter">
                    <Newsletter
                      ref="Newsletter"
                      :reset="resetSetupBlock"
                      :data="data.setup.entries.newsletter_subscription"
                    />
                  </swiper-slide>
                </swiper>
              </div>
              <div class="setupSwiper-navigator">
                <div>
                  <button
                    class="setupSwiper-button-prev btn btn-outline-secondary pr-5 pl-5"
                    :class="this.swipe.isBeginning ? 'disabled' : null"
                    @click.prevent="swiperPrev"
                  >Back</button>

                  <div class="setupSwiper-pagination swiper-pagination">
                    <span
                      class="swiper-pagination-bullet"
                      :class="{'swiper-pagination-bullet-active' : this.swipe.activeSwipe === 0 }"
                      data-id="0"
                      @click="gotoSlide"
                      title="Points Program"
                    ></span>
                    <span
                      class="swiper-pagination-bullet"
                      :class="{'swiper-pagination-bullet-active' : this.swipe.activeSwipe === 1 }"
                      data-id="1"
                      @click="gotoSlide"
                      title="Signup Bonus"
                    ></span>
                    <span
                      class="swiper-pagination-bullet"
                      :class="{'swiper-pagination-bullet-active' : this.swipe.activeSwipe === 2 }"
                      data-id="2"
                      @click="gotoSlide"
                      title="Pay by points"
                    ></span>
                    <span
                      class="swiper-pagination-bullet"
                      :class="{'swiper-pagination-bullet-active' : this.swipe.activeSwipe === 3 }"
                      data-id="3"
                      @click="gotoSlide"
                      title="Referral Program"
                    ></span>
                    <span
                      class="swiper-pagination-bullet"
                      :class="{'swiper-pagination-bullet-active' : this.swipe.activeSwipe === 4 }"
                      data-id="4"
                      @click="gotoSlide"
                      title="Facebook Share Setup"
                    ></span>
                    <span
                      class="swiper-pagination-bullet"
                      :class="{'swiper-pagination-bullet-active' : this.swipe.activeSwipe === 5 }"
                      data-id="5"
                      @click="gotoSlide"
                      title="Twitter Share Setup"
                    ></span>
                    <span
                      class="swiper-pagination-bullet"
                      :class="{'swiper-pagination-bullet-active' : this.swipe.activeSwipe === 6 }"
                      data-id="6"
                      @click="gotoSlide"
                      title="Birthday Rewards"
                    ></span>
                    <span
                      class="swiper-pagination-bullet"
                      :class="{'swiper-pagination-bullet-active' : this.swipe.activeSwipe === 7 }"
                      data-id="7"
                      @click="gotoSlide"
                      title="WOOReview Rewards"
                    ></span>
                    <span
                      class="swiper-pagination-bullet"
                      :class="{'swiper-pagination-bullet-active' : this.swipe.activeSwipe === 8 }"
                      data-id="8"
                      @click="gotoSlide"
                      title="Subscribe to Newsletter Setup"
                    ></span>
                  </div>
                  <button
                    class="setupSwiper-button-next btn btn-warning text-light pr-5 pl-5"
                    :class="this.swipe.isEnd ? 'disabled' : null"
                    @click.prevent="swiperNext"
                  >Next</button>
                </div>
              </div>
              <!--<footer class="saveBar" v-if="swipe.isEnd">-->
              <footer class="saveBar">
                <div class="container">
                  <div class="row justify-content-between">
                    <ul class="footProgress">
                      <li class="completed">
                        <i class="material-icons">check</i>
                      </li>
                      <li>2</li>
                      <li>3</li>
                    </ul>
                    <button class="btn btn-light" @click.prevent="saveSetup">
                      Proceed to Rewards
                      <i class="material-icons">keyboard_arrow_right</i>
                    </button>
                  </div>
                </div>
              </footer>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card
          no-body
          class="rewardsBlock"
          :class="activeStep === 'rewardsBlock' ? 'active' : null"
        >
          <b-card-header
            header-tag="header"
            v-b-toggle.rewardsBlock
            role="tab"
            ref="rewardHead"
            class="disabled"
            @click="toggleCollapse('rewardsBlock')"
          >
            <h2>2. Rewards</h2>
            <button
              v-if="activeStep === 'rewardsBlock'"
              @click.stop="rewardModalOpen"
              class="btn btn-success"
            >Add Reward</button>
          </b-card-header>
          <b-collapse id="rewardsBlock" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div v-if="rewardsData">
                  <RewardsList
                    :data="rewardsData"
                    :setEditReward="setEditReward"
                    :showModal="rewardModalOpen"
                  />
                </div>
              </b-card-text>
              <footer class="saveBar" v-if="activeStep === 'rewardsBlock'">
                <div class="container">
                  <div class="row justify-content-between">
                    <ul class="footProgress">
                      <li class="completed">
                        <i class="material-icons">check</i>
                      </li>
                      <li class="completed">
                        <i class="material-icons">check</i>
                      </li>
                      <li>3</li>
                    </ul>
                    <button class="btn btn-light" @click.prevent="saveRewards">
                      Save and Next
                      <i class="material-icons">keyboard_arrow_right</i>
                    </button>
                  </div>
                </div>
              </footer>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="themesBlock" :class="activeStep === 'themesBlock' ? 'active' : null">
          <b-card-header
            header-tag="header"
            v-b-toggle.themesBlock
            role="tab"
            ref="themesHead"
            class="disabled"
            @click="toggleCollapse('themesBlock')"
          >
            <h2>3. Themes</h2>
          </b-card-header>
          <b-collapse id="themesBlock" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <Themes v-if="popupData" />
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>

    <!-- SKIP MODAL -->
    <b-modal
      id="modal-skip"
      ref="modalSkip"
      hide-footer
      title="asdasd"
      centered
      modal-class="setupModal modal-skip"
      body-class="d-flex flex-column align-items-center"
    >
      <template v-slot:default="{ hide }">
        <a href class="bvClose" @click.prevent="hide()">&times;</a>
        <h5>
          You have made some change
          <br />What should wee do?
        </h5>
        <a href="congrats.html" class="btn btn-success pr-5 pl-5 mt-4 mb-4">Save and Proceed</a>
        <a href="congrats.html" class="text-success">
          <u>
            <small>Reset all and LIVE</small>
          </u>
        </a>
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
import { mapState, mapActions } from "vuex";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "swiper/css/swiper.css";
import "@/styles/overwrite-bootstrap.css";
import "./style.less";
import RadioGroup from "@/components/RadioGroup.vue";
import PointsProgram from "@/components/setup/PointsProgram";
import SignupBonus from "@/components/setup/SignupBonus";
import PaybyPoints from "@/components/setup/PaybyPoints";
import ReferralProgram from "@/components/setup/ReferralProgram";
import FacebookShare from "@/components/setup/FacebookShare";
import TwitterShare from "@/components/setup/TwitterShare";
import BirthdayRewards from "@/components/setup/BirthdayRewards";
import WooRewards from "@/components/setup/WooRewards";
import Newsletter from "@/components/setup/Newsletter";
import RewardsList from "@/components/rewards/RewardsList";
import RewardSettings from "@/components/rewards/RewardSettings";
import Themes from "@/components/themes/Themes";

// Install BootstrapVue
Vue.use(BootstrapVue);
export default {
  name: "setup",
  data: function() {
    return {
      activeStep: null,
      saved: {
        setupBlock: false,
        rewardsBlock: false,
        themesBlock: false
      },
      swipe: {
        isBeginning: true,
        isEnd: false,
        activeSwipe: 0
      },
      swiperOptions: {
        observer: true,
        observeParents: true,
        autoHeight: true,
        allowTouchMove: false
        // initialSlide: 7,
      },
      editRewardId: null,
      data: {
        setup: null,
        rewards: null,
        popup: null
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    PointsProgram,
    SignupBonus,
    ReferralProgram,
    PaybyPoints,
    Newsletter,
    WooRewards,
    BirthdayRewards,
    TwitterShare,
    FacebookShare,
    RewardsList,
    RewardSettings,
    Themes
  },
  computed: {
    ...mapState(["setupData", "rewardsData", "popupData", "widgetData"])
  },
  methods: {
    ...mapActions([
      "getSetupData",
      "saveSetupData",
      "getRewardsData",
      "getPopupData",
      "getWidgetData"
    ]),
    swiperScte() {
      this.swipe.isBeginning = this.$refs.setupSwiper.$swiper.isBeginning;
      this.swipe.isEnd = this.$refs.setupSwiper.$swiper.isEnd;
      this.swipe.activeSwipe = this.$refs.setupSwiper.$swiper.realIndex;
    },
    gotoSlide(e) {
      this.$refs.setupSwiper.$swiper.slideTo(e.target.getAttribute("data-id"));
    },
    swiperNext() {
      const re = document
        .querySelector(".swiper-slide-active")
        .getAttribute("data-ref");
      const result = this.$refs[re].submit();
      if (result) {
        document
          .querySelector(
            `.swiper-pagination-bullet[data-id='${this.$refs.setupSwiper.$swiper.realIndex}']`
          )
          .setAttribute('data-completed', "completed");
        this.$refs.setupSwiper.$swiper.slideNext();
      }
    },
    swiperPrev() {
      const re = document
        .querySelector(".swiper-slide-active")
        .getAttribute("data-ref");
      const result = this.$refs[re].submit();
      if (result) {
        this.$refs.setupSwiper.$swiper.slidePrev();
      }
    },
    toggleCollapse(id) {
      if (document.querySelector(".completeSteps"))
        document.querySelector(".completeSteps").remove();

      if(this.activeStep == null) {
        window.localStorage.setItem('inProgress', id)
      }

      id === this.activeStep
        ? (this.activeStep = null)
        : (this.activeStep = id);
    },
    resetSetupBlock(key) {
      console.log(JSON.stringify(this.data.setup[key]));
      console.log(JSON.stringify(this.setupData[key]));
      this.data.setup[key] = { ...this.setupData[key] };
    },
    saveSetup() {
      this.saveSetupData(this.data.setup).then(res => {
        this.getRewardsData().then(re => {
          this.setProgress("rewardsBlock")
        });
      });
    },
    saveRewards() {
      this.getPopupData().then(res => {
          this.setProgress("themesBlock")
      });

      /*this.getWidgetData().then(res => {
        console.log("GOT Widget Data");
      });*/

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
    },
    setProgress(block) {      
      this.activeStep = block;
      this.$root.$emit("bv::toggle::collapse", block);
      window.localStorage.setItem('inProgress', block)
      const savedKeys = Object.keys(this.saved)
      const index = savedKeys.indexOf(block)
      for(var i=0; i<=index; i++) {
        document.querySelector(`.${savedKeys[i]} .card-header`).classList.remove('disabled')
        this.saved[savedKeys[i]] = true;
      }
    }
  },
  mounted: function() {
    const inProgress = window.localStorage.getItem('inProgress')
    this.getSetupData().then(
      res => {
        this.data.setup = JSON.parse(JSON.stringify(res))
        if(inProgress) {
          document.querySelector(".completeSteps").remove();
          this.setProgress(inProgress)
          if(inProgress === 'rewardsBlock') {
            this.getRewardsData()
          }
          if(inProgress === 'themesBlock') {
            this.getPopupData().then(re => this.getRewardsData())
          }
        }
      }
    );
  }
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.woff) format("woff");
}
</style>
