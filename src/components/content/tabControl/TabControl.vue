<template>
    <div class="tabctrol">
        <div class="tabctrol-items" 
             v-for="(item,index) in title" 
             :key="index" 
             :class="{isAction:index==currentIdnex}"
             @click="tabEvent(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:Array,
            default:function(){
                return ['流行','新款','精选']
            }
        }
    },
    data(){
        return{
            currentIdnex:0
        }
    },
    methods:{
        tabEvent(index){
            this.currentIdnex=index;
            this.$emit('tabEvent',index)
        }
    }
}
</script>

<style>
.tabctrol{
    background: #fff;
    position: sticky;
    top:44px;
    display: flex;
}
.tabctrol-items{
    font-size: 15px;
    height:44px;
    line-height: 44px;
    flex: 1;
    text-align: center
}
.isAction{
    color: #ff5777;
}
.isAction span{
    border-bottom: 2px solid #ff5777;
    padding: 0 5px 8px 5px;
}
</style>