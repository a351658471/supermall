<template>
    <div class="cartlist">
        <cart-list-items v-for="(itemInfo, index) in cartList" 
                        :itemInfo="itemInfo" 
                        :key="index"></cart-list-items>
    </div>
</template>

<script>
import cartListItems from './cartlistitems'
export default {
    props:{
      cartList:Array
    },
    components:{
        cartListItems
    },
     
}
</script>

<style scoped>
.cartlist{
    width: 100%
}
</style>