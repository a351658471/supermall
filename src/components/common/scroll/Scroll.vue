<template>
  <div class="wrapper" ref="wrapper">
          <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:1
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            bscroll:null
        }
    },
    created(){
    },
    mounted(){
        this.bscroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            click:true
        })
        
        this.bscroll.on('scroll', (option) => {
            this.$emit('scrollPosition',option)
        })

        this.bscroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
    },
    methods:{
        refresh(){
            this.bscroll.refresh()
        },
        getScrollY(){
            return this.bscroll?this.bscroll.y : 0
        }
    }

    
}
</script>

<style scoped>
</style>