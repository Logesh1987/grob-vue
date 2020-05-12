<template>
  <div class="enableFeat">
    <p>Enable the Feature</p>
    <svg viewBox="0 0 80.5 19.8" xml:space="preserve">
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-miterlimit="10"
        d="M0.7,0.7c0,0,37.3,36.5,72.5,5.8"
      />
      <polygon fill="currentColor" points="68.9,2.4 80.5,0.9 76,11.7 " />
    </svg>
  </div>
</template>
<style lang="less" scoped>
.enableFeat {
  width: 80px;
  position: absolute;
  right: 60px;
  top: 0px;
  line-height: 1.3;
  p {
    color: #f00 !important;
  }
  svg {
    width: 80%;
    transform: translateX(40%);
    color: #979797;
  }
}
</style>