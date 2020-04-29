<template>
  <Fragment>
    <a href="#" class="resetSetting" @click.prevent="openPop">
      <i class="material-icons">refresh</i>
      <u>Reset to recommended settings</u>
    </a>
    <!-- RESET MODAL -->
    <b-modal
      :id="`modal-reset-${id}`"
      ref="modalReset"
      hide-footer
      hide-header
      centered
      modal-class="setupModal modal-skip"
      body-class="d-flex flex-column align-items-center"
    >
      <template v-slot:default="{ hide }">
        <a href class="bvClose" @click.prevent="hide()">&times;</a>
        <h5>Are you sure? Do you wish to reset</h5>
        <button @click.prevent="handleConfirm" class="btn btn-success pr-5 pl-5 mt-4 mb-4">confirm</button>
      </template>
    </b-modal>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  name: "ResetBlock",
  props: ["handleReset", "id"],
  components: { Fragment },
  methods: {
    openPop() {
      this.$bvModal.show(`modal-reset-${this.id}`);
    },
    handleConfirm() {
      this.handleReset();
      this.$bvModal.hide(`modal-reset-${this.id}`);
    }
  }
};
</script>