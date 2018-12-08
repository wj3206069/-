<template>
  <footer class="footer_guide border-1px">
    <!--
      动态class: 什么时候用对象方式? 类名确定, 只是不确定有没有
    -->
    <a class="guide_item" :class="{on: $route.path==='/shop'}" @click="goTo('/shop')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/classify'}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: /^\/topic/.test($route.path)}" @click="goTo('/topic')">
      <span class="item_icon">
        <i class="iconfont icon-checkbox-weixuan"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/cart'}" @click="goTo('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/personalCenter'}" @click="goTo('/personalCenter')">
      <span class="item_icon">
        <i class="iconfont icon-wodejuhuasuan"></i>
      </span>
      <span>个人</span>
    </a>

  </footer>
</template>

<script>
  export default {
    name: "FooterGuide",
    methods: {
      goTo(path) {
        console.log(/^\/topic\/0/.test(this.$route.path));
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 1.30667rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      width .74667rem
      height .74667rem
      color purple
      &.on
        color red
      span
        font-size .32rem
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size .74667rem
          width: .74667rem
          height: .74667rem
</style>
