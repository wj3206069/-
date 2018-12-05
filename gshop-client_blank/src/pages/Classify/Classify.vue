<template>
  <div>
    <div class="header">
      <div class="input">
        <div class="topSearchIpt">
          <i class="iconfont icon-sousuokuang"></i>
          <span class="placeholder">搜索商品, 共19953款好物</span>
        </div>
      </div>
    </div>
    <div class="cateNavVertWrap">
      <div class="navWrap">
        <ul class="cateNav">
          <li class="item active">fdsaf</li>
        </ul>
      </div>
    </div>
    <div class="subCateList">
        <div class="banner">
          <div class="banner-bg">
            <img src="./imgs/mei.jpg" alt="">
          </div>
        </div>
      <div class="cateList">
        <div class="hd">箱包</div>
        <ul class="list">
          <li class="cateItem">
            <div>
              <div class="cateImgWrapper">
                <img src="./imgs/xiangzi.png" alt="###">
              </div>
              <div class="name">
                行李箱
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Classify"
  }
</script>

<style scoped lang="stylus">
  .header
    height: 93px;
    position: fixed !important;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    .input
      display: flex;
      align-items: center;
      height: 1.17333rem;
      padding: 0 .4rem;
      background-color: #fff;
      position: relative;
      .topSearchIpt
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        height: .74667rem;
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: .10667rem;
        width: 100%;
        i
          display: inline-block;
          vertical-align: middle;
          font-size .42333rem;
          margin-right: .13333rem;
          line-height .80667rem
        .placeholder
          color: #666;
          line-height .74667rem
    &::after
      content: '';
      position: absolute;
      background-color: #d9d9d9;
      left: 0;
      width: 100%;
      height: 1px;
      transform-origin: 50% 100% 0;
      bottom: 0;
  .cateNavVertWrap
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 4;
    width: 2.16rem;
    background-color: #fff;
    top: 1.17333rem;
    .navWrap
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
      .cateNav
        transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
        transition-duration: 0ms;
        transform: translate(0px, 0px) translateZ(0px);
        padding-bottom 1.84rem
        padding: .53333rem 0
        .item
          position: relative;
          width: 100%;
          height: .66667rem;
          text-align: center;
          border: none;
          line-height .66667rem
        .active
          &::before
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: .08rem;
            background-color: #ab2b2b;
  .subCateList
    margin-left: 2.16rem;
    padding: .4rem .4rem .28rem;
    .banner
      position: relative;
      width: 100%;
      height: 2.56rem;
      display: table;
      margin-bottom: .42667rem;
      background: center no-repeat #f4f4f4;
      background-size: cover;
      border-radius: 4px;
      img
        width 100%
        height 100%
      .banner-bg
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-size: .37333rem;
        color: #fff;
    .cateList
      margin-bottom: .16rem;
      .hd
        white-space: nowrap;
        max-width: 7.04rem;
        padding-bottom: .10667rem;
        margin-bottom: .32rem;
        text-align: left;
        font-size: .37333rem;
        font-weight: 700;
        border-bottom: 1px solid #d9d9d9;
      .list
        .cateItem
          display: inline-block;
          margin-right: .45333rem;
          font-size: 0;
          width: 1.92rem;
          vertical-align: top;
          .cateImgWrapper
            width: 1.92rem;
            height: 1.92rem;
            img
              display: block;
              width: 100%;
              background: #fff;
              height: 100%;
          .name
            height: .96rem;
            font-size: .32rem;
            text-align: center;
            line-height: .48rem;
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
</style>
