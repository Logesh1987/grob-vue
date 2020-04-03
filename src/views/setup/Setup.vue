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
              <li data-paginate="setup">1</li>
              <li data-paginate="rewards">2</li>
              <li data-paginate="themes">3</li>
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
        <b-card
          id="setupBlock"
          no-body
          class="setupBlock"
          :class="activeStep === 'setupBlock' ? 'active' : null"
        >
          <b-card-header
            header-tag="header"
            v-b-toggle.setup
            role="tab"
            @click="activeStep = 'setupBlock'"
          >
            <h2>1. Setup</h2>
          </b-card-header>
          <b-collapse id="setup" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <div v-if="data">
                <swiper
                  ref="setupSwiper"
                  :options="swiperOptions"
                  @slideChangeTransitionEnd="swiperScte"
                >
                  <swiper-slide data-ref="PointsProgram">
                    <PointsProgram ref="PointsProgram" :data="data.points_program" />
                  </swiper-slide>
                  <swiper-slide data-ref="SignupBonus">
                    <SignupBonus ref="SignupBonus" :data="data.signup_bonus" />
                  </swiper-slide>
                  <swiper-slide data-ref="PaybyPoints">
                    <PaybyPoints ref="PaybyPoints" :data="data.payby_points" />
                  </swiper-slide>
                  <swiper-slide data-ref="ReferralProgram">
                    <ReferralProgram ref="ReferralProgram" :data="data.referral_program" />
                  </swiper-slide>
                  <swiper-slide data-ref="FacebookShare">
                    <FacebookShare ref="FacebookShare" :data="data.facebook_share" />
                  </swiper-slide>
                  <swiper-slide data-ref="TwitterShare">
                    <TwitterShare ref="TwitterShare" :data="data.twitter_share" />
                  </swiper-slide>
                  <swiper-slide data-ref="BirthdayRewards">
                    <BirthdayRewards ref="BirthdayRewards" :data="data.birthday_rewards" />
                  </swiper-slide>
                  <swiper-slide data-ref="WooRewards">
                    <WooRewards ref="WooRewards" :data="data.woo_rewards" />
                  </swiper-slide>
                  <swiper-slide data-ref="Newsletter">
                    <Newsletter ref="Newsletter" :data="data.news_letter" />
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
                  <div slot="pagination" class="setupSwiper-pagination swiper-pagination"></div>
                  <button
                    class="setupSwiper-button-next btn btn-warning text-light pr-5 pl-5"
                    :class="this.swipe.isEnd ? 'disabled' : null"
                    @click.prevent="swiperNext"
                  >Next</button>
                </div>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card
          id="rewardsBlock"
          no-body
          class="rewardsBlock"
          :class="activeStep === 'rewardsBlock' ? 'active' : null"
        >
          <b-card-header
            header-tag="header"
            v-b-toggle.rewards
            role="tab"
            @click="activeStep = 'rewardsBlock'"
          >
            <h2>2. Rewards</h2>
          </b-card-header>
          <b-collapse id="rewards" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>asdas das das dasd</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card
          id="themesBlock"
          no-body
          class="themesBlock"
          :class="activeStep === 'themesBlock' ? 'active' : null"
        >
          <b-card-header
            header-tag="header"
            v-b-toggle.themes
            role="tab"
            @click="activeStep = 'themesBlock'"
          >
            <h2>3. Themes</h2>
          </b-card-header>
          <b-collapse id="themes" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>asdas das das dasd</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>

    <b-modal
      id="modal-skip"
      ref="modalSkip"
      hide-footer
      hide-header
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
  </div>
</template>

<script>
import Vue from "vue";
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

// Install BootstrapVue
Vue.use(BootstrapVue);
export default {
  name: "setup",
  data: function() {
    return {
      activeStep: "setupBlock",
      swipe: {
        isBeginning: true,
        isEnd: false
      },
      swiperOptions: {
        observer: true,
        observeParents: true,
        autoHeight: true,
        allowTouchMove: false,
        // initialSlide: 5,
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      },
      data: ""
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
    FacebookShare
  },
  methods: {
    swiperScte() {
      this.swipe.isBeginning = this.$refs.setupSwiper.$swiper.isBeginning;
      this.swipe.isEnd = this.$refs.setupSwiper.$swiper.isEnd;
    },
    swiperNext() {
      const re = document.querySelector('.swiper-slide-active').getAttribute('data-ref');
      const result = this.$refs[re].submit();
      if(result) {
        this.$refs.setupSwiper.$swiper.slideNext();
      }
    },
    swiperPrev() {
      const re = document.querySelector('.swiper-slide-active').getAttribute('data-ref');
      const result = this.$refs[re].submit();
      if(result) {
        this.$refs.setupSwiper.$swiper.slidePrev();
      }
    }
  },
  mounted: function() {
    axios.get("http://localhost:3000/data").then(res => {
      this.data = res.data;
    });
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
