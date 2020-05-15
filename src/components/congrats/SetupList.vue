<template>
  <div>
    <div class="setupItemContainer" v-if="data">
      <transition name="slide-fade">
        <CardPointsProgram
          v-if="data.points_setup.purchase_status == '1'"
          :data="data.points_setup"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardSignupBonus
          v-if="data.points_setup.bonus_status == '1'"
          :data="data.points_setup"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardPaybyPoints
          v-if="data.points_setup.redeem_purchase_status == '1' && data.shop.plugin_type == 'WP'"
          :data="data.points_setup"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardReferralProgram
          v-if="data.referral.status == '1'"
          :data="data.referral"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardFacebookShare
          v-if="data.entries.facebook_share.status == '1'"
          :data="data.entries"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardTwitterShare
          v-if="data.entries.twitter_tweet.status == '1'"
          :data="data.entries"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardBirthdayRewards
          v-if="data.events.status == '1'"
          :data="data.events"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardWooRewards
          v-if="data.reviews.woo_reviews.review_status == '1'"
          :data="data.reviews"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardNewsletter
          v-if="data.entries.newsletter_subscription.status == '1'"
          :data="data.entries"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
    </div>
    <!-- <div v-if="this.$refs.pausedItem && this.$refs.pausedItem.querySelector('.setupItemList')"> -->
    <div>
      <br />
      <h6 class="mt-3 col-12 mb-3 pausedRewardHead p-0">
        <strong>Paused Rewards (During Setup)</strong>
      </h6>
    </div>
    <div class="setupItemContainer pausedItem" ref="pausedItem" v-if="this.data">
      <transition name="slide-fade">
        <CardPointsProgram
          v-if="data.points_setup.purchase_status == '0'"
          :data="data.points_setup"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardSignupBonus
          v-if="data.points_setup.bonus_status == '0'"
          :data="data.points_setup"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardPaybyPoints
          v-if="data.points_setup.redeem_purchase_status == '0'"
          :data="data.points_setup"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardReferralProgram
          v-if="data.referral.status == '0'"
          :data="data.referral"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardFacebookShare
          v-if="data.entries.facebook_share.status == '0'"
          :data="data.entries"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardTwitterShare
          v-if="data.entries.twitter_tweet.status == '0'"
          :data="data.entries"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardBirthdayRewards
          v-if="data.events.status == '0'"
          :data="data.events"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardWooRewards
          v-if="data.reviews.woo_reviews.review_status == '0'"
          :data="data.reviews"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
      <transition name="slide-fade">
        <CardNewsletter
          v-if="data.entries.newsletter_subscription.status == '0'"
          :data="data.entries"
          :saveData="saveData"
          :cancelSave="cancelSave"
        />
      </transition>
    </div>
  </div>
</template>
<script>
import CardPointsProgram from "@/components/congrats/cards/CardPointsProgram.vue";
import CardSignupBonus from "@/components/congrats/cards/CardSignupBonus.vue";
import CardPaybyPoints from "@/components/congrats/cards/CardPaybyPoints.vue";
import CardFacebookShare from "@/components/congrats/cards/CardFacebookShare.vue";
import CardTwitterShare from "@/components/congrats/cards/CardTwitterShare.vue";
import CardBirthdayRewards from "@/components/congrats/cards/CardBirthdayRewards.vue";
import CardWooRewards from "@/components/congrats/cards/CardWooRewards.vue";
import CardNewsletter from "@/components/congrats/cards/CardNewsletter.vue";
import CardReferralProgram from "@/components/congrats/cards/CardReferralProgram.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "SetupList",
  components: {
    CardPointsProgram,
    CardSignupBonus,
    CardPaybyPoints,
    CardFacebookShare,
    CardTwitterShare,
    CardBirthdayRewards,
    CardWooRewards,
    CardReferralProgram,
    CardNewsletter
  },
  data: function() {
    return {
      data: null
    };
  },
  computed: {
    ...mapState(["setupData"])
  },
  methods: {
    ...mapActions(["getSetupData", "savePartialSetup"]),
    saveData: function(key) {
      this.savePartialSetup(this.data[key]);
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