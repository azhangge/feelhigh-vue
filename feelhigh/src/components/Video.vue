<template>
  <div class="video-detail">
    <div class="header"></div>

    <div class="player">
      <div class="player-container"></div>
      <div class="player-for-money"></div>
    </div>

    <div class="footer"></div>
  </div>
</template>

<script>
  export default {
    name: "Video",
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .header {
    height: 12%;
    width: 100%;
    border: 1px solid black;
    background-image: url("../assets/header.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .footer {
    height: 12%;
    width: 100%;
    background-image: url("../assets/header.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
