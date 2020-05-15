<template>
  <div>
    <!-- <a href @click.prevent="closeModal()">&times;</a> -->

    <div class="rewardsSettingBlock pl-5 pr-5 pt-4 pb-4 row m-0 text-left">
      <div class="col-5">
        <div class="activecover">
          <img :src="data.image_url" alt />
        </div>
        <div class="iconSwiper cover mt-4">
          <swiper :options="swiperOptions">
            <swiper-slide v-for="(img, index) in rewardImages" :key="index">
              <div
                class="icon"
                :class="{active: data.image_url === img}"
                @click="data.image_url = img"
              >
                <img :src="img" alt />
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
      <div class="col-7">
        <h6 class="col-12 p-0 mb-4">Title & Description</h6>
        <div class="form-group fLabel">
          <label for="title">
            Title
            <a
              href="#"
              data-toggle="popover"
              data-trigger="focus"
              data-content="And here's some amazing content. It's very engaging. Right?"
            >
              <sup class="badge badge-pill badge-info">?</sup>
            </a>
          </label>
          <input type="text" v-model="data.name" class="form-control" />
          <em class="error" v-if="!$v.data.name.required">Value is required</em>
        </div>
        <div class="form-group fLabel">
          <label for="desc">
            Description
            <a
              href="#"
              data-toggle="popover"
              data-trigger="focus"
              data-content="And here's some amazing content. It's very engaging. Right?"
            >
              <sup class="badge badge-pill badge-info">?</sup>
            </a>
          </label>
          <textarea name class="form-control" v-model="data.description" cols="30" rows="3"></textarea>
          <em class="error" v-if="!$v.data.description.required">Value is required</em>
        </div>
        <div class="form-group fLabel">
          <label for="rewardPoint">
            Required Points
            <a
              href="#"
              data-toggle="popover"
              data-trigger="focus"
              data-content="And here's some amazing content. It's very engaging. Right?"
            >
              <sup class="badge badge-pill badge-info">?</sup>
            </a>
          </label>
          <input
            type="text"
            class="form-control valid"
            id="rewardPoint"
            name="rewardPoint"
            v-model="data.required_minimum_points"
            aria-invalid="false"
          />
          <em class="error" v-if="!$v.data.required_minimum_points.required">Value is required</em>
        </div>
        <div class="row m-0 mb-3 d-flex align-items-center">
          <div class="cCheck col-6 p-0">
            <input
              type="checkbox"
              name="raa"
              id="raa"
              v-model="data.is_coupon"
              true-value="1"
              false-value="0"
            />
            <label for="raa" class="m-0">Reward as a</label>
            <div v-if="couponType == 0" class="recommendFloater float-right mr-2">
              <i id="recommend" class="material-icons info">info</i>
              <b-tooltip
                target="recommend"
                ref="recommend"
                custom-class="floaterTxt"
                placement="rightbottom"
              >
                <i class="material-icons badge badge-pill badge-warning">star</i>
                We will create coupon automatically on your webstore
              </b-tooltip>
            </div>
          </div>
          <div class="col-6 p-0">
            <select class="form-control" v-model="couponType">
              <option value="0">Automatic</option>
              <option value="1">Manual</option>
            </select>
          </div>
          <div v-if="data.is_coupon == 1">
            <div
              class="row pt-3 pb-3 mt-4 mb-4 border-top border-light border-bottom border-light"
              v-if="couponType == 0"
            >
              <div class="col-md-12 mt-2 mb-3">
                <RadioGroup
                  v-model="data.realtime_coupon.type"
                  name="cTyp"
                  :options="{'2': 'Fixed off', '1': 'Percentage off', '3': 'Free shipping'}"
                />
              </div>
              <div class="col-md-6 maxCouponValue" v-if="data.realtime_coupon.type !== '3'">
                <div class="form-group fLabel">
                  <div class="input-group-prepend">€</div>
                  <label for>Max. Coupon Value</label>
                  <input
                    type="number"
                    class="form-control"
                    id="rpMcv"
                    name="rpMcv"
                    v-model="data.realtime_coupon.amount"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-0 form-group fLabel">
                  <div class="input-group-prepend">€</div>
                  <label for>Minimum Spend Value</label>
                  <input
                    type="number"
                    class="form-control"
                    id="rpMsv"
                    name="rpMsv"
                    v-model="data.realtime_coupon.minimum_order"
                  />
                </div>
              </div>
            </div>

            <div
              class="col-md-12 mt-4 mb-4 pt-5 pb-5 border-top border-light border-bottom border-light"
              v-if="couponType == 1"
            >
              <div class="m-0 form-group fLabel">
                <label for>Manual coupons</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="data.manual_coupon"
                  id="mcoupn"
                  name="mcoupn"
                />
                <small>Add Coupons as comma separated values</small>
              </div>
            </div>
          </div>
        </div>
        <div class="row m-0 d-flex">
          <div class="cCheck col-8 p-0">
            <input
              type="checkbox"
              name="lrpu"
              id="lrpu"
              true-value="1"
              false-value="0"
              v-model="is_limited"
              @change="is_limited == 0 ? data.quantity = 0 : ''"
            />
            <label for="lrpu" class="m-0">Limit rewards per user</label>
          </div>
          <div class="col-2 p-0" v-if="is_limited === '1'">
            <div class="form-group m-0">
              <input
                type="text"
                class="form-control valid m-0"
                id="rewardPoint"
                name="rewardPoint"
                v-model="data.quantity"
                aria-invalid="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <hr class="border-dark mb-0" />

      <!-- CALL TO ACTIONS -->
      <div class="pl-5 pr-5 pb-3 pt-4 text-right">
        <button
          type="submit"
          @click.prevent="closeModal()"
          class="btn btn-dark pl-5 pr-5 mr-2"
        >Cancel</button>
        <button type="submit" @click.prevent="handleSubmit" class="btn btn-success pl-5 pr-5">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import RadioGroup from "@/components/RadioGroup";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import {
  required,
  minValue,
  requiredIf,
  maxLength
} from "vuelidate/lib/validators";
import "swiper/css/swiper.css";
import { validationMixin } from "vuelidate";
import {
  required,
  minValue,
  requiredIf,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "RewardSettings",
  props: ["id", "closeModal"],
  components: { RadioGroup, Swiper, SwiperSlide },
  mixins: [validationMixin],
  data: function() {
    return {
      data: {},
      newSettings: {
        name: "Default title",
        description: "Default Description",
        required_minimum_points: 100,
        quantity: 0,
        image_url:
          "https://jai.devam.pro/gr/public/assets/img/library/rewards/01-reward-icon.png",
        type: "Coupon",
        is_coupon: 1,
        manual_coupon: "",
        order: 1,
        realtime_coupon_on: 1,
        nb_rewards: 0,
        realtime_coupon: {
          type: "1",
          amount: 50,
          minimum_order: 100
        }
      },
      swiperOptions: {
        slidesPerView: 4,
        observer: true,
        observeParents: true,
        spaceBetween: 5,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      is_limited: "1",
      couponType: "1"
    };
  },
  computed: {
    ...mapState(["rewardsData", "rewardImages"])
  },
  methods: {
    ...mapActions(["addReward", "getRewardsData", "updateReward"]),
    getDataById: function(id) {
      return this.rewardsData.find(data => data.id == id);
    },
    handleSubmit: function() {
      this.$v.$touch();
      if (this.$v.$invalid) return false;

      // EDIT REWARD - post functionality
      if (this.id) {
        this.updateReward(this.data).then(res => {
          this.getRewardsData().then(re => {
            console.log("Reward updated SUccessfuly");
          });
        });
      } else {
        // ADD REWARD - post functionality
        this.data.status = 1;
        this.addReward(this.data).then(res => {
          this.getRewardsData().then(re => {
            console.log("Reward Added SUccessfuly");
          });
        });
      }
      this.closeModal();
    }
  },
  mounted: function() {
    this.id
      ? (this.data = this.getDataById(this.id))
      : (this.data = this.newSettings);
    this.couponType = this.data.manual_coupon.length ? "1" : "0";
    this.is_limited = parseInt(this.data.quantity) ? "1" : "0";
  },
  /*validations: {
    data: {
      name: {
        required: requiredIf(function() {
          alert(this.data.name);
          return true;
        }),
      },
      description: {
        required: true
      },
      required_minimum_points: {
        required: true,
        minValue: minValue(1),
        maxLength: maxLength(6)
      },
      realtime_coupon: {
        amount: {
          required: requiredIf(function() {
            return this.status;
          }),
          minValue: minValue(1),
          maxLength: maxLength(6)
        },
        minimum_order: {
          required: requiredIf(function() {
            return this.status;
          }),
          minValue: minValue(1),
          maxLength: maxLength(6)
        }        
      } 
    }  
  },*/
  validations: {
    data: {
      name: { required },
      description: { required },
      required_minimum_points: { required }
    }
  }
};
</script>
realtime_coupon.minimum_order