<template>
  <div>
    <b-tabs v-if="pData" v-model="tabIndex" nav-wrapper-class="themeSetupTab">
      <b-tab title="Popup Setup" class="popupSetup" active>
        <div class="row justify-content-between">
          <div class="col-md-7">
            <img
              src="@/images/popup_preview_mobile.jpg"
              class="previewImg"
              v-if="activePsetup === 'mobile'"
            />
            <img
              src="@/images/popup_preview_desktop.jpg"
              class="previewImg"
              v-if="activePsetup === 'desktop'"
            />
          </div>
          <div class="col-md-5">
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
            <div class="tab-content" id="popup-tabContent">
              <div
                class="tab-pane active text-left"
                id="nav-mobile"
              >
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
                </div>
                <button
                  type="submit"
                  class="btn btn-success mt-3"
                  @click.prevent="handlePdataSave"
                >Save and Next</button>
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
                </div>
                <button
                  type="submit"
                  class="btn btn-success mt-3"
                  @click.prevent="handlePdataSave"
                >Save and Next</button>
              </div> -->
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Widget Setup" class="widgetSetup">
        <div class="row justify-content-between">
          <div class="col-md-7">
            <img
              src="@/images/widget_preview_mobile.jpg"
              class="previewImg"
              v-if="activeWidget === 0"
            />
            <img
              src="@/images/widget_preview_desktop.jpg"
              class="previewImg"
              v-if="activeWidget === 1"
            />
          </div>
          <div class="col-md-5 text-left" v-if="wData">
            <b-tabs v-model="activeWidget" nav-wrapper-class="widget-tabs-nav">
              <b-tab title="Mobile" class="widget-tabs-panes" active>
                <div class="form-group">
                  <label>Widget Placement</label>
                  <select class="form-control" v-model="wData.style_data.mobile_position">
                    <option v-for="value in wData.widget_position" :key="value">{{value}}</option>
                  </select>
                </div>
                <div class="form-group mt-4">
                  <label>Widget Look</label>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="wm-look-1"
                      value="compact"
                      v-model="wData.style_data.w_mobile_view"
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
                      v-model="wData.style_data.w_mobile_view"
                      name="wm-look"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="wm-look-2">Full</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="wm-look-3"
                      value="hide"
                      v-model="wData.style_data.w_mobile_view"
                      name="wm-look"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="wm-look-3">Hide Widget</label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-success mt-3"
                 @click.prevent="handleSaveWidget"
                >Save and Next - Mobile</button>
              </b-tab>
              <b-tab title="Desktop" class="widget-tabs-panes">
                <div class="form-group">
                  <label>Widget Placement</label>
                  <select class="form-control" v-model="wData.style_data.mobile_position">
                    <option v-for="value in wData.widget_position" :key="value">{{value}}</option>
                  </select>
                </div>
                <div class="form-group mt-4">
                  <label>Widget Look</label>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="wd-look-1"
                      value="compact"
                      v-model="wData.style_data.w_desktop_view"
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
                      v-model="wData.style_data.w_desktop_view"
                      name="wd-look"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="wd-look-2">Full</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="wd-look-3"
                      value="hide"
                      v-model="wData.style_data.w_desktop_view"
                      name="wd-look"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="wd-look-3">Hide Widget</label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-success mt-3"
                 @click.prevent="handleSaveWidget"
                >Save and Next - Desktop</button>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </b-tab>
    </b-tabs>
    <footer class="saveBar" v-if="activeWidget">
      <div class="container">
        <div class="row justify-content-end">
          <button class="btn btn-light" @click.prevent="handleSaveWidget">
            Save and Publish
            <i class="material-icons">keyboard_arrow_right</i>
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Themes",
  data: function() {
    return {
      tabIndex: 0,
      activePsetup: "mobile",
      activeWidget: 0,
      pData: null,
      wData: null
    };
  },
  computed: {
    ...mapState(["popupData", "widgetData"])
  },
  methods: {
    ...mapActions(["saveThemeSettings", "getWidgetData", "saveWidgetData"]),
    handlePdataSave: function() {
      this.saveThemeSettings(this.pData).then(res => {
        this.getWidgetData().then(response => {
          this.wData = response;
          this.tabIndex = 1;
        });
      });
    },
    handleSaveWidget: function() {
      this.saveWidgetData(this.wData).then(res => {
        //this.$router.push('congrats')
      })
    }
  },
  mounted: function() {
    this.pData = this.popupData;
  }
};
</script>