<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    name: 'App',
    components: {
      FooterGuide
    }
  }
</script>

<style>

</style>
