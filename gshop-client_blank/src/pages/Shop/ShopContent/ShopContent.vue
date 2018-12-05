<template>
  <div class="warp">
    <ul class="shopClassify">
      <!--<li v-for="(c,index) in shopClassify" :key="index" class="classify">
        <img :src="c.src" alt="##">
        <span class="text">{{c.Classify}}</span>
      </li>-->
      <li href="###" class="classify">
        <img src="./images/zhentou.png" alt="">
        <span>推荐</span>
      </li>
      <li href="###" class="classify">
        <img src="./images/zhentou.png" alt="">
        <span>推荐</span>
      </li>
      <li href="###" class="classify">
        <img src="./images/zhentou.png" alt="">
        <span>推荐</span>
      </li>
      <li href="###" class="classify">
        <img src="./images/zhentou.png" alt="">
        <span>推荐</span>
      </li>
      <li href="###" class="classify">
        <img src="./images/zhentou.png" alt="">
        <span>推荐</span>
      </li>
      <li href="###" class="classify">
        <img src="./images/zhentou.png" alt="">
        <span>推荐</span>
      </li>
      <li href="###" class="classify">
        <img src="./images/zhentou.png" alt="">
        推荐
      </li>
      <li href="###" class="classify">
        <img src="./images/zhentou.png" alt="">
        推荐
      </li>
      <li href="###" class="classify">
        <img src="./images/zhentou.png" alt="">
        推荐
      </li>
      <li href="###" class="classify">
        <img src="./images/zhentou.png" alt="">
        <span>推荐</span>
      </li>
    </ul>
    <div class="advertising">
        <img src="./images/广告.gif" alt="">
    </div>
    <div class="activity">
      <div class="top">
        <div class="Left">
          <img src="./images/huodong1.png" alt="">
        </div>
        <div class="right">
          <img src="./images/huodong2.png" alt="">
          <img src="./images/huodong3.png" alt="">
        </div>
      </div>
      <div class="Bottom">
        <img src="./images/huodong4.png" alt="">
        <img src="./images/huodong5.png" alt="">
      </div>
      <div class="geduan"></div>
    </div>
    <div class="newWeal">
         <div class="wealTop">
           <span>新人专享礼</span>
         </div>
      <div class="wealBottom">
        <div class="wealLeft">
          <span>新人专享礼包</span>
          <div class="imgWrap">
            <img src="./images/weal1.png" alt="">
          </div>
        </div>
        <div class="wealRight">
          <div class="rightTop">
            <div class="text">
              <span>福利社</span>
              今日特价
            </div>
            <img src="./images/weal2.png" alt="">
          </div>
          <div class="rightBottom">
            <div>
              <span>新人拼团</span>
            </div>
            <img src="./images/weal3.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopContent",
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../../common/stylus/mixins.styl"
.warp
  background #FFEDDB
  width 100%
  .shopClassify
    width: 100%;
    height: auto;
    display flex
    flex-flow row wrap-reverse
    align-items: center;
    li
      display: block;
      width: 1.46667rem;
      height: 2.08rem;
      float: left;
      margin: .13333rem .26667rem 0;
      text-align center
      img
        width: 1.46667rem;
        height: 1.46667rem;
  .advertising
    width 100%
    img
      display: inline;
      width: 100%;
      height: auto;
  .activity
    width: 10rem;
    /*height: 5.226666666666667rem;*/
    background-image url("./images/bj.png")
    background-size 100% 100%
    .top
      width 100%
      display flex
      flex 1
      .Left
        width 50%
        img
          width 100%
      .right
        width 50%
        img
          width 100%
    .Bottom
      clearFix()
      width 100%
      img
        width 50%
        float left
    .geduan
       background-image url("./images/geduan.png")
       width: 100%;
       height: 0.3rem;
       background-size 100% 100%
  .newWeal
    width 100%
    background white
    margin-top  0.2rem
    .wealTop
      height: 1.2rem;
      width: 100%;
      line-height: 1.2rem;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: .42667rem;
      span
        &::before
          left: -.53333rem;
          content: '';
          position: absolute;
          top: .6rem;
          width: .32rem;
          height: .04rem;
          background: #333
        display: inline-block;
        position: relative;
        line-height: 1.2rem;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: .42667rem;
      span
        &::after
          ontent: '';
          position: absolute;
          top: .6rem;
          width: .32rem;
          height: .04rem;
          background: #333;
          right: -.53333rem;
    .wealBottom
      padding-left: .4rem;
      overflow: hidden;
      display flex
      flex 1
      .wealLeft
        width: 4.57333rem;
        height: 5.78667rem;
        background: #F9E9CF;
        border-radius: .05333rem;
        margin-right: .05333rem;
        float: left;
        color: #333;
        span
          font-family: PingFangSC-Medium;
          font-size: .42667rem;
          padding: .4rem 0 0 .4rem;
        .imgWrap
          margin: .66667rem auto;
          width: 3.04rem;
          height: 3.05333rem;
          position: relative;

      .wealRight
        .rightTop
          color: #333;
          width: 100%
          height 50%
          float: left;
          border-radius: .05333rem;
          margin: 0 .05333rem .05333rem 0;
          font-size: .32rem;
          padding: .26667rem 0 0 .4rem;
          background-image url("./images/weal2.png")
          img
            width: 4.57333rem;
            height: 2.93333rem;
        .rightBottom
          background: #FFECC2;
          border-radius: 4px;
          width: 4.57333rem;
          height: 2.86667rem
          background-image url("./images/weal3.png")
</style>
