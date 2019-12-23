<template>
  <div id="detail">
      <nav-bar ref="navbar" @navItemClick="navItemClick"/>
      <scroll  ref="scroll" class="content" 
               @scrollPosition="scrollPosition" 
               :pullUpLoad="true" 
               @pullingUp="pullingUp" 
               :probeType="3">
          <div>
            <detail-swiper :topImages='topImages'/>
            <detail-baseinfo :goods='goods'/>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
            <detail-params-info ref="param" :param-info="paramInfo"></detail-params-info>
            <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
          </div>
      </scroll>
      <detail-bottom-bar class="bottombar" @cartClick="cartClick"></detail-bottom-bar>
      <to-top class="totop" @click.native="totop" v-show="isShow"/>
  </div>
</template>

<script>
import navBar from './childComps/detailNavBar'
import detailSwiper from './childComps/detailSwiper'
import detailBaseinfo from './childComps/detailBaseInfo'
import detailShopInfo from'./childComps/detailShopInfo'
import detailGoodsInfo from './childComps/detailGoodsInfo'
import detailCommentInfo from './childComps/detailCommentInfo'
import detailParamsInfo from './childComps/detailParamsInfo'
import detailBottomBar from './childComps/detailBottomBar'
 
import {getDetailData, Goods, Shop, GoodsParam} from '@/network/detail.js'
import {detailMixin, totopMixin} from '@/common/mixin.js'

import Scroll from '@/components/common/scroll/Scroll'
export default {
    name:"detail",
    components:{
        navBar,
        detailSwiper,
        detailBaseinfo,
        detailShopInfo,
        Scroll,
        detailGoodsInfo,
        detailCommentInfo,
        detailParamsInfo,
        detailBottomBar,
    },
    mixins:[detailMixin, totopMixin],
    data(){
        return{
            iid:'',
            topImages:[],
            goods:{},
            shop:{},
            detailInfo: {},
            commentInfo: {},
            paramInfo:{},
            getcommentOffet:0,
            getParamOffet:0
        }
    }, 
    created(){
        this.getDetailData(this.$route.query.id)
    },
    mounted(){
    },
    updated(){
            
    },
    methods:{
        getDetailData(v){
            this.iid = v
            getDetailData(v).then((res) => {
                const data = res.result

                this.topImages = data.itemInfo.topImages

                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                
                this.shop = new Shop(data.shopInfo);
                
                this.detailInfo = data.detailInfo;
                
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
                 
                 if (data.rate.list) {
                        this.commentInfo = data.rate.list[0];
                    }
           }).catch((err) => {
                console.log(err)
            })
        },

        navItemClick(index){
            switch(index){
                case 0:
                    this.$refs.scroll.bscroll.scrollTo(0,0,500)
                    break;
                case 1:
                    this.$refs.scroll.bscroll.scrollTo(0,this.getParamOffset,500)
                    break;
                case 2:
                    this.$refs.scroll.bscroll.scrollTo(0,this.getcommentOffet,500)
            }
        },
        getOffset(){
           this.getParamOffset = this.$refs.param? -this.$refs.param.$el.offsetTop : null;
           this.getcommentOffet =  this.$refs.comment? -this.$refs.comment.$el.offsetTop : null;
        },
        
        pullingUp(){

        },
        scrollPosition(position){
            this.isShowTotop(position)
            if(position.y <= this.getParamOffset){
                this.$refs.navbar.currentIndex = 1
            }else if(position.y <=this.getcommentOffet){
                this.$refs.navbar.currentIndex = 2
            }else{
                this.$refs.navbar.currentIndex = 0
            }
        },
        cartClick(){
           const obj = {}
            // 2.对象信息
            obj.iid = this.iid;
            obj.imgURL = this.topImages[0]
            obj.title = this.goods.title
            obj.desc = this.goods.desc;
            obj.newPrice = this.goods.nowPrice;
            // 3.添加到Store中
            this.$store.commit('addCart', obj)

        }
    }
}
</script>

<style scoped>
 #detail {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
.content{
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
}
.bottombar{
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    right: 0;
}
  .totop{
    position:fixed;
    bottom: 60px;
    right: 10px;
  }
</style>