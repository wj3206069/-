<template>
  <div class="wrap">
    <header class="header psc-g-hd">
      <div v-show="false" class="psc-g-download">
        <a href="javascript:;" class="psc-d-close"></a>
        <div class="psc-d-logo"></div>
        <p class="psc-d-txt1">前往APP领1000元新用户现金礼包</p>
        <p class="psc-d-txt2">网易自营 品质生活</p>
        <a href="javascript:;" class="psc-d-btn">打开APP</a>
      </div>
      <div class="headerWrap">
        <div class="headerRow">
          <div class="home iconfont icon-shouye" @click="$router.push('/shop')"></div>
          <div class="title">
            <span :class="classOption">{{title}}</span>
            <span class="x" v-if="title==='发现'">甄选家</span>
          </div>
          <div class="headerRight">
            <div class="shopCart iconfont icon-gouwuche" @click="$router.push('/cart')"></div>
            <div class="search iconfont icon-sousuokuang" @click="$router.push('/search')"></div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props:{
      title:String
    },

    computed:{
      classOption(){
        if(this.title==='网易严选') return 'fontStyle'
        if(this.title==='发现') return 'h'
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrap
    height 1.4rem
    header
      position: fixed !important;
      left: 0;
      top: 0;
      z-index: 99;
      width: 100%;
      height 1.4rem
      .psc-g-download
        clearFix()
        width: 100%;
        height: 1.04rem;
        background: #333;
        position: relative;
        .psc-d-logo
          position: absolute;
          width: .72rem;
          height: .72rem;
          /*background: url(/topic.json/index/img/icon.310031e8.png) no-repeat 0/100%;*/
          top: .15rem;
          left: .3rem;
        .psc-d-txt1
          font-family: 'PingFangSC-Regular';
          font-size: .24rem;
          color: #FFFFFF;
          line-height: .26rem;
          max-width: 4rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: absolute;
          left: 1.18rem;
          top: .23rem;
        .psc-d-txt2
          font-family: 'PingFangSC-Light';
          font-size: .22rem;
          color: #FFFFFF;
          letter-spacing: 0;
          line-height: .26rem;
          max-width: 4rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: absolute;
          left: 1.18rem;
          top: .56rem;
        .psc-d-close
          position: absolute;
          width: .38rem;
          height: .38rem;
          top: 0;
          left: 0;
        .psc-d-btn
          position: absolute;
          background: #B4282D;
          border-radius: .04rem;
          font-family: PingFangSC-Regular;
          font-size: .24rem;
          color: #FFFFFF;
          width: 1.44rem;
          line-height: .54rem;
          text-align: center;
          right: .2rem;
          top: .25rem;
      .headerWrap
        clearFix()
        position: relative;
        height: 1.4rem;
        background-color: #fafafa;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: .01rem solid #d9d9d9;
        .headerRight
          display: block;
          float: right;
          height: 1rem;
          margin-right: .02rem;
          clearFix()
          .search
            float: right;
            font-size 0.8rem
            line-height 1.3rem
          .shopCart
            float: right;
            margin-left: .3rem;
            font-size 0.8rem
            line-height 1.3rem
        .headerRow
          clearFix()
          z-index: 1;
          max-width: 768px;
          box-sizing: border-box;
          margin: auto;
          overflow: hidden;
          padding: 0 .26rem 0 .24rem;
          position: relative;
          .title
            position: absolute;
            width: 3.2rem;
            height: 100%;
            line-height: 1rem;
            text-align: center;
            left: 50%;
            top: 0;
            margin-left: -1.6rem;
            font-size: .28rem;
            color: #7F7F7F;
            z-index: 1;
            .h
              font-size: .6rem;
              color: #b4282d;
              font-weight: bold;
              padding: 0 .16rem;
              vertical-align: middle;
              line-height 1.4rem
              text-align center
            .x
              padding: 0 .16rem;
              vertical-align: middle;
              text-decoration: none;
              outline: 0
          .home
            float: left;
            font-size 0.8rem
            line-height 1.3rem
  .fontStyle
    color black
    font-size: .6rem;
    font-weight normal
    font-style normal
    line-height 1.4rem
    text-align center
</style>
