<template>
  <div>
    <div class="setupItemContainer" v-if="this.data">
      <CardPointsProgram
        v-if="data.points_setup.purchase_status"
        :data="data.points_setup"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardSignupBonus
        v-if="data.points_setup.bonus_status"
        :data="data.points_setup"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardPaybyPoints
        v-if="data.points_setup.redeem_purchase_status"
        :data="data.points_setup"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardReferralProgram
        v-if="data.referral.status"
        :data="data.referral"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardFacebookShare
        v-if="data.entries.facebook_share.status == 1"
        :data="data.entries.facebook_share"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardTwitterShare
        v-if="data.entries.twitter_tweet.status == 1"
        :data="data.entries.twitter_tweet"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardBirthdayRewards
        v-if="data.events.member_birthday.status"
        :data="data.events.member_birthday"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardWooRewards
        v-if="data.reviews.woo_reviews.review_status"
        :data="data.reviews.woo_reviews"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardNewsletter
        v-if="data.entries.newsletter_subscription.status == 1"
        :data="data.entries.newsletter_subscription"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
    </div>
    <div v-if="this.$refs.pausedItem && this.$refs.pausedItem.querySelector('.setupItemList')">
      <br />
      <h6 class="mt-3 col-12 mb-3 pausedRewardHead p-0">
        <strong>Paused Rewards (During Setup)</strong>
      </h6>
    </div>    
    <div class="setupItemContainer pausedItem" ref="pausedItem" v-if="this.data">
      <CardPointsProgram
        v-if="!data.points_setup.purchase_status"
        :data="data.points_setup"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardSignupBonus
        v-if="!data.points_setup.bonus_status"
        :data="data.points_setup"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardPaybyPoints
        v-if="!data.points_setup.redeem_purchase_status"
        :data="data.points_setup"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardReferralProgram
        v-if="!data.referral.status"
        :data="data.referral"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardFacebookShare
        v-if="data.entries.facebook_share.status != 1"
        :data="data.entries.facebook_share"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardTwitterShare
        v-if="data.entries.twitter_tweet.status != 1"
        :data="data.entries.twitter_tweet"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardBirthdayRewards
        v-if="!data.events.member_birthday.status"
        :data="data.events.member_birthday"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardWooRewards
        v-if="!data.reviews.woo_reviews.review_status"
        :data="data.reviews.woo_reviews"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
      <CardNewsletter
        v-if="data.entries.newsletter_subscription.status != 1"
        :data="data.entries.newsletter_subscription"
        :saveData="saveData"
        :cancelSave="cancelSave"
      />
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