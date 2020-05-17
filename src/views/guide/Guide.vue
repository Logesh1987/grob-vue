<template>
  <div class="guidePageWrapper" id="guide" v-bind:data-active="activeView">
    <i class="circle"></i>
    <header>
      <a href="#" class="logo">
        <img src="@/images/logo_gr.png" alt="Gratisfaction" />
      </a>
      <a href="./setup.html" class="button buttonBordered">
        {{ head.skip_button }}
        <i class="icon-right-arrow"></i>
      </a>
      <!-- <a href="mailto:info@appsmav.com" class="button buttonGrey">Write to Us</a> -->
    </header>
    <div class="mainBlock">
      <full-page ref="fullpage" :options="viewOptions" :skip-init="true">
        <section class="section sectionWelcome" ref="welcome">
          <div class="contentWrapper">
            <span class="customerCount">
              <i class="icon-heart"></i>
              <strong>{{likes}}</strong>
              <small>{{ landing.happy_customers }}</small>
            </span>
            <figure>
              <img src="@/images/splash.png" />
            </figure>
            <h1>{{ landing.head }}</h1>
            <router-link to="/setup" class="button buttonBlack">{{ landing.link }}</router-link>
            <a href="#" class="skip" onclick="fullpage_api.moveTo(2)">
              {{ landing.button }}
              <i class="icon-right-arrow"></i>
            </a>
          </div>
        </section>
        <section class="section sectionSetup" ref="sectionSetup" v-bind:data-step="step">
          <div class="contentWrapper">
            <h2>{{ setup.head }}</h2>
            <h4 v-html="setup.desc"></h4>
            <nav class="stepsNav">
              <i></i>
              <a href="#" data-step="1" @click.prevent="step=1">Setup</a>
              <a href="#" data-step="2" @click.prevent="step=2">Rewards</a>
              <a href="#" data-step="3" @click.prevent="step=3">Themes</a>
            </nav>
            <div class="setupStepsWrapper">
              <div class="setupSteps step-1">
                <figure>
                  <img src="@/images/step-1.jpg" alt />
                </figure>
                <div class="stepInfo">
                  <i>1</i>
                  <h5 v-html="setup.heading_1"></h5>
                  <p v-html="setup.desc_1"></p>
                </div>
              </div>
              <div class="setupSteps step-2">
                <figure>
                  <img src="@/images/step-2.jpg" alt />
                </figure>
                <div class="stepInfo">
                  <i>2</i>
                  <h5 v-html="setup.heading_2"></h5>
                  <p v-html="setup.desc_2"></p>
                </div>
              </div>
              <div class="setupSteps step-3">
                <figure>
                  <img src="@/images/step-3.jpg" alt />
                </figure>
                <div class="stepInfo">
                  <i>3</i>
                  <h5 v-html="setup.heading_3"></h5>
                  <p v-html="setup.desc_3"></p>
                </div>
              </div>
            </div>
            <div class="bottomNav">
              <a href="#" class="back ctaPrev" @click.prevent="stepPrev">
                <i class="icon-left-arrow"></i> Back
              </a>
              <button class="button buttonOrange ctaNext" @click.prevent="stepNext">
                Next
                <i class="icon-right-arrow"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="section sectionReady">
          <span class="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 500 500"
              xml:space="preserve"
            >
              <defs>
                <linearGradient id="Gradient1" gradientTransform="rotate(90)">
                  <stop offset="0%" stop-color="#3bda82" />
                  <stop offset="80%" stop-color="#1e785d" />
                  <stop offset="100%" stop-color="#228562" />
                </linearGradient>
                <linearGradient id="Gradient2" gradientTransform="rotate(90)">
                  <stop offset="0%" stop-color="#093042" />
                  <stop offset="80%" stop-color="#1e785d" />
                  <stop offset="100%" stop-color="#228562" />
                </linearGradient>
                <pattern
                  id="Pattern"
                  x="0"
                  y="0"
                  width="500"
                  height="500"
                  patternUnits="userSpaceOnUse"
                >
                  <g transform="rotate(0, 250, 250)">
                    <rect
                      shape-rendering="crispEdges"
                      x="0"
                      y="0"
                      width="250"
                      height="500"
                      fill="url(#Gradient1)"
                    />
                    <rect
                      shape-rendering="crispEdges"
                      x="250"
                      y="0"
                      width="250"
                      height="500"
                      fill="url(#Gradient2)"
                    />
                  </g>
                </pattern>
              </defs>
              <path
                class="donut"
                style="stroke: url(#Pattern);"
                fill="transparent"
                stroke-dasharray="1570 1570"
                stroke-dashoffset="0"
                stroke-width="30"
                d="M250,19c127.6,0,231,103.4,231,231S377.6,481,250,481S19,377.6,19,250S122.4,19,250,19z"
              />
            </svg>
          </span>
          <div class="contentWrapper">
            <h3 v-html="end.head"></h3>
            <ul>
              <li>
                <i class="icon-settings"></i>
                <p v-html="end.desc_1"></p>
              </li>
              <li>
                <i class="icon-list"></i>
                <p v-html="end.desc_2"></p>
              </li>
            </ul>
            <router-link to="/setup" class="button buttonOrange">
              setup now
              <i class="icon-right-arrow"></i>
            </router-link>
          </div>
        </section>
      </full-page>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Axios from "axios";
export default {
  name: "guide",
  data: function() {
    return {
      viewOptions: {
        skipInit: true,
        autoScrolling: true,
        fadingEffect: "slides",
        afterRender: this.fullpageLoad,
        onLeave: this.fullPageleave
      },
      step: 1,
      activeView: 0,
      likes: 0,
      head: {
        skip_button: "Skip Guide"
      },
      landing: {
        head: "Welcome to Gratisfaction",
        button: "view Quick setup guide",
        link: "Skip guide and start setup",
        happy_customers: "Happy Customers"
      },
      setup: {
        head: "How to setup",
        desc:
          "During onboarding we will take these <span>three quick and simple steps</span>",
        heading_1: "Start with basic <br>settings",
        desc_1:
          "You can pause or edit the <br>program at anytime. Even if the <br>program is live. You are in <br>control of your program",
        heading_2: "Setup your <br>Loyalty Rewards",
        desc_2:
          "You can pause or edit the <br>program at anytime. Even if the <br>program is live. You are in <br>control of your program",
        heading_3: `Customize <br>plugin's UI`,
        desc_3: `Customize the plugin's UI, <br>placement of the plugins <br><br>You can change the theme <br>to align with your websites.`
      },
      end: {
        head: "You are ready! <br> Get started.",
        desc_1:
          "You can pause and <br> edit any of these <br> features at any time",
        desc_2: "More features are <br>available after the <br>initial setup"
      }
    };
  },
  methods: {
    fullpageLoad() {
      this.activeView = 1;
      this.$refs.welcome.classList.add("play");
    },
    fullPageleave(origin, destination, direction) {
      if (origin.index == 1) {
        if (direction == "down") {
          if (this.step == 3) {
            this.activeView = destination.index + 1;
            destination.item.classList.add("play");
            return true;
          } else {
            this.increaseStep();
            return false;
          }
        } else {
          if (this.step == 1) {
            this.activeView = destination.index + 1;
            destination.item.classList.add("play");
            return true;
          } else {
            this.decreaseStep();
            return false;
          }
        }
      } else {
        this.activeView = destination.index + 1;
      }
    },
    increaseStep() {
      if (this.step < 3) {
        this.step += 1;
      }
      return this.step;
    },
    decreaseStep() {
      if (this.step > 1) {
        this.step -= 1;
      }
      return this.step;
    },
    stepNext(e) {
      if (this.step == 3) {
        this.$refs.fullpage.api.moveSectionDown();
      } else this.increaseStep();
    },
    stepPrev(e) {
      if (this.step == 1) {
        this.$refs.fullpage.api.moveSectionUp();
      } else this.decreaseStep();
    }
  },
  mounted: function() {
    this.$refs.fullpage.init();
    Axios.get(
      "https://jai.devam.pro/gr/admin/onboarding/activeSites?id_shop=1325&admin_email=jayakumar@appsmav.com"
    ).then(({ data }) => {
      console.log(data);
      if (data.data.happy_customers != "undefined")
        this.likes = data.data.happy_customers;
    });
  }
};
</script>

<style lang="less" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.8/fullpage.css");
@color1: #3ddb84;
@color2: #092f42;
@keyframes heartBeat {
  0%,
  28%,
  70% {
    transform: scale(1);
  }

  14%,
  42% {
    transform: scale(1.2);
  }
}
.guidePageWrapper {
  background-color: #f7f7f7;
  header {
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 10;
    padding: 2em 3em;
    left: 0;
    top: 0;
    align-items: center;
    justify-content: space-between;
    transition: opacity 0.5s;

    body.fp-viewing-2 & {
      opacity: 0;
    }

    .logo {
      width: 150px;

      img {
        width: 100%;
        vertical-align: middle;
      }
    }

    .button {
      font-size: 0.9em;
      transition: opacity 0.5s;
      body.fp-viewing-0 & {
        opacity: 0;
      }
    }
    .guidePageWrapper[data-active="3"] & {
      opacity: 0;
    }
  }
  i.circle {
    background-color: @color1;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    transform: scale(0.2);
    // transform: translateY(-50%);
    margin: auto;
    width: 90vh;
    height: 90vh;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    &:before {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
    [data-active="1"]& {
      opacity: 1;
      transform: scale(1);
      transition: opacity 0.5s, background-color 0.5s,
        transform 0.5s cubic-bezier(0.17, 0.89, 0.31, 1.48);
    }
    [data-active="2"]& {
      background-color: @color2;
      opacity: 1;
      transform: scale(1.5);
      transition: opacity 0.5s, background-color 0.5s,
        transform 0.5s cubic-bezier(0.17, 0.89, 0.31, 1.48);
    }
    [data-active="3"]& {
      background-color: @color2;
      opacity: 1;
      transform: scale(3);
      transition: opacity 0.5s, background-color 0.5s,
        transform 0.5s cubic-bezier(0.17, 0.89, 0.31, 1.48);
    }
  }
}

.mainBlock {
  &.noTransit {
    transition: none !important;
  }

  section {
    min-height: 100vh;
    padding: 0;
  }

  .contentWrapper {
    position: relative;
    width: 95vh;
    margin: auto;
    height: 100%;
  }
}

.sectionWelcome {
  .contentWrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  figure {
    perspective: 1000px;
    perspective-origin: bottom;
    margin: 0 0 1em;
    width: 50%;
  }

  img {
    width: 100%;
    transform: rotateX(90deg);
    transform-origin: bottom;
    transition: transform 0.5s 0.5s;
  }

  h1 {
    color: #000;
    font-family: "Heebo";
    font-size: 3em;
    line-height: 1;
    margin: 0.5em 0;
    transition: all 0.7s 0.8s;
  }
  .buttonBlack {
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Heebo";
    font-size: 1em;
    padding: 1.2em 1.8em;
    margin: 1.5em 0;
    transition: all 0.7s 1s;
    i {
      color: @color1;
      padding-left: 0.5em;
      font-size: 2em;
      line-height: 0;
      display: inline-block;
      vertical-align: middle;
    }
  }
  a.skip {
    text-transform: uppercase;
    font-size: 0.8em;
    color: @color2;
    opacity: 0.6;
    transition: all 0.7s 1s;
    &:hover {
      transition: opacity 0.3s;
      opacity: 1;
    }
  }
  h1,
  .buttonBlack,
  a.skip {
    transform: translateY(0.5em);
    opacity: 0;
  }
  .customerCount {
    background-color: #fff;
    font-size: 1.1em;
    color: @color2;
    border-radius: 50%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1em 2em rgba(0, 0, 0, 0.5);
    font-style: normal;
    width: 10em;
    height: 10em;
    right: 4%;
    bottom: 9%;
    transform: scale(0.3);
    opacity: 0;
    i {
      color: #dc3a61;
      font-size: 2.2em;
      margin-bottom: 0.3em;
      animation: heartBeat 1.3s ease-in-out 40;
    }

    strong {
      display: block;
      font-size: 2.3em;
      line-height: 1;
    }

    small {
      font-weight: bold;
      opacity: 0.4;
    }
  }
  &.play {
    img {
      transform: rotateX(0);
    }
    h1,
    .buttonBlack {
      transform: translateY(0);
      opacity: 1;
    }
    a.skip {
      transform: translateY(0);
      opacity: 0.6;
    }
    .customerCount {
      transform: scale(1);
      opacity: 1;
      transition: all 0.4s 1.2s;
    }
  }
}

.sectionSetup {
  .contentWrapper {
    width: 120vh !important;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 3.5em;
    font-family: "agb";
    line-height: 1.1;
    margin: 0;
    color: @color1;
  }

  h4 {
    color: #43778f;
    font-weight: normal;
    font-size: 1.2em;
    line-height: 1.6;
    margin: 0.8em 0;
    span {
      color: #a5ddf7;
    }
  }

  nav {
    background-color: #0d3e55;
    padding: 1em;
    border-radius: 3em;
    font-size: 1em;
    margin: 1em 0;
    position: relative;
    counter-reset: count;
    i {
      background-color: #fff;
      width: 9em;
      height: 2.8em;
      position: absolute;
      left: 0;
      top: 0;
      margin: 1em;
      border-radius: 2em;
      transition: left 0.4s;
      [data-step="2"]& {
        left: 12.1em;
      }
      [data-step="3"]& {
        left: 24.3em;
      }
    }
    a {
      color: #43778f;
      display: inline-block;
      width: 9em;
      text-decoration: none;
      padding: 0.5em 1.5em 0.5em 0.5em;
      border-radius: 2em;
      position: relative;
      z-index: 2;
      text-align: left;
      transition: color 0.4s;
      &:before {
        color: @color2;
        counter-increment: count;
        content: counter(count);
        width: 1.8em;
        height: 1.8em;
        display: inline-flex;
        vertical-align: middle;
        background: #43778f;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 1em;
        transition: all 0.4s;
      }
      &:not(:last-child) {
        margin-right: 3em;
        &:after {
          content: "\e905";
          font-family: "icomoon" !important;
          position: absolute;
          right: -2em;
          transform: scaleY(1.8);
          top: 0.85em;
          transition: color 0.4s;
        }
      }
    }
  }
  &[data-step="1"] nav a[data-step="1"],
  &[data-step="2"] nav a[data-step="2"],
  &[data-step="3"] nav a[data-step="3"] {
    color: @color2;
    &:before {
      color: #fff;
      background-color: @color1;
    }
    &:after {
      color: #fff;
    }
  }

  .bottomNav {
    position: relative;
    z-index: 2;
    text-align: right;
    width: 100%;
    .back {
      display: inline-block;
      margin-right: 2em;
      font-size: 1.1em;
      text-transform: none;
      text-decoration: none;
      color: #fff;
      border: 1px solid;
      padding: 0.5em 1em;
      border-radius: 2em;
      vertical-align: middle;
      i {
        color: @color1;
        padding-right: 0.3em;
      }
    }
  }
  &[data-step="1"] .setupSteps.step-1,
  &[data-step="2"] .setupSteps.step-2,
  &[data-step="3"] .setupSteps.step-3 {
    z-index: 1;
    opacity: 1;
  }
  .setupStepsWrapper {
    width: 100%;
    position: relative;
    &:before {
      content: "";
      display: block;
      padding-bottom: 48%;
    }
  }
  .setupSteps {
    width: 100%;
    opacity: 0;
    transition: opacity 1s;
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    margin: 4em 0 0;
    transform: translateX(-5%);

    figure {
      min-width: 68%;
      margin: 0;
      border-radius: 0.5em;
      overflow: hidden;
      box-shadow: 0 1em 2em rgba(0, 0, 0, 0.5);
      transform: translateX(-8%);
    }

    img {
      width: 100%;
      vertical-align: middle;
    }

    .stepInfo {
      margin-top: 2em;
      text-align: left;
      min-width: 40%;
      font-size: 1.15em;
      padding-left: 1em;

      i {
        color: @color2;
        width: 2.5em;
        display: flex;
        height: 2.5em;
        border-radius: 50%;
        background: @color1;
        align-items: center;
        font-style: normal;
        justify-content: center;
        font-family: "agb";
        font-size: 1.1em;
      }

      h5 {
        color: #fff;
        font-size: 1.5em;
        font-weight: 800;
        line-height: 1.3;
        margin: 1em 0;

        &:after {
          content: "";
          display: block;
          height: 0.15em;
          width: 50%;
          background-color: #0d3e55;
          margin: 0.7em 0 0;
        }
      }

      p {
        color: #6d9aaf;
        opacity: 1;
        font-size: 0.9em;
        padding-right: 20%;
      }
    }
  }
}
section.sectionReady {
  position: relative;
  &.play {
    .contentWrapper {
      opacity: 1;
    }
    span.circle {
      animation: fadeout 1s 1.9s forwards;
      .donut {
        stroke-dashoffset: 0;
      }
    }
  }
  span.circle {
    background: conic-gradient(#093042 100%, #3bda82 100%);
    width: 90vh;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    svg {
      width: 100%;
    }
    .donut {
      stroke-dashoffset: 1575;
      transition: stroke-dashoffset 1s 0.5s;
    }
  }

  .contentWrapper {
    color: #fff;
    display: flex;
    flex-direction: column;
    width: 90vh;
    height: 90vh;
    padding: 3.5em;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    opacity: 0;
    transition: opacity 1s 1.3s;
  }

  h3 {
    color: #fff;
    font-size: 3em;
    font-family: "agb";
    margin: 0;
  }
  ul {
    display: flex;
    align-items: center;
    position: relative;
    list-style: none;
    padding: 0;
    margin: 4em 0;
    &:before {
      content: "";
      width: 1px;
      position: absolute;
      height: 100%;
      background-color: rgba(49, 131, 169, 0.5);
      left: 50%;
      top: 0;
    }
  }
  li {
    padding: 0 4em;
    i[class*="icon-"] {
      color: #7ac6fb;
      font-size: 2em;
      border: 2px solid;
      border-radius: 50%;
      width: 2em;
      display: flex;
      height: 2em;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1em;
    }
  }
  p {
    color: #3183a9;
    line-height: 1.2;
    margin: 0;
  }

  .button {
    font-size: 1em;
    padding: 0.6em 2em 0.6em 3em;
    text-transform: uppercase;
    display: block;
  }
}
@media only screen and (max-width: 1500px) {
  .mainBlock {
    font-size: 12px;

    .contentWrapper,
    i.circle {
      width: 95vh;
    }
  }
}
@keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.previewSwitch {
  cursor: pointer;
  width: 6.5em;
  height: 1.7em;
  background-color: #fff;
  border-radius: 2em;
  position: relative;

  i {
    width: 45%;
    background-color: #f00;
    display: block;
    border-radius: 50%;
    margin-top: -0.6em;
    z-index: 1;
    position: absolute;
    left: 0;
    transition: all 0.4s;

    &:before {
      display: block;
      padding-bottom: 100%;
      content: "";
    }
  }

  strong {
    text-transform: uppercase;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    color: #000;
    line-height: 2.2;
    padding: 0 1em;
    font-size: 0.8em;
    transition: opacity 0.4s;

    &:first-of-type {
      color: #ff851e;
      text-align: left;
      opacity: 0;
    }

    &:last-of-type {
      color: #f00;
      text-align: right;
    }
  }

  &.active {
    i {
      background-color: #ff851e;
      left: 57%;
    }

    strong {
      &:first-of-type {
        opacity: 1;
      }

      &:last-of-type {
        opacity: 0;
      }
    }
  }
}
</style>