<template>
  <nav-bar class="navbar">
      <div class="left" slot="left" @click="back">
          <img src="@/assets/img/back.svg"/>
      </div>
      <div class="center" slot="center">
          <div class="center-items" 
               v-for="(item, index) in titles" 
               :key="index" @click="navItemClick(index)"
               :class="{'active': index == currentIndex}">
              {{item}}
          </div>
      </div>
  </nav-bar>
</template>

<script>
import navBar from '@/components/common/navBar/NavBar'
export default {
    components:{
        navBar
    },
    data(){
        return{
            currentIndex:0,
            titles:['商品','参数','评论','推荐']
        }
    },
    methods:{
        navItemClick(index){
            this.currentIndex = index
            this.$emit('navItemClick',index)
        },
        back(){
            this.$router.back()
        }
    }
}
</script>

<style>
.navbar{
    background:#fff

}
.left img{
 margin-top:12px
}
.center{
   display:flex;
   justify-content:space-around

}
.center-items{
    flex: 1;
    font-size: 13px
}
.active{
    color:#ff5777;
}
</style>