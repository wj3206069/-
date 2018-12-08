<template>
  <div>
    <Header title="发现"/>
    <div class="tabWrap">
      <div class="tabNav">
        <li class="option " v-for="(item,i) in topicTeb" :key="i"
            :class="{active:index===i}" @click="isActive(i)">
          {{item.tabName}}
        </li>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  /*import {mapState} from 'vuex'*/


  export default {
    name: "Search",
    data() {
      return {
        index: 0,
        topicTeb: [
          {
            "tabId": 9,
            "tabName": "推荐",
            "tabType": 3,
            "defaultShow": false,
            "linkUrl": null,
            "linkType": null
          },
          {
            "tabId": 4,
            "tabName": "达人",
            "tabType": 0,
            "defaultShow": false,
            "linkUrl": null,
            "linkType": null
          },
          {
            "tabId": 5,
            "tabName": "上新",
            "tabType": 0,
            "defaultShow": false,
            "linkUrl": null,
            "linkType": null
          },
          {
            "tabId": 7,
            "tabName": "晒单",
            "tabType": 2,
            "defaultShow": false,
            "linkUrl": "https://m.you.163.com/topic/static/look/index",
            "linkType": 1
          },
          {
            "tabId": 6,
            "tabName": "HOME",
            "tabType": 0,
            "defaultShow": false,
            "linkUrl": null,
            "linkType": null
          }
        ]
      }
    },

    /*mounted(){
      this.$store.dispatch('getRecommendList')
    },*/

    /*computed:{
      ...mapState(['topicList'])
    },*/

    methods: {
      isActive(i) {
        this.index = i
        this.$router.replace(`/topic/${i}`)
      },

    }


  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"

      /*&::after
        content: '';
        position: absolute;
        background-color: #d9d9d9;
        left: 0;
        width: 100%;
        height: 1px;
        transform-origin: 50% 100% 0;
        bottom: 0;*/
  .tabWrap
     width 100%
     height 1rem
    .tabNav
      z-index 1000
      background white
      position: fixed
      margin: 0;
      width: 100%;
      height: .72rem;
      padding-bottom: .2rem;
      display flex
      flex 1
      justify-content space-around
      .option
        display: inline-block;
        height: .72rem;
        line-height: .72rem;
        box-sizing: border-box;
        font-size: .38rem;
        color: #7F7F7F;
        padding: 0 .08rem;
        margin: 0 .2rem;
        vertical-align: middle;
      .active
        color: #B4282D;
        border-bottom: .04rem solid #B4282D
        display: inline-block;
        height: .72rem;
        line-height: .72rem;
        box-sizing: border-box;
  .contents
    >img
     width 100%
    .content
      width: 100%;
      background: gainsboro;
      padding 0.3rem 0
      box-sizing: border-box;
      .flexbox
        padding: .36rem .3rem;
        background white
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        color inherit
        .info
          width: 5rem;
          .title
            font-size: .35rem;
            color: #333;
            line-height: .36rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .ava
              display inline-block
              width: .65rem;
              height: .65rem;
              overflow: hidden;
              border-radius: 50%;
              box-sizing: border-box;
              border: .01rem solid #d9d9d9;
              margin-right: .12rem;
              vertical-align: middle;
              >img
                width 100%
            > span
              display: inline-block;
              vertical-align: middle;
          .text
            width: 100%;
            font-size: .5rem;
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
            font-size: .35rem;
            line-height: .4rem;
            padding-top: .08rem;
            color: #7f7f7f;
          .rcount
            position: relative;
            left: .3rem;
            bottom: .26rem;
            font-size: .22rem;
            color: #999;
            line-height: .32rem;
            margin-top: .18rem;
            .icn
              display: inline-block;
              font-size 0.3rem
              line-height 1rem
              vertical-align: middle;
              margin-right: .08rem
            > span
              line-height 1rem
              font-size 0.3rem
              display: inline-block;
              vertical-align: middle;
        .pic
          width: 300px;
          height: 300px;
          position: relative;
          overflow: hidden;
          border-radius: .08rem;
          >img
            width 300px
            height 300px
</style>
