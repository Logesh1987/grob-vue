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

        <b-modal
          id="modal-skip"
          ref="modalSkip"
          hide-footer
          hide-header
          modal-class="setupModal modal-skip"
          body-class="align-items-center"
        >
          <template v-slot:default="{ hide }">
            <a class="bvClose" @click.prevent="hide()">&times;</a>
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
      </header>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./style.less";

// Install BootstrapVue
Vue.use(BootstrapVue);
export default {
  data: function() {
    return {
      data: ""
    };
  }
};
</script>
