<template>
  <div class="bottombar">
      <div class="bottomleft baritem">
          <div class="leftitem">
              <img src="@/assets/img/service.png" alt="">
              <span class="bottomtext">客服</span>
          </div>
          <div class="leftitem">
              <img src="@/assets/img/shop.png" alt="">
              <span class="bottomtext">店铺</span>
          </div>
          <div class="leftitem">
              <img src="@/assets/img/collect.png" alt="">
              <span class="bottomtext">收藏</span>
          </div>
      </div>
      <div class="bottomright baritem">
          <div class="rightitem cart" @click="cartClick">加入购物车</div>
          <div class="rightitem bay">购买</div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        cartClick(){
            this.$emit('cartClick')
        }
    }
}
</script>

<style scoped>
.bottombar{
    background-color: #fff;
    position: relative;
    height:49px;
    display: flex
}
.baritem{
    flex: 1
}
.bottomleft{
    display: flex;
}
.leftitem{
    flex:1;
    text-align: center;
}
.bottomtext{
   font-size: 13px
}
.bottomleft img{
    width: 22px;
    margin:2px 15px 1px 15px;
}
.bottomright{
    display: flex
}
.rightitem{
    flex: 1;
    text-align: center;
    line-height: 49px;
    font-size: 15px;
}
.cart{
    background-color: #ffe817;
    color: #333;
}
.bay{
    background-color: #f69;
    color: #fff
}
</style>