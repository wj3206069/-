<template>
  <section>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in homeLbt" :key="index">
          <img :src="item.picUrl" alt="">
        </div>
      </div>
       <div class="swiper-pagination" >
         <span class="swiper-pagination-bullet is-active"></span>
       </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.min.css"

  export default {
    name: "ShopList",
    data(){
      return{
        imgSrc:[1,2,3,4,5,6,7,8]
      }
    },

    mounted(){
      this.$store.dispatch('getHomeLbt',()=>{
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            /*effect: "fade",*/
            loop: true,
            autoplay: {
              autoplay:true,
              delay: 3000
            },

            // 如果需要分页器
            pagination: '.swiper-pagination-bullet',
            paginationElement : 'span',
            paginationClickable :true,
            paginationBulletRender: function (swiper, index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
          })
        })
      })

    },

    computed: {
      ...mapState(['homeLbt'])
    },
  }
</script>

<style scoped lang="stylus">

section
  margin-top 170px
  overflow hidden
  width 100%
  .swiper-container
    height 4.93333rem
    width 100%
    margin-left auto
    margin-right auto
    position relative
    overflow hidden
    z-index 2
    .swiper-wrapper
      width 700%
      height 100%
      .swiper-slide
        width calc(100%/7)
        height 100%
        float left
        img
         width 100%
         height 100%
         display block
    .swiper-pagination
      position absolute
      bottom 0.1rem
      left 50%
      transform translateX(-50%)
      .swiper-pagination-bullet
        width: .43333rem;
        margin 0 .13333rem 0 0
        height: .05333rem;
        display: inline-block;
        background white
</style>
