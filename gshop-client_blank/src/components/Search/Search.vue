<template>
  <div>
    <div class="headerWrap">
      <div class="header">
        <div class="input">
          <div class="inputWrap">
            <div class="search">
              <i class="iconfont icon-sousuokuang"></i>
              <input @blur="handleInput"  @keydown.13="searchEven" type="text" v-model="search">
            </div>
          </div>
          <span @click="$router.back()">取消</span>
        </div>
      </div>
    </div>
    <div v-if="searchResult.length===0" class="hotSearch">
      <div class="hotHeader">
        <h3>热门搜索</h3>
      </div>
      <ul class="hotLi">
        <li v-for="(item,index) in hotList.hotKeywordVOList" class="recommend"
            :class="{red:item.highlight}" :key="index">{{item.keyword}}
        </li>
      </ul>
    </div>
    <ul class="searchResult" v-if="searchResult.length>0 && isShow">
      <li class="item" v-for="(item,index) in searchResult"
          :key="index">
        <div class="m-listItem">
          <div class="inner" @click="handleText(item)">{{item}}</div>
        </div>
      </li>
    </ul>
    <ul class="shops" v-if="!isShow && searchShop">
      <li class="shop" v-for="(item,index) in searchShop" :key="index">
        <div class="good">
          <div class="items">
            <div class="hd">
              <img :src="item.listPicUrl" alt="">
              <div class="activity">
                <span class="data-reactid">{{item.simpleDesc}}</span>
              </div>
            </div>
            <div class="name">
              <span class="data-reactid">{{item.name}}</span>
            </div>
            <!--<div class="newItemDesc">{{item.simpleDesc}}</div>-->
            <!--<div class="price">-->
              <!--<span class="priceInner">{{item.counterPrice}}</span>-->
              <!--<span class="counterPrice">{{item.retailPrice}}</span>-->
            <!--</div>-->
            <!--<div class="tagWraper">-->
              <!--<p class="status">-->
                <!--{{item.promotionDesc}}-->
              <!--</p>-->
            <!--</div>-->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {reqGetSearch} from '../../api'

  export default {
    name: "PersonalCenter",
    data() {
      return {
        search: '',
        isShow: true
        // searchResult :[]
      }
    },

    mounted() {
      this.$store.dispatch('getHotList')
    },

    computed: {
      ...mapState(['hotList', 'searchResult', 'searchShop'])
    },

    methods: {
      handleText(keyword) {
        this.isShow = false
        this.$store.dispatch('getSearchShop', {keyword})
      },

      handleInput(){
        console.log('--');
        this.isShow = true
      }
      //  async searchEven(){
      //    const {search} = this
      // console.log(search);
      //    /*if(search){
      //      // const result = await reqGetSearch({keywordPrefix:search})
      //      // if(result.code==='200')
      //      //   console.log(result);
      //      // this.searchResult = result.data
      //      // console.log(this.searchResult);
      //      this.$store.dispatch('getSearchResult',{keywordPrefix:search})
      //    }*/
      //  }
    },

    watch: {
      search() {
        if (this.search) {
          this.$store.dispatch('getSearchResult', {keywordPrefix: this.search})
        }
        if (!this.search) {
          this.$store.dispatch('removeSearchResult')
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../../static/css/reset.css"
  .headerWrap
    z-index: 1;
    position: relative;
    .header
      background-color: #fff;
      z-index: 1;
      height: 1.16rem;
      position: relative;
      .input
        box-sizing border-box
        padding: 0 .4rem;
        background-color: #fff;
        z-index: 1;
        width: 10rem;
        margin: auto;
        overflow: hidden;
        position: relative;
        height: 1.17333rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > span
          margin-left .4rem
          font-size: .37333rem;
          box-sizing: border-box;
          display block
        .inputWrap
          flex 1
          .search
            padding-top: 0;
            padding-left: .26667rem;
            padding-bottom: 0;
            border: 0;
            background-color: #f4f4f4;
            height: .74667rem;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            i
              margin-right: .21333rem;
              display: inline-block;
              vertical-align: middle;
              font-size: 0.6rem;
              line-height 1rem
            input
              line-height: .53333rem;
              padding-left: .02667rem;
              flex: 1;
              font-size: .37333rem;
              border: 0;
              color: rgba(0, 0, 0, .8);
              background-color: transparent;
              box-shadow: none;
              outline: 0;
  .hotSearch
    margin-bottom: .26667rem;
    padding: 0 .4rem .4rem;
    background-color: #fff;
    overflow: hidden;
    .hotHeader
      height: 1.2rem;
      font-size: .37333rem;
      color: #999;
      display: flex;
      align-items: center;
    .hotLi
      margin-right: -.4rem;
      margin-bottom: -.42667rem;
      zoom: 1;
      .recommend
        float: left;
        padding: 0 .2rem;
        margin-right: .42667rem;
        margin-bottom: .42667rem;
        line-height: .61333rem;
        border: 1px solid #999;
        border-radius: 4px;
        color: #333;
      .red
        border-color: #b4282d;
        color: #b4282d;
  .searchResult
    z-index: 1;
    position: relative;
    display: block;
    padding-left: .4rem;
    background-color: #fff
    .item
      height: 1.2rem;
      font-size: .37333rem;
      position relative
      .m-listItem
        padding-right: 0;
        flex-flow row nowrap
        display flex
        align-items: center;
        position: relative;
        min-height: 1.38667rem;
        .inner
          width: 100%;
          zoom: 1;
      &::after
        content: '';
        position: absolute;
        background-color: #d9d9d9;
        left: 0;
        width: 100%;
        height: 1px;
        -webkit-transform-origin: 50% 100% 0;
        transform-origin: 50% 100% 0;
        bottom: 0;

  .shops
    clearFix()
      position: relative;
      z-index: 0;
      overflow: hidden;
      width: 50%;
    .shop
      float: left;
      clearFix()
      .good
        float: left;
        position: relative;
        padding: 0 .26667rem .44rem;
        overflow: hidden;
        background-color: #fff;
        img
          width: 100%;
          height: 4.6rem;
          border-radius: .05333rem .05333rem 0 0;
          background-color: #f4f4f4;
        /*.items
          width: 100%;
          text-decoration: none;
          outline: 0;
          .hd
            border-radius: .05333rem;
            position: relative;
            z-index: 0;
            background-color: #f4f4f4;
            .activity
              background: #F8E4CC;
              color: #875D2A;
              position: absolute;
              bottom: 0;
              width: 100%;
              border-radius: 0 0 .05333rem .05333rem;
              font-size: .32rem;
              letter-spacing: 0;
              line-height: .48rem;
              padding: .08rem .13333rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              .data-reactid
                text-size-adjust: 100%;
            >img
              position: absolute;
              display: block;
              width: 100%;
              height: 4.6rem;
              border-radius: .05333rem .05333rem 0 0;
              background-color: #f4f4f4;
          .name
            margin-top: .21333rem;
            line-height: .53333rem;
            font-size: .37333rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #333;
            text-align: left;
            font-family: PingFangSC-Regular;
          .newItemDesc
            display none
          .price
            font-size: .42667rem;
            line-height: .64rem;
            color: #b4282d;
            text-align: left;
            font-family: PingFangSC-Regular;
          .tagWraper
            width: 100%;
            z-index: 1;
            margin-top: .05333rem;
            height: .41333rem;
            overflow: hidden;
            .status
              margin-left: 0;
              margin-bottom: .06667rem;
              padding: 0 .10667rem;
              line-height: .37333rem;
              color: #B4282D;
              background: rgba(255,255,255,.9);
              border: 1px solid #B4282D;
              border-radius: .02667rem;
              height: .4rem;
              font-size: .26667rem;
              display: inline-block;
              text-align: center;
              vertical-align: middle;*/
</style>

