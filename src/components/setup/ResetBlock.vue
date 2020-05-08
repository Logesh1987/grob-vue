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
      modal-class="modal-reset"
      body-class
    >
      <template v-slot:default="{ hide }">
        <h5>Reset to Default</h5>
        <p>Reset will be applied only for this step</p>
        <nav>
          <b-button variant="success" @click.prevent="handleConfirm" class="px-5 py-3">Confirm</b-button>
          <b-button variant="outline-secondary" @click.prevent="hide()" class="px-5 py-3">Cancel</b-button>
        </nav>
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

<style lang="less">
.modal-reset {
  .modal-content {
    border-radius: 10px;
    padding: 50px 80px;
  }
  .modal-body {
    padding: 0;
  }
  p {
    opacity: 0.5;
  }
  nav {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    button {
      width: 48%;
      &.btn-outline-secondary {
        opacity: 0.5;
      }
    }
  }
}
</style>