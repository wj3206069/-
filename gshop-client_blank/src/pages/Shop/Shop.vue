<template>
  <div>
    <header>
      <div class="header">
        <a class="logo">
        </a>
        <div class="search">
          <i class="iconfont icon-sousuokuang"></i>
          <span class="placeholder">搜索商品, 共19916款好物</span>
        </div>
        <div class="login" @click="$router.push('./PersonalCenter')">登录</div>
      </div>
      <div class="tebWrap fd">
        <span v-if="isShowteb" class="txt">全部频道</span>
        <div class="butt" v-if="!isShowteb">
          <div class="inner">
            <div class="line">
              <ul class="tebs">
                <li class="teb" v-for="(item,i) in list" :key="i"
                    :class="{active:index===i}" @click="handleTeb(i)"
                >{{item}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="toggleWrap">
          <div class="linear"></div>
          <div class="toggle dianji" @click.stop="handleTebs">
              <i class="iconfont icon-jiantouxia" :class="{isRoutate:isShowteb}"></i>
          </div>
        </div>
      </div>
      <div class="moreCate" v-if="isShowteb">
        <div v-for="(item,i) in list" :key="i" class="cateTag"
          :class="{dianji:optionIndex===i}"  @click="handleOption(i)">
          {{item}}
        </div>
      </div>
    </header>
    <section class="contentWarp">
      <ShopList/>
      <Privilege/>
      <ShopComtent/>
    </section>
  </div>
</template>

<script>
  import ShopList from './ShopList/ShopList'
  import Privilege from '../../components/Privilege/Privilege'
  import ShopComtent from './ShopContent/ShopContent'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: "Shop",

    data() {
      return {
        optionIndex:0,
        isShowteb:false,
        index: 0,
        list: [
          '推荐', '居家', '鞋包适配', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'
        ]
      }
    },
    mounted() {
      this.$store.dispatch('getHomeList')
          new BScroll('.line', {
            scrollX: true
          })

    },

    computed: {
      ...mapState(['homeList'])
    },

    methods: {
      handleTeb(i) {
        this.index = i
      },

      handleTebs() {
         this.isShowteb = !this.isShowteb
      },

      handleOption(i){
        this.optionIndex = i
      }
    },

    components: {
      ShopList,
      Privilege,
      ShopComtent
    }
  }
</script>

<style scoped lang="stylus">
  header
    height 160px
    position fixed
    top 0
    left 0
    width 100%
    background-color #fff
    z-index 100 !important
    .header
      display flex
      flex 1
      position relative
      z-index 2
      align-items center
      background #fff
      padding .21333rem .4rem
      .logo
        width 1.84rem
        height .53333rem
        display inline-block
        margin-right .26667rem
        background url("images/logo.png")
        background-size cover
        background-position center
      .search
        flex-grow 1
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        height .74667rem
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
        .icon-sousuokuang
          margin-right .2rem
          font-size .5rem
        .placeholder
          color #666
      .login
        width .98667rem
        height .53333rem
        line-height .53333rem
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius .10667rem
        margin-left .21333rem
    .tebWrap
      display: flex;
      flex-grow: 0;
      align-items: center;
      justify-content: center;
      position: relative;
      top: 0;
      right: 0;
      .txt
        height: .8rem;
        line-height: .8rem;
        padding-left: .4rem;
        font-size: .37333rem;
      .toggleWrap
        box-sizing: border-box;
        .linear
          width: .8rem;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%);
        .toggle
          padding 0 0.2rem
          height: .8rem;
          text-align: center;
          background: #fff;
          .iconfont
            font-size .6rem
            line-height 0.8rem
            transition transform 0.3s
            display inline-block
            &.isRoutate
              transform rotateZ(180deg)
      .butt
        width: 100%;
        .inner
          flex-flow: row nowrap;
          background-color: #fff;
          position: relative;
          display: flex;
          .line
            position: relative;
            height: 100%;
            width: 100%;
            overflow: hidden;
            flex-flow: row nowrap;
            display: flex;
            padding-left: 0.2rem;
            .tebs
              display: flex;
              flex-shrink: 0;
              background: #fff;
              flex-flow: row nowrap;
              .teb
                display inline-block
                padding 0 .21333rem
                line-height .8rem
                font-size .37333rem
                color #333
                text-align center
                position relative

  .contentWarp
    padding-bottom 1.30667rem

  .fd
    justify-content space-between !important

  .ollChannel
    height: .8rem;
    line-height: .8rem;
    padding-left: .4rem;
    font-size: .37333rem;

  .moreCate
    padding-top: .32rem;
    overflow: hidden;
    background #ffffff
    .cateTag
      width: 2rem;
      height: .74667rem;
      line-height: .74667rem;
      text-align: center;
      float: left;
      margin-bottom: .53333rem;
      margin-left: .4rem;
      background: #FAFAFA;
      border: 1px solid #CCC;
      border-radius: .05333rem;
    .dianji
      border: 1px solid #b4282d;
      color: #b4282d;
  .active
    &::after
      content: ' ';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: .05333rem;
      background-color: #b4282d

</style>
