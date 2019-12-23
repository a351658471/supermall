import {debounce} from '@/common/utils.js'
import toTop from '@/components/content/totop/ToTop'
export const itemListenerMixin = {
 mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,20)
     this.$bus.$on('imgLoad',() => {
      refresh()
    })
 
}  
}

export const detailMixin = {
    mounted(){
       const refresh = debounce(this.$refs.scroll.refresh,20)
       const getOffset = debounce(this.getOffset,100)
        this.$bus.$on('detailImgLoad',() => {
         refresh();
         getOffset();
       })
    
   }  
   }

   export const totopMixin = {
     components:{
       toTop
     },
     data(){
       return {
         isShow:false,
       }
     },
     methods:{
      totop(){
        this.$refs.scroll.bscroll.scrollTo(0,0,500)
      },
       isShowTotop(position){
        this.isShow = (- position.y) > 1000
       }
     }
   }
