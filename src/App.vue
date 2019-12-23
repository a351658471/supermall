<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
      <tab-bar></tab-bar>
  </div>
</template>
<script>
import tabBar from './components/common/tabBar/TabBar'
export default {
  components:{
    tabBar
  }
}
</script>
<style>
  @import './assets/css/base.css';
   /* #app {
    position: relative;
  } */
</style>
