<template>
  <div>
    <b-tabs v-if="pData" v-model="tabIndex" nav-wrapper-class="themeSetupTab">
      <b-tab title="Popup Setup" class="popupSetup" active>
        <div class="row justify-content-between">
          <div class="col-md-7 p-0 popPreview">
            <nav>
              <div class="nav nav-pills mb-4" id="popup-tab" role="tablist">
                <a
                  class="nav-item nav-link"
                  :class="{'active' : activePsetup === 'mobile'}"
                  id="nav-mobile-tab"
                  href="#nav-mobile"
                  @click.prevent="activePsetup = 'mobile'"
                >Mobile</a>
                <a
                  class="nav-item nav-link"
                  :class="{'active' : activePsetup === 'desktop'}"
                  id="nav-desktop-tab"
                  data-toggle="tab"
                  href="#nav-desktop"
                  @click.prevent="activePsetup = 'desktop'"
                >Desktop</a>
              </div>
            </nav>
            <div class="pMobile previewPop" v-if="activePsetup === 'mobile'">
              <img src="@/images/popup_preview_mobile.jpg" class="previewImg" />
              <div class="popup" :style="{'backgroundColor': pData.bg_color}">
                <div
                  class="textBox"
                  :style="{'backgroundColor': pData.styles_data.font_color_main}"
                ></div>
              </div>
            </div>
            <div class="pDesktop previewPop" v-if="activePsetup === 'desktop'">
              <img src="@/images/popup_preview_desktop.jpg" class="previewImg" />
              <div class="popup" :style="{'backgroundColor': pData.bg_color}">
                <div
                  class="textBox"
                  :style="{'backgroundColor': pData.styles_data.font_color_main}"
                ></div>
              </div>
            </div>
          </div>
          <div class="col-md-5 text-left pr-0">
            <div class="tab-content" id="popup-tabContent">
              <div class="tab-pane active" id="nav-mobile">
                <h6 class="mb-4">
                  <strong>Popup styles</strong>
                </h6>
                <div class="form-group">
                  <label>Font Family</label>
                  <select
                    class="form-control"
                    v-model="pData.styles_data.font_family_main"
                    id="family"
                  >
                    <option
                      v-for="item in pData.fonts"
                      :key="item.name"
                      :value="item.font_group"
                    >{{ item.font_group }}</option>
                  </select>
                </div>
                <div
                  id="color-picker-component"
                  class="form-group d-flex flex-row align-items-center colorpicker-component"
                >
                  <label for="family" class="col-md-5 p-0 m-0">Text Colors</label>
                  <verte picker="square" v-model="pData.styles_data.font_color_main" model="hex">
                    <input
                      type="text"
                      v-model="pData.styles_data.font_color_main"
                      class="form-control"
                    />
                    <span
                      class="palette"
                      :style="{'backgroundColor': pData.styles_data.font_color_main}"
                    ></span>
                  </verte>
                </div>
                <div
                  id="color-picker-component"
                  class="form-group d-flex flex-row align-items-center colorpicker-component"
                >
                  <label for="family" class="col-md-5 p-0 m-0">BG Colors</label>
                  <verte picker="square" v-model="pData.bg_color" model="hex">
                    <input type="text" v-model="pData.bg_color" class="form-control" />
                    <span class="palette" :style="{'backgroundColor': pData.bg_color}"></span>
                  </verte>
                </div>
                <button
                  type="submit"
                  class="btn btn-success mt-3"
                  @click.prevent="handlePdataSave"
                >{{ page == 'setup' ? 'Save and Next' : 'Save Popup'}}</button>
              </div>
              <!--<div
                class="tab-pane active text-left"
                v-if="activePsetup === 'desktop'"
                id="nav-desktop"
              >
                <h6 class="mb-4">
                  <strong>Desktop Popup styles</strong>
                </h6>
                <div class="form-group">
                  <label>Font Family</label>
                  <select
                    class="form-control"
                    v-model="pData.styles_data.font_family_main"
                    id="family"
                  >
                    <option
                      v-for="item in pData.fonts"
                      :key="item.name"
                      :value="item.font_group"
                    >{{ item.font_group }}</option>
                  </select>
                </div>
                <div
                  id="color-picker-component"
                  class="form-group d-flex flex-row align-items-center colorpicker-component"
                >
                  <label for="family" class="col-md-5 p-0 m-0">Text Colors</label>
                  <div class="cPicker col-md-7 p-0">
                    <input
                      type="text"
                      v-model="pData.styles_data.font_color_main"
                      class="form-control"
                    />
                    <span class="input-group-addon">
                      <i></i>
                    </span>
                  </div>
                </div>
                <div
                  id="color-picker-component"
                  class="form-group d-flex flex-row align-items-center colorpicker-component"
                >
                  <label for="family" class="col-md-5 p-0 m-0">BG Colors</label>
                  <div class="cPicker col-md-7 p-0">
                    <input type="text" v-model="pData.bg_color" class="form-control" />
                    <span class="input-group-addon">
                      <i></i>
                    </span>
                  </div>
                  <verte picker="square" v-model="pData.bg_color" model="hex">
                    <input type="text" v-model="pData.bg_color" class="form-control" />
                    <span class="palette" :style="{'backgroundColor': pData.bg_color}"></span>
                  </verte>
                </div>
                <button
                  type="submit"
                  class="btn btn-success mt-3"
                  @click.prevent="handlePdataSave"
                >Save and Next</button>
              </div>-->
            </div>
            <div class="sampleDemo">
              <strong>Sample Demo:</strong>
              <p>Shown the screens here are placeholder campaign, this may not resemble your setup.</p>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab
        title="Widget Setup"
        class="widgetSetup"
        :title-link-class="[!enableWidget ? 'disabled' : '']"
      >
        <div class="row justify-content-between" v-if="wData">
          <div class="col-md-7 p-0">
            <WidgetPreview :type="activeWidget" :data="wData" />
          </div>
          <div class="col-md-5 pr-0 text-left">
            <b-tabs v-model="activeWidget" nav-wrapper-class="widget-tabs-nav">
              <b-tab title="Mobile" class="widget-tabs-panes" active>
                <div class="form-group mt-4">
                  <label>Widget Look</label>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="wm-look-1"
                      value="compact"
                      v-model="wData.data.style_data.w_mobile_view"
                      name="wm-look"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="wm-look-1">Compact</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="wm-look-2"
                      value="full"
                      v-model="wData.data.style_data.w_mobile_view"
                      name="wm-look"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="wm-look-2">Full</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="wm-look-3"
                      value="hidden"
                      v-model="wData.data.style_data.w_mobile_view"
                      name="wm-look"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="wm-look-3">Hide Widget</label>
                  </div>
                </div>
                <div class="form-group" v-if="wData.data.style_data.w_mobile_view == 'compact'">
                  <label>Widget Placement</label>
                  <select class="form-control" v-model="wData.data.style_data.mobile_position">
                    <option
                      v-for="(value, name) in wData.data.mobile_widget_position"
                      :value="name"
                      :key="value"
                    >{{value}}</option>
                  </select>
                </div>
                <div
                  id="color-picker-component"
                  class="form-group d-flex flex-row align-items-center colorpicker-component"
                >
                  <label for="family" class="col-md-5 p-0 m-0">Text Color</label>
                  <verte
                    picker="square"
                    :enableAlpha="false"
                    v-model="wData.data.style_data.norm_txt_color"
                    model="hex"
                  >
                    <input
                      type="text"
                      v-model="wData.data.style_data.norm_txt_color"
                      class="form-control"
                    />
                    <span
                      class="palette"
                      :style="{'backgroundColor': wData.data.style_data.norm_txt_color}"
                    ></span>
                  </verte>
                </div>
                <div
                  id="color-picker-component"
                  class="form-group d-flex flex-row align-items-center colorpicker-component"
                >
                  <label for="family" class="col-md-5 p-0 m-0">BG Color</label>
                  <verte
                    picker="square"
                    :enableAlpha="false"
                    v-model="wData.data.style_data.norm_bg_color"
                    model="hex"
                  >
                    <input
                      type="text"
                      v-model="wData.data.style_data.norm_bg_color"
                      class="form-control"
                    />
                    <span
                      class="palette"
                      :style="{'backgroundColor': wData.data.style_data.norm_bg_color}"
                    ></span>
                  </verte>
                </div>
                <div class="form-group mt-4">
                  <label>Widget Icon</label>
                  <div class="iconSwiper">
                    <swiper :options="swiperOptions">
                      <swiper-slide v-for="(icon, index) in icons" :key="index">
                        <div
                          class="icon"
                          :class="{'active': wData.data.style_data.widget_logo_img === icon}"
                          @click.prevent="wData.data.style_data.widget_logo_img = icon"
                        >
                          <img :src="icon" alt />
                        </div>
                      </swiper-slide>
                    </swiper>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-success mt-3"
                  @click.prevent="activeWidget = 1"
                >Save and Next</button>
              </b-tab>
              <b-tab title="Desktop" class="widget-tabs-panes">
                <div class="form-group">
                  <label>Widget Placement</label>
                  <select class="form-control" v-model="wData.data.position">
                    <option
                      v-for="(value, name) in wData.data.widget_position"
                      :value="name"
                      :key="value"
                    >{{value}}</option>
                  </select>
                </div>
                <div class="form-group mt-4">
                  <label>Widget Look</label>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="wd-look-1"
                      value="compact"
                      v-model="wData.data.style_data.w_desktop_view"
                      name="wd-look"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="wd-look-1">Compact</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="wd-look-2"
                      value="full"
                      v-model="wData.data.style_data.w_desktop_view"
                      name="wd-look"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="wd-look-2">Full</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="wd-look-3"
                      value="hidden"
                      v-model="wData.data.style_data.w_desktop_view"
                      name="wd-look"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="wd-look-3">Hide Widget</label>
                  </div>
                </div>
                <div
                  id="color-picker-component"
                  class="form-group d-flex flex-row align-items-center colorpicker-component"
                >
                  <label for="family" class="col-md-5 p-0 m-0">Text Color</label>
                  <verte
                    picker="square"
                    :enableAlpha="false"
                    v-model="wData.data.style_data.norm_txt_color"
                    model="hex"
                  >
                    <input
                      type="text"
                      v-model="wData.data.style_data.norm_txt_color"
                      class="form-control"
                    />
                    <span
                      class="palette"
                      :style="{'backgroundColor': wData.data.style_data.norm_txt_color}"
                    ></span>
                  </verte>
                </div>
                <div
                  id="color-picker-component"
                  class="form-group d-flex flex-row align-items-center colorpicker-component"
                >
                  <label for="family" class="col-md-5 p-0 m-0">BG Color</label>
                  <verte
                    picker="square"
                    :enableAlpha="false"
                    v-model="wData.data.style_data.norm_bg_color"
                    model="hex"
                  >
                    <input
                      type="text"
                      v-model="wData.data.style_data.norm_bg_color"
                      class="form-control"
                    />
                    <span
                      class="palette"
                      :style="{'backgroundColor': wData.data.style_data.norm_bg_color}"
                    ></span>
                  </verte>
                </div>
                <div class="form-group mt-4">
                  <label>Widget Icon</label>
                  <div class="iconSwiper">
                    <swiper :options="swiperOptions">
                      <swiper-slide v-for="(icon, index) in icons" :key="index">
                        <div
                          class="icon"
                          :class="{'active': wData.data.style_data.widget_logo_img === icon}"
                          @click.prevent="wData.data.style_data.widget_logo_img = icon"
                        >
                          <img :src="icon" alt />
                        </div>
                      </swiper-slide>
                    </swiper>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-success mt-3"
                  v-if="page === 'congrats'"
                  @click.prevent="handleSaveWidget"
                >Save Widget</button>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </b-tab>
    </b-tabs>
    <footer class="saveBar final" v-if="tabIndex && page == 'setup'">
      <i class="dots"></i>
      <div class="container">
        <div class="row justify-content-between">
          <ul class="footProgress">
            <li class="completed">
              <i class="material-icons">check</i>
            </li>
            <li class="completed">
              <i class="material-icons">check</i>
            </li>
            <li class="completed">
              <i class="material-icons">check</i>
            </li>
            <li class="text">
              You’ve completed all steps.
              <br />Proceed to live your program
            </li>
          </ul>
          <button class="btn btn-light" @click.prevent="handleSaveWidget">
            Publish Now
            <i class="material-icons">keyboard_arrow_right</i>
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Verte from "verte";
import WidgetPreview from "@/components/themes/WidgetPreview";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "verte/dist/verte.css";
import "swiper/css/swiper.css";

const icon1 = require("@/images/icons/01.png");
const icon2 = require("@/images/icons/02.png");
const icon3 = require("@/images/icons/03.png");
const icon4 = require("@/images/icons/04.png");
const icon5 = require("@/images/icons/05.png");
const icon6 = require("@/images/icons/06.png");
const icon7 = require("@/images/icons/07.png");
const icon8 = require("@/images/icons/08.png");
export default {
  name: "Themes",
  components: { Verte, WidgetPreview, Swiper, SwiperSlide },
  props: ["page"],
  data: function() {
    return {
      tabIndex: 0,
      activePsetup: "mobile",
      activeWidget: 0,
      enableWidget: false,
      pData: null,
      wData: null,
      icons: [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8],
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    ...mapState(["popupData", "widgetData"])
  },
  watch: {
    "$store.state.widgetData": {
      handler() {
        this.wData = this.widgetData;
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(["saveThemeSettings", "getWidgetData", "saveWidgetData"]),
    handlePdataSave: function() {
      this.saveThemeSettings(this.pData).then(res => {
        if (this.page === "setup") {
          this.enableWidget = true;
          this.tabIndex = 1;
          console.log(this.tabIndex);
        }
      });
    },
    handleSaveWidget: function() {
      this.saveWidgetData(this.wData.data).then(res => {
        if (this.page === "setup") {
          this.$router.push("congrats");
        }
      });
    }
  },
  mounted: function() {
    this.pData = this.popupData;
    if (this.page === "congrats") this.enableWidget = true;
  }
};
</script>