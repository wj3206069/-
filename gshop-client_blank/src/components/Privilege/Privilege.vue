<template>
  <div class="wrap">
    <div class="wrapLine">
      <div class="privilege">
        <img src="./images/duigou.png" alt="">
        <span>网易自营品牌</span>
      </div>
      <div class="privilege">
        <img src="./images/duigou.png" alt="">
        <span>30天无忧退货</span>
      </div>
      <div class="privilege">
        <img src="./images/duigou.png" alt="">
        <span>48小时快速退款</span>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Privilege"
  }
</script>

<style scoped lang="stylus">
.wrap

  width: 100%;
  height: .96rem;
  /*padding: 0 .2rem;*/
  align-items: center;
  background #FFEDDB
  overflow hidden
  .wrapLine
    display flex
    padding-left 0.3rem
    .privilege
      flex: 1;
      img
        vertical-align: middle;
        background-size: 100% 100%;
        width: .42667rem;
        height: .42667rem;
      span
        vertical-align: middle;
        line-height .96rem
</style>
