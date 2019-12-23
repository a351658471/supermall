<template>
  <div class="recommend">
      <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <a href="#">
          <img :src="item.image"/>
          <div>{{item.title}}</div>
      </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type:Array,
            value:[]
        }
    }
}
</script>

<style>

.recommend{
    font-size: 13px;
    padding:10px 0 20px;
    width: 100%;
    display: flex;
    border-bottom: 10px solid #eee
}
.recommend-item{
    text-align: center
}
.recommend-item img{
    margin-bottom: 8px;
    width: 80%
}
</style>