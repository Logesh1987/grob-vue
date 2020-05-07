<template>
  <div class="widgetWrap">
    <div v-if="type === 0">
      <img src="@/images/widget_preview_mobile.jpg" class="previewImg" />
      <div class="wContainer mobile">
        <div
          class="am-widgetbar-side-drawer am-widgetbar am-widgetbar-gratisfaction GRWidget"
          :class="[
            (data.data.style_data.w_mobile_view === 'compact') ? 'am-mob-compact' : (data.data.style_data.w_mobile_view === 'hidden') ? 'am-mob-hidden' : 'am-mob-full',
            (data.data.style_data.mobile_position === 'mid') ? 'am-mob-mid' : (data.data.style_data.mobile_position === 'left' ? 'am-mob-left' : '')
        ]"
          :style="{'backgroundColor': data.data.style_data.norm_bg_color}"
        >
          <div class="am-GRwidgetbar-box">
            <!-- <div class="am-GRwidgetbar-bg-image" style="background-image: url('');"></div> -->
            <div class="am-widgetbar-content">
              <div class="am-widgetbar-logo-wrap">
                <img
                  :src="data.data.style_data.widget_logo_img"
                  class="widgetLogoImg am-widgetbar-logo"
                  id="right-vertical-logo-img"
                />
              </div>
              <div class="am-widgetbar-title-group">
                <div
                  class="am-widgetbar-maintitle"
                  id="side-bar-vert-title"
                  :style="{'color': data.data.style_data.norm_txt_color}"
                >REWARDS</div>
                <div class="am-widgetbar-subtitle" id="right-bar-vert-sub-title"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <img src="@/images/widget_preview_desktop.jpg" class="previewImg" />
      <div class="wContainer desktop">
        <div
          class="am-widgetbar am-widgetbar-gratisfaction GRWidget"
          :class="[data.data.position ? `am-widgetbar-${data.data.position}` : 'am-hidden', (data.data.style_data.w_desktop_view === 'compact') ? 'am-compact' : (data.data.style_data.w_desktop_view === 'hidden') ? 'am-hidden' : '']"
          :style="{'backgroundColor': data.data.style_data.norm_bg_color}"
        >
          <div class="am-GRwidgetbar-box">
            <!-- <div class="am-GRwidgetbar-bg-image" style="background-image: url('');"></div> -->
            <div class="am-widgetbar-content">
              <div class="am-widgetbar-logo-wrap">
                <img
                  :src="data.data.style_data.widget_logo_img"
                  class="widgetLogoImg am-widgetbar-logo"
                  id="right-vertical-logo-img"
                />
              </div>
              <div class="am-widgetbar-title-group">
                <div
                  class="am-widgetbar-maintitle"
                  id="side-bar-vert-title"
                  :style="{'color': data.data.style_data.norm_txt_color}"
                >REWARDS</div>
                <div class="am-widgetbar-subtitle" id="right-bar-vert-sub-title"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/styles/gr_widget.less";
export default {
  name: "WidgetPreview",
  props: ["data", "type"]
};
</script>

<style lang="less" scoped>
.widgetWrap {
  position: relative;
}
.wContainer {
  position: absolute;
  &.desktop {
    top: 16%;
    bottom: 9%;
    left: 8.5%;
    right: 7.5%;
  }
  &.mobile {
    left: 32%;
    right: 31%;
    top: 18%;
    bottom: 18%;
  }
}
</style>