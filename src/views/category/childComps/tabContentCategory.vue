<template>
  <div class="tcontent" v-if="list.length">
      <div class="item" v-for="(item, index) in list" :key="index">
          <img :src="item.image">
           <div class="item-text">{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        list:Array
    }
}
</script>

<style scoped>
.tcontent{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding:10px 0 0 10px ;
}
.item{
    text-align: center;
    width: 33%;
    margin-bottom: 5px
}
img{
    width: 95%
}
.item-text{
    font-size: 13px;
}
</style>