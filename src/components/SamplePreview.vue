<template>
  <div>
    <b-modal
      id="modal-sample"
      ref="modalSample"
      hide-footer
      hide-header-close
      title="Referrence"
      centered
      modal-class="sampleModal"
      dialog-class="modal-sample"
      body-class="d-flex flex-column"
    >
      <template v-slot:default>
        <a href class="bvClose" @click.prevent="setSample(null)">&times;</a>
        <img :src="sample" alt />
      </template>
    </b-modal>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "SamplePreview",
  data: function() {
    return {
      sample: null
    };
  },
  computed: {
    ...mapState(["sampleImg"])
  },
  watch: {
    "$store.state.sampleImg": {
      handler(val, oldVal) {
        if (val) {
          this.sample = val;
          this.$bvModal.show("modal-sample");
        } else {
          this.$bvModal.hide("modal-sample");
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(["setSample"])
  },
  mounted: function() {}
};
</script>
<style lang="less">
.sampleModal {
  .modal-sample {
    width: auto;
    max-width: 900px;
  }
  .modal-content {
    padding: 0;
  }
  .bvClose {
    text-decoration: none;
    font-size: 3em;
    line-height: 0.5;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.27em;
    color: #858585;
  }
}
</style>