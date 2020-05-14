<template>
  <b-alert
    :show="dismissCountDown"
    dismissible
    fade
    variant="danger"
    class="commonError"
    @dismissed="dismissCountDown=0"
    @dismiss-count-down="countDownChanged"
  >
    <p>{{commonError}}</p>
  </b-alert>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["error"],
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  watch: {
    error: function(error) {
      if (error) {
        this.dismissCountDown = this.dismissSecs;
      }
    },
    dismissCountDown: function(timer) {
      if (!timer) {
        this.setCommonError(null);
      }
    }
  },
  computed: {
    ...mapState(["commonError"])
  },
  methods: {
    ...mapActions(["setCommonError"]),
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    }
  }
};
</script>
<style lang="less" scoped>
.commonError {
  position: fixed;
  bottom: 10px;
  width: 80%;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 200;
  border-radius: 5px;
  background-color: #ea2525;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  p {
    margin: 0.5em 0;
    font-size: 16px;
  }
}
</style>