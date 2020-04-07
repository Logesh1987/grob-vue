<template>
  <div class="rewardList">
    <div class="rewardItem" v-for="item in data" :key="item.id">
      <div class="rewardDragger">
        <i class="material-icons">reorder</i>
      </div>
      <div class="rewardThumb">
        <figure style="background-image: url(https://picsum.photos/300/200)"></figure>
      </div>
      <div class="rewardInfo">
        <h5>
          <strong>{{ item.name }}</strong>
        </h5>
        <p>{{ item.description }}</p>
        <hr />
        <div class="details">
          <span>Qty</span>
          <strong>{{ item.quantity }}</strong>
          <span>Required Points</span>
          <strong>{{ item.required_points }} Pts</strong>
        </div>
      </div>
      <div class="rewardControls">
        <a href="#" class="text-success">
          <i class="material-icons">check</i>
        </a>
        <a href="#">
          <i class="icon-undefined"></i>
        </a>
        <label class="switch" for="r1">
          <input type="checkbox" checked id="r1" />
          <i></i>
        </label>
        <a href="#">
          <i class="material-icons">delete_outline</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RewardsList",
  props: ["data"],
  data: function() {
    return this.data;
  },
};
</script>