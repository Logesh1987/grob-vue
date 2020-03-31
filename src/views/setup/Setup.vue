<template>
  <div class="grOnboarding">
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
              <swiper ref="setupSwiper" :options="swiperOptions" @slideChangeTransitionEnd="swiperScte">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
              </swiper>
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
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "swiper/css/swiper.css";
import "./style.less";

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
    SwiperSlide
  },
  methods: {
    swiperScte() {
      this.swipe.isBeginning = this.$refs.setupSwiper.$swiper.isBeginning
      this.swipe.isEnd = this.$refs.setupSwiper.$swiper.isEnd
    },
    swiperNext() {
      this.$refs.setupSwiper.$swiper.slideNext();
    },
    swiperPrev() {
      this.$refs.setupSwiper.$swiper.slidePrev();
    }
  }
};
</script>
