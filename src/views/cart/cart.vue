<template>
<div class="cart">
  <nav-bar class="navbar">
    <template v-slot:center><div>购物车<span v-show="showLength">({{$store.state.cartList.length}})</span></div></template>
  </nav-bar>
  <scroll ref="scroll" class="scontent" 
          @scrollPosition="scrollPosition" 
          :pullUpLoad="true" 
          :probeType="3">
    <div>
      <cart-list :cartList="cartList"></cart-list>
    </div>
    
  </scroll>
  <bottom-bar class="bottom-menu"></bottom-bar>
</div>
</template>

<script>
import navBar from '@/components/common/navBar/NavBar'
import Scroll from '@/components/common/scroll/Scroll'

import cartList from './childComps/cartList'
import bottomBar from './childComps/bottombar'

export default {
components:{
  navBar,
  Scroll,
  cartList,
  bottomBar
  
},
computed:{
  cartList() {
		    return this.$store.state.cartList
      },
  showLength(){
    if(this.$store.state.cartList.length){
      return true
    }
  }
},
created(){

},
methods:{
  scrollPosition(){},
}
}
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .scontent{
    overflow: hidden;
    position: absolute;
    top:44px;
    left: 0;
    right: 0;
    bottom: 93px
  }
  .bottom-menu{
    z-index: 10;
    position: absolute;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>