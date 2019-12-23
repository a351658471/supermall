<template>
  <div class="tabBar">
      <bar-item path="/home"></bar-item>
      <bar-item path="/category">
        <img slot='item-icon' src="./assets/images/category.png"/>
        <img slot='item-icon-active' src="./assets/images/category_active.png"/>
        <div slot='item-text'>分类</div>
      </bar-item>
      <bar-item path="/cart">
        <img slot='item-icon' src="./assets/images/cart.png"/>
        <img slot='item-icon-active' src="./assets/images/cart_active.png"/>
        <div slot='item-text'>购物车</div>
      </bar-item>
      <bar-item path="/profile">
        <img slot='item-icon' src="./assets/images/profile.png"/>
        <img slot='item-icon-active' src="./assets/images/profile_active.png"/>
        <div slot='item-text'>我的</div>
      </bar-item>
  </div>
</template>

<script>
import BarItem from './tabBarItem'
export default {
    components:{
        BarItem
    }
}
</script>

<style>
 .tabBar{
     box-shadow: 0 -2px 10px rgba(100, 100, 100, .2);
     position:fixed;
     left: 0;
     right: 0;
     bottom: 0;
     height: 49px;
     background-color: #f6f6f6;
     display: flex;
     text-align: center;
    
 }
 .tabBar-item{
     flex: 1;
 }
</style>