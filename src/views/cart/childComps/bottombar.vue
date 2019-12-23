<template>
  <div class="bottom-menu">
     <dir class="item-check">
        <div class="icon-selector" :class="{'selector-active': checked}" @click="selectAll">
            <img src="@/assets/img/tick.svg" alt="">
        </div>
      </dir>
        <span>全选</span>
        <span class="total-price">合计: ¥{{totalPrice}}</span>
        <span class="buy-product">付款</span>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        checked(){
            const cartList = this.$store.state.cartList
            if(cartList.length){
                let haveF =  cartList.filter(item => {
                     return !item.checke
                })
                if(haveF.length){
                    return false

                }else{
                    return true
                }
            }else{
                return false
            }
               
      
        },
        totalPrice(){
            const cartList = this.$store.state.cartList
            return cartList.filter(item =>{
                return item.checke
            }).reduce((oldValue, item) => {
               
                return oldValue + item.count * item.newPrice
         },0)
        }

    },
    methods:{
        selectAll(){
            let mychecked =!this.checked
            this.$store.commit('selectAll',mychecked)

        }
    }
    
}
</script>

<style scoped>
.bottom-menu{
    position: relative;
    display: flex;
    background: #eee;
    height: 35px;

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
span{
    line-height: 35px;
}
span:nth-of-type(2){
    margin-left: 10px;
}
  .buy-product{
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      color: #fff;
      width: 70px;
      text-align: center;
      background: orangered;
  }
</style>