<template>
  <div>
    <div  class="wrap" v-for="(item,l) in discoverList" :key="l">
      <div v-for="(nack,i) in item.topics" :key="i">
        <div v-if="nack.type===7">
          <img src="nack.picUrl" alt="">
        </div>
        <div class="m-tpls" v-if="nack.type===1 || nack.type===2">
          <a href="">
            <div class="u-name">
          <span class="ava">
            <img :src="nack.avatar" alt="" width="100%" height="100%">
          </span>
              <span>{{nack.nickname}}</span>
            </div>
            <div class="title">{{nack.title}}</div>
            <div class="u-pic">
              <img :src="nack.picUrl" alt="" width="100%" height="100%">
            </div>
            <div class="u-rcount">
              <i class="ico iconfont icon-yulan"></i>
              <span>{{nack.readCount}} 人看过</span>
            </div>
          </a>
        </div>
        <div class="m-tpls m-tpls-picker" v-if="nack.type===0">
          <a href="" class="u-flexbox">
            <div class="info">
              <div class="u-name">
                <span class="ava">
                <img :src="nack.avatar" alt="" width="100%" height="100%">
              </span>
                <span>{{nack.nickname}}</span>
              </div>
              <div class="title">{{nack.title}}</div>
              <div class="desc">{{nack.subTitle}}</div>
              <div class="u-rcount">
                <i class="ico iconfont icon-yulan"></i>
                <span>{{nack.readCount}} 人看过</span>
              </div>
            </div>
            <div class="u-pic">
              <img :src="nack.picUrl" alt="" width="100%" height="100%">
            </div>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    name: "TopicContent",
    data(){
      return{

      }
    },

    mounted() {
      const index = this.$route.params.index*1
      this.showList(index)
      console.log("a");
    },

    computed: {
      ...mapState(['discoverList', 'recommendList'])
    },

    methods: {
      showList (index) {
        if(index===0) {

          this.$store.dispatch('getManual')
        } else if (index===1){
          this.$store.dispatch('getAuto')
        }
      }
    },

    watch: {
      $route (val) {
        const index = val.params.index*1
        this.showList(index)
      }
    }

  }
</script>

<style scoped lang="stylus">
  .wrap
    width 100%
    height 100%
    background #f4f4f4;
    .m-tpls
      width: 100%;
      background: #fff;
      margin: 11px 0;
      box-sizing: border-box;
      padding: 17.6px 25.5px;
      a
        color: inherit;
        cursor: pointer;
        text-decoration: none;
        .u-name
          color: #333;
          line-height: .36rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        .u-name, span
          margin-bottom: .24rem;
          font-size: .38rem;
          .ava
            width: .7rem;
            height: .7rem;
            overflow: hidden;
            border-radius: 50%;
            box-sizing: border-box;
            border: .01rem solid #d9d9d9;
            margin-right: .12rem;
            display: inline-block;
            vertical-align: middle;
            img
              border: 0 none;
        .title
          font-size: .5rem;
          color: #333;
          line-height: .52rem;
          margin: -.08rem 0 .16rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          font-family: PingFangSC-Regular;
        .u-pic
          position: relative;
          margin-bottom: .2rem;
          overflow: hidden;
          border-radius: .08rem;
          background #f0f0f0;
          width: 100%
          height: 5rem
          > img
            display block
        .u-rcount
          margin-bottom: -.16rem;
          font-size: .38rem;
          color: #999;
          line-height: .32rem;
          margin-top: .18rem;
          .ico
            margin-right: .08rem;
            display: inline-block;
            font-size .28rem
            line-height .38rem
          > span
            display: inline-block;
            font-size 0.28rem
            line-height .38rem

    .m-tpls-picker
      position: relative;
      padding: 17.6px 25.5px;
      .u-flexbox
        display flex
        flex-wrap: wrap;
        justify-content: space-between;
        color: inherit;
        .info
          width: 445px;
          .u-name
            font-size: 20px;
            color: #333;
            line-height: 40px;
            white-space: nowrap;
            overflow: hidden;
          .u-name, span
            margin-bottom: .24rem;
            font-size: .38rem;
            text-overflow: ellipsis;
            .ava
              width: .68rem;
              height: .68rem;
              overflow: hidden;
              border-radius: 50%;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              border: .01rem solid #d9d9d9;
              margin-right: .12rem;
          .title
            width: 100%;
            font-size: .45rem;
            color: #333;
            line-height: .6rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            padding-top: .32rem;
            font-family: PingFangSC-Regular;
          .desc
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .38rem;
            line-height: .5rem;
            padding-top: .1rem;
            color: #7f7f7f;
          .u-rcount
            font-size: .22rem;
            color: #999;
            line-height: .32rem;
            margin-top: .18rem;
            left: .3rem;
            bottom: .26rem;
            .ico
              margin-right: .2rem;
              display: inline-block;
              font-size .28rem
              line-height .38rem
            > span
              display: inline-block;
              font-size 0.28rem
              line-height .38rem
        .u-pic
          width: 4rem;
          height: 3.52rem;
          overflow: hidden;
          border-radius: .08rem;
          > img
            display: block;
            border: 0 none;
</style>
