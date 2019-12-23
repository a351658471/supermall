<template>
  <div v-if="Object.keys(goods).length !== 0" class="detailbaseinfo">
      <div class="title">
          {{goods.title}}
      </div>
      <div class="priceinfo">
          <span class="newprice">{{goods.newPrice}}</span>
          <span class="oldprice">{{goods.oldPrice}}</span>
          <span class="disc">{{goods.discount}}</span>
      </div>
      <div class="other">
          <div v-for="item in goods.columns" :key="item">{{item}}</div>
      </div>
      <div class="service">
          <span class="service-items" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index].icon"/>
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
props:{
    goods:{
        type:Object,
        default:() => {
          return {}
        }
    }
}
}
</script>

<style scoped>
.detailbaseinfo{
    margin-top: 10px;
    padding: 0 8px;
    border-bottom: 5px solid rgba(100,100,100,.1);
}
.priceinfo{
    margin: 10px 0;
    color: #222
}
.newprice{
    font-size: 24px;
    color: var(--color-high-text);
}
.oldprice{
    color: #999;
    font-size: 13px;
    text-decoration-line: line-through
}
.disc{
    position: relative;
    bottom:5px;
    font-size: 13px;
    color: #fff;
    background: #ff6777;
    border-radius: 8px;
    padding: 1px 5px;
}
.other{
    margin:10px 0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #999;
     border-bottom: 1px solid rgba(100,100,100,.1);

}
.service{
    padding: 10px 0 20px 0;
    display: flex;
    justify-content: space-between;
    

}
.service-items{
    font-size: 12px;
    text-align: center
}
.service-items img{
    position: relative;
    top:2px;
    width: 12px
}
</style>