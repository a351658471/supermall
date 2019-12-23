<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div slot='center'>购物街</div>
    </nav-bar>
    <tab-ctrol ref="tabctrol1" class="tabctrol1" @tabEvent="tabEvent" v-show="tabcShow"/>
    <scroll ref="scroll" 
            class="content" 
            @scrollPosition="scrollPosition" 
            :pullUpLoad="true" 
            @pullingUp="pullingUp" 
            :probeType="3"> 
      <div>
        <div v-for="(item, index) in list" :key="index">{{item}}</div>
        <button @click="testClick">按钮</button>
        <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
        <home-recommend :recommends='recommends'/>
        <home-feature/>
        <tab-ctrol ref="tabctrol2" class="tabctrol2" @tabEvent="tabEvent"/>
        <goods :goodsData='goodsData'/>
      </div>
    </scroll>
    <to-top class="totop" @click.native="totop" v-show="isShow"/>
  </div>
</template>

<script>
import homeSwiper from './childComps/HomeSwiper'
import homeRecommend from './childComps/HomeRecommend'
import homeFeature from './childComps/HomeFeatureView'

import navBar from '@/components/common/navBar/NavBar'
import Scroll from '@/components/common/scroll/Scroll'
import tabCtrol from '@/components/content/tabControl/TabControl'
import goods from '@/components/content/goods/Goods'


import {getHomeMultidata, getHomeGoods} from '@/network/home'
import {itemListenerMixin, totopMixin} from '@/common/mixin'
export default {
  components:{
    navBar,
    homeSwiper,
    homeRecommend,
    homeFeature,
    tabCtrol,
    goods,
    Scroll,
    // toTop,
    tabOffsetTop:0,
  },
  mixins:[itemListenerMixin, totopMixin],
  data(){
    return{
      tabcShow:false,
      // isShow:false,
      currentType:'pop',
      banners:[],
      recommends:[],
      list:[1,2,3,4,5,6],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      goodsData:[],
      saveOffsetTop:0
    }
  },
  created(){
    this.getMultiData();
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

   
  },

  mounted(){
    // const refresh = debounce(this.$refs.scroll.refresh,20)
    //  this.$bus.$on('imgLoad',() => {
    //   refresh()
    // })
 
  },
  activated(){
     this.$refs.scroll.bscroll.refresh()
    this.$refs.scroll.bscroll.scrollTo(0,this.saveOffsetTop,0) 
   

  },
  deactivated(){
    this.saveOffsetTop = this.$refs.scroll.getScrollY()
  },
  updated(){
    this.tabOffsetTop = this.$refs.tabctrol2.$el.offsetTop
  },
  methods:{
    testClick(){
      this.list.length = 0;
      console.log(this.list)
    },
    getMultiData(){
       getHomeMultidata().then(res=>{
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
    }).catch(err => {
      console.log(err)
    })
    },

    getHomeGoods(type){
      getHomeGoods(type,this.goods[type].page+1).then((res) => {
        this.goods[type].list.push(...res.data.list)
        this.goodsData=this.goods[type].list
        this.goods[type].page+=1
      })
    },

    tabEvent(v){
      switch(v){
        case 0:
          this.currentType = 'pop'
          this.goodsData = this.goods['pop'].list
          break
        
        case 1:
          this.currentType = 'new'
          this.goodsData = this.goods['new'].list
          break
        
        case 2:
          this.currentType = 'sell'
          this.goodsData = this.goods['sell'].list
          break
      }
      this.$refs.tabctrol1.currentIdnex = v;
      this.$refs.tabctrol2.currentIdnex = v;
    },

    pullingUp(){
     getHomeGoods(this.currentType,this.goods[this.currentType].page+1).then((res) => {
        this.goods[this.currentType].list.push(...res.data.list)
        this.goodsData=this.goods[this.currentType].list
        this.goods[this.currentType].page+=1
        this.$refs.scroll.bscroll.finishPullUp()
      })
    },

    // totop(){
    //   this.$refs.scroll.bscroll.scrollTo(0,0,500)
    // },

    scrollPosition(position){
      this.isShowTotop(position)
      this.tabcShow = (- position.y) > this.tabOffsetTop
    }
   
  }
}
</script>

<style scoped>
#Home{
  height:100vh
}
  .home-nav{
    /* position:fixed;
    top:0;
    left: 0;
    right: 0; */
    background-color: var(--color-tint);
    color: #fff;
    /* z-index: 1; */
  }
  .tabctrol2,.tabctrol1{
    z-index: 1;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0
  }
  .totop{
    position:fixed;
    bottom: 60px;
    right: 10px;
  }
</style>