<template>
  <div class="mobileMsg">
    <span class="material-icons">error_outline</span>
    <p>Onboarding setup is compatible in desktop</p>
  </div>
</template>
<style lang="less" scoped>
.mobileMsg {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  color: #fff;
  padding: 1em;
  font-size: 1.2em;
  z-index: 100;
  span {
    font-size: 5em;
  }
  p {
    padding: 1em;
    font-size: 1.5em;
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
}
</style>