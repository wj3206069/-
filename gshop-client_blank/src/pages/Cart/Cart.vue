<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./img/bj1.jpg" alt="" style="width: 100%">
        </div>
        <div class="swiper-slide">
          <img src="./img/bj2.jpg" alt="" style="width: 100%">
        </div>
      </div>
    </div>
    <div class="cartContent">
      <div class="header">
        <span class="logo">购物车</span>
        <div class="right">
          <span class="cart-coupon">领券</span>
          <span class="cart-btn"></span>
        </div>
      </div>
      <Privilege/>
      <div class="container">
        <div class="img iconfont icon-gouwuche"></div>
        <div class="txt">
          <div class="noCart-login">
            <div class="noCart-title">去添加点什么吧</div>
            <div class="noCart-btn" @click="$router.push('/personalCenter')">登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.min.css"
  import Privilege from '../../components/Privilege/Privilege'

  export default {
    name: "Cart",
    mounted() {
      new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true, //复制多份循环(这里就是让轮播看起来是循环的，去掉这个就恢复了默认的swiper轮播)
        autoplay: 500, //自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
        allowSwipeToPrev: true
      })
    },

    components: {
      Privilege
    }
  }

</script>

<style scoped lang="stylus">
  .swiper-container
    width 100%
    height 115px
    overflow hidden

  .cartContent
    width 100%
    .header
      box-sizing border-box
      height: 1.17333rem;
      padding: 0 .4rem;
      line-height: 1.17333rem;
      text-align: center;
      background-color: #fff;
      position: relative;
      width 100%
      .logo
        display: inline-block;
        font-size: .48rem;
      .right
        position: absolute;
        top: 0;
        right: .4rem;
        font-size: .4rem;
        .cart-coupon
          position: relative;
          color: #B4282D;
        .cart-btn
          margin-left .4rem
    .container
      position: absolute;
      top: -.66667rem;
      right: 0;
      bottom: 0;
      left: 0;
      height: 4rem;
      margin: auto;
      text-align center
      .img
        display: inline-block;
        vertical-align: middle;
        font-size: 3rem;
        margin-bottom: .10667rem;
        background-size: 3.30667rem 3.30667rem;
        background-position: center center;
        background-repeat: no-repeat;
    .txt
      font-size: .37333rem;
      line-height: 1;
      color: #7f7f7f;
      .noCart-login
        margin-top: -.26667rem;
        .noCart-title
          margin-top 0.5rem
          margin-bottom: .66667rem;
          line-height: 1;
          font-size: .37333rem;
          color: #999;
        .noCart-btn
          margin: auto;
          width: 6.4rem;
          height: 1.22667rem;
          font-size: .4rem;
          line-height: 1.22667rem;
          color: #fff;
          background-color: #b4282d;
          border-radius: .04rem;
</style>
