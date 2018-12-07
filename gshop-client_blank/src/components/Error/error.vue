<template>
    <div class="error">
      <h1>网络加载失败</h1>
      <div class='btn' @click="$router.push('/shop')">点击回首页</div>
    </div>
</template>

<script>
  export default {
    name: "error"
  }
</script>

<style scoped lang="stylus">
.error
  width 100%
  h1
    text-align center
    line-height 8rem
    font-size 1rem
  .btn
    width 3rem
    height 1.3rem
    background deeppink
    margin 0 auto
    border-radius .5rem
    font-size 0.5rem
    line-height 1.3rem
</style>
