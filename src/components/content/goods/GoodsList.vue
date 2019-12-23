<template>
  <div class="goods-item" @click="itemClick">
          <img :src="item.show.img"/>
          <div class="text">
              <p>{{item.title}}</p>
              <span class="price">{{item.price}}</span>
              <span class="cfav">
                  <img src="@/assets/img/common/collect.svg" @load="imgLoad"/>
                  {{item.cfav}}</span>
          </div>
      </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            default:function(){
                return {}
        }
    }
},
methods:{
    imgLoad(){
        this.$bus.$emit('imgLoad')
    },
    itemClick(){
        this.$router.push({
            path:'/detail',
            query:{
                id:this.item.iid
            }
        })
    }
}
}
</script>

<style>

.goods-item{
    position: relative;
    padding-bottom: 40px;
    text-align: center;
    width: 50%
}
.goods-item img{
    border-radius: 5px;
    width: 95%
}
.text{
    width: 100%;
    position: absolute;
    bottom:10px;
    font-size: 13px;
}
.text p{
    margin-left: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.price{
    color: #ff5777;
}
.text img{
    position: relative;
    top:2px;
    left: 3px;;
    width: 15px;
}
</style>