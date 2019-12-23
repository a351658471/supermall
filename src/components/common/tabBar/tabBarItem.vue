<template>
  <div class="tabBar-item" @click="makeTrue">
      <div v-if="!isActive"><slot name="item-icon"> <img src="./assets/images/home.png"/></slot></div>
      <div v-else><slot name="item-icon-active"> <img src="./assets/images/home_active.png"/></slot></div>
      <div :class="{Active:isActive}"><slot name="item-text"> <div>首页</div></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
  },
  data(){
    return{
    }
  },
  computed:{
    isActive(){
      if(this.$route.path.indexOf(this.path) != -1){
        return true
      }else{{
        return false
      }}
    }
  },
  methods:{
    makeTrue(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.Active{
  color: #ff5777;
}
.tabBar-item img{
    width:23px;
    height:23px;
    margin-top: 5px;
    
}
.tabBar-item div{
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 2px;
  color: #333;
}
</style>