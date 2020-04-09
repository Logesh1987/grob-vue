<template>
  <b-tabs nav-wrapper-class="themeSetupTab">
    <b-tab title="Popup Setup" class="popupSetup" active>
      <div class="row justify-content-between">
        <div class="col-md-7">
          <!-- <img
            src="@/images/popup_preview_mobile.jpg"
            class="previewImg"
            v-if="setup.themes.active_popup === 'mobile'"
          />
          <img
            src="@/images/popup_preview_desktop.jpg"
            class="previewImg"
            v-if="setup.themes.active_popup === 'desktop'"
          /> -->
        </div>
        <div class="col-md-5">
          <nav>
            <div class="nav nav-pills mb-4" id="popup-tab" role="tablist">
              <a
                class="nav-item nav-link active"
                id="nav-mobile-tab"
                data-toggle="tab"
                href="#nav-mobile"
                role="tab"
                aria-controls="nav-mobile"
                aria-selected="true"
                v-on:click="setup.themes.active_popup = 'mobile'"
              >Mobile</a>
              <a
                class="nav-item nav-link"
                id="nav-desktop-tab"
                data-toggle="tab"
                href="#nav-desktop"
                role="tab"
                aria-controls="nav-desktop"
                aria-selected="false"
                v-on:click="setup.themes.active_popup = 'desktop'"
              >Desktop</a>
            </div>
          </nav>
          <div class="tab-content" id="popup-tabContent">
            <div
              class="tab-pane active"
              id="nav-mobile"
              role="tabpanel"
              aria-labelledby="nav-mobile-tab"
            >
              <h6 class="mb-4">
                <strong>Popup styles</strong>
              </h6>
              <div class="form-group">
                <label>Font Family</label>
                <select class="form-control" id="family">
                  <option>Monserrat</option>
                  <option>Arial</option>
                  <option>Helvetica</option>
                  <option>Serif</option>
                  <option>Impact</option>
                </select>
              </div>
              <div
                id="color-picker-component"
                class="form-group d-flex flex-row align-items-center colorpicker-component"
              >
                <label for="family" class="col-md-5 p-0 m-0">Text Colors</label>
                <div class="cPicker col-md-7 p-0">
                  <input type="text" value="#38a677" class="form-control" />
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
                  <input type="text" value="#38a677" class="form-control" />
                  <span class="input-group-addon">
                    <i></i>
                  </span>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-success mt-3"
                onclick="$('#nav-desktop-tab').tab('show')"
              >Save and Next</button>
            </div>
            <div
              class="tab-pane"
              id="nav-desktop"
              role="tabpanel"
              aria-labelledby="nav-desktop-tab"
            >
              <h6>
                <strong>Desktop Popup styles</strong>
              </h6>
              <div class="form-group">
                <label>Font Family</label>
                <select class="form-control" id="family">
                  <option>Monserrat</option>
                  <option>Arial</option>
                  <option>Helvetica</option>
                  <option>Serif</option>
                  <option>Impact</option>
                </select>
              </div>
              <div
                id="color-picker-component"
                class="form-group d-flex flex-row align-items-center colorpicker-component"
              >
                <label for="family" class="col-md-5 p-0 m-0">Text Colors</label>
                <div class="cPicker col-md-7 p-0">
                  <input type="text" value="#38a677" class="form-control" />
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
                  <input type="text" value="#38a677" class="form-control" />
                  <span class="input-group-addon">
                    <i></i>
                  </span>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-success mt-3"
                onclick="$('.nav-link[aria-controls=widget-tab]').tab('show')"
              >Save and Next</button>
            </div>
          </div>
        </div>
      </div>
    </b-tab>
    <b-tab title="Widget Setup" class="widgetSetup">das</b-tab>
  </b-tabs>
</template>

<script>
export default {
  name: "Themes"
  // data: function() {

  // }
};
</script>