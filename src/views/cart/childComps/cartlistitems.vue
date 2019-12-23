<template>
  <div class="cartlistitems">
      <dir class="item-check">
        <div class="icon-selector" :class="{'selector-active': checked}" @click="selectItem">
            <img src="@/assets/img/tick.svg" alt="">
        </div>
      </dir>
      <div class="item-img">
        <img :src="itemInfo.imgURL" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.newPrice}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props:{
        itemInfo:Object
    },
data(){
    return{
    }
},
computed:{
    checked(){
        const cartList = this.$store.state.cartList
       return cartList.find(item => {
            return this.itemInfo.iid == item.iid
        }).checke
    }
},
methods:{
    selectItem(){
        let mychecked=!this.checked;
        const obj = {
            itemInfo: this.itemInfo,
            checked:mychecked
        }
        this.$store.commit('checked',obj)

    }
}
}
</script>

<style scoped>
.cartlistitems{
    display: flex;
    border-bottom: 1px solid #ccc;
}
.item-check{
    margin: auto 5px;
    cursor: pointer;
}
.icon-selector{
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    
}
 .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
.item-img{
    margin: 5px
}
.item-img img{
    border-radius: 10px;
    width:70px;
    height: 90px;
}
.item-info{
    position: relative;
    overflow: hidden;
     margin: 5px
}
.item-title{
    padding-right: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
.item-desc{
    margin:10px 0;
    color: #999;
    font-size: 13px;
    padding-right: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
.info-bottom{
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
}
.left{
color: orangered;
}
</style>