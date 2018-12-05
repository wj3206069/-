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
        <div class="login">登录</div>
      </div>
      <div class="tebWrap">
        <ul class="tebs">
          <li class="teb" v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
        <span class="toggleWrap" @click="handleTeb">
        <i class="iconfont icon-jiantouxia"></i>
      </span>
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

  export default {
    name: "Shop",

    data() {
      return {
        list: [
          '推荐', '居家', '鞋包适配', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'
        ]
      }
    },
    mounted() {
      new BScroll('.tebWrap', {
        scrollX: true
      })
    },
    methods: {
      handleTeb() {
        console.log('1');
      }
    },

    components:{
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
      width 100%
      overflow hidden
      display flex
      flex-flow row nowrap
      .tebs
        display: flex;
        flex-flow: row nowrap;
        flex-shrink: 0;
        padding: 0 .4rem;
        background: #fff;
        .teb
          display inline-block
          padding 0 .21333rem
          line-height .8rem
          font-size .37333rem
          color #333
          text-align center
      .toggleWrap
        width: 1.33333rem;
        height: .8rem;
        text-align: center;
        background: #fff;
        position absolute
        right 0
        padding-left .5rem
        .iconfont
          font-size .6rem
          line-height 0.8rem
  .contentWarp
    padding-bottom  1.30667rem
</style>
