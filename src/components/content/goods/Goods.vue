<template>
  <div class="goods">
      <goods-list  v-for="(item,index) in goodsData" :key="index" :item='item'/>
  </div>
</template>

<script>
import goodsList from './GoodsList'
export default {
    components:{
        goodsList
    },
    props:{
        goodsData:{
            type:Array,
            default:function(){
                return []
            }
        }
    }
}
</script>

<style>
.goods{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
   
}
</style>