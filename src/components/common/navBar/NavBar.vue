<template>

  <div class="nab-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>


</template>

<script>
export default {

}
</script>

<style scoped>
.nab-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center
    }
    .left, .right{
        width: 44px
    }
    .center{
        flex: 1;
    }
</style>