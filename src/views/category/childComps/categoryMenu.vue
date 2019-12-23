<template>
    <div class="mene">
        <scroll ref="scroll" 
                    class="mene-scroll">
                <div class="mene-scontent">
                <div class="left">
                    <div class="left-item"
                        v-for="(item,index) in categories"
                        :key="index"
                        :class="{'left-active':currentIndex == index}"
                        @click="itemClick(index)">{{item.title}}</div>
                </div>
                </div>
        </scroll>
    </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
export default {
    components:{
        Scroll
    },
    props:{
        categories:Array
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            this.$emit('itemClick',index)
        }
    }
}
</script>

<style scoped>
.mene-scroll{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.mene-scontent{
  display: flex
}
.left{
  width: 100%;
  text-align: center;
  font-size: 14px;
  background:#eee;
  color: #999;
  
}
.left-item{
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.left-active{
  border-left: 2px solid #ff5777;
  background: #fff
}
</style>