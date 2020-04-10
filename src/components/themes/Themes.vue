<template>
  <b-tabs nav-wrapper-class="themeSetupTab">
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
            <div class="tab-pane active" v-if="activePsetup === 'mobile'" id="nav-mobile">asdasdasd asd</div>
            <div class="tab-pane active" v-if="activePsetup === 'desktop'" id="nav-desktop">344564</div>
          </div>
        </div>
      </div>
    </b-tab>
    <b-tab title="Widget Setup" class="widgetSetup">das</b-tab>
  </b-tabs>
</template>

<script>
export default {
  name: "Themes",
  data: function() {
    return {
      activePsetup: "mobile",
    }
  }
};
</script>