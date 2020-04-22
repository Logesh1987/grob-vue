<template>
  <div class="setupItemContainer" v-if="this.data">
    <CardPointsProgram
      v-if="data.points_setup.purchase_status"
      :data="data.points_setup"
      :saveData="saveData"
      :cancelSave="cancelSave"
    />

    <br />
    <h6 class="mt-3 col-12 mb-3 pausedRewardHead p-0">
      <strong>Paused Rewards (During Setup)</strong>
    </h6>
    <br />

    <CardPointsProgram
      v-if="!data.points_setup.purchase_status"
      :data="data.points_setup"
      :saveData="saveData"
      :cancelSave="cancelSave"
    />
  </div>
</template>
<script>
import CardPointsProgram from "@/components/congrats/cards/CardPointsProgram.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "SetupList",
  components: { CardPointsProgram },
  data: function() {
    return {
      data: null
    };
  },
  computed: {
    ...mapState(["setupData"])
  },
  methods: {
    ...mapActions(["getSetupData", "saveSetupData"]),
    saveData: function() {
      this.saveSetupData(this.data).then(
        res => (this.data = JSON.parse(JSON.stringify(this.setupData)))
      );
    },
    cancelSave: function() {
      this.data = JSON.parse(JSON.stringify(this.setupData));
    }
  },
  mounted: function() {
    if (this.setupData == null) {
      this.getSetupData().then(res => {
        this.data = JSON.parse(JSON.stringify(res));
      });
    } else this.data = JSON.parse(JSON.stringify(this.setupData));
  }
};
</script>
<style lang="less">
.modal-edit {
  .modal-dialog {
    max-width: 650px !important;
  }
  .modal-content {
    padding: 0 !important;
  }
  .setupContainer {
    margin: 50px 0 0;
    border: none;
  }
}
</style>