<template>
  <div class="grOnboarding">
    <div class="setupPage d-flex flex-column">
      <header>
        <div class="grad">
          <a href="#" class="logo">
            <img src="@/images/logo_gr_white.png" alt="Gratisfaction" />
          </a>
          <router-link to="/" class="viewOnboarding">
            View Onboarding tutorial
            <i class="icon-onboard"></i>
          </router-link>
        </div>
      </header>
      <div class="languageSetup flex-grow-1 d-flex align-items-center justify-content-center">
        <div class="languageCard">
          <h1>Choose language for communication</h1>
          <p>Make sure to check all the texts on rewards and share setups</p>
          <small>Note: Backoffice settings will remain in english</small>
          <section class="d-flex mt-4">
            <img src="@/images/lang.png" alt />
            <div class="flex-grow-1 pl-5 d-flex flex-column align-items-end justify-content-center">
              <b-dropdown
                class="languageSelector"
                variant="outline-dark"
                menu-class="w-100"
                toggle-class="lang-btn"
              >
                <template v-slot:button-content>
                  Custom
                  <strong>Content</strong> with
                  <em>HTML</em> via Slot
                </template>
                <b-dropdown-item href="#">An item</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item href="#">Another item</b-dropdown-item>
                <b-dropdown-group id="dropdown-group-1" header="Group 1">
                  <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
                  <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
                </b-dropdown-group>
              </b-dropdown>
              <b-button variant="success">Begin Now</b-button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/styles/overwrite-bootstrap.css";
// Install BootstrapVue
Vue.use(BootstrapVue);
export default {
  name: "Language"
};
</script>
<style lang="less" >
.languageSetup {
  background-color: #fafafa;
  font-family: heebo;
}
.languageCard {
  background-color: #fff;
  width: 70%;
  max-width: 840px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 80px;
  margin-bottom: 50px;
  position: relative;
  h1 {
    color: #333;
    font-size: 26px;
    margin: 0;
  }
  p {
    color: #838383;
    font-size: 14px;
    margin: 0;
  }
  small {
    color: #838383;
    font-size: 12px;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    transform: translateY(200%);
  }
  img {
    width: 40%;
    max-width: 240px;
    vertical-align: middle;
  }
}
.languageSelector {
  width: 100%;
}
.lang-btn {
  border: 1px solid #bdc4c9;
  border-radius: 4px;
  padding: 15px;
  text-align: left;
  position: relative;
  &:after {
    content: "";
    width: 1em;
    height: 1em;
    border: none;
    border-bottom: 1px solid;
    border-right: 1px solid;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0.9em 1.2em;
    transform: rotate(45deg);
  }
}
</style>