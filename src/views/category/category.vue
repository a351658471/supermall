<template>
  <div class="category">
      <nav-bar class="navbar">
        <div slot="center">商品分类</div>
      </nav-bar>
      <div class="content">
        <category-menu class="menu" :categories="categories" @itemClick="itemClick" />
        <scroll ref="scroll"
                class="scroll">
            <div>
              <tab-content-category :list="list"></tab-content-category>
              <tab-control :title="['综合','新品','销量']" @tabEvent="tabEvent"></tab-control>
              <!-- <goods :goodsData="showCategoryDetail"></goods> -->
            </div>
        </scroll>
      </div>
  </div>
</template>

<script>
import navBar from '@/components/common/navBar/NavBar'
import Scroll from '@/components/common/scroll/Scroll'
import TabControl from '@/components/content/tabControl/TabControl'
import goods from '@/components/content/goods/Goods'

import categoryMenu from './childComps/categoryMenu'
import tabContentCategory from './childComps/tabContentCategory'

import {getCategory, getSubcategory} from '@/network/category'
export default {
  components:{
    navBar,
    Scroll,
    categoryMenu,
    tabContentCategory,
    TabControl,
    goods
  },
  data(){
    return{
     categories:[],
     categoryData: {},
     currentIndex:0,
     list:[],
     goodsData:[]

    }
  },
  computed:{
    showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      // showCategoryDetail() {
		  //   if (this.currentIndex === -1) return []
		  //   return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      // }
  },
  created(){
    this.getCategory()
  },
  mounted(){
    
  },
  methods:{
    getCategory(){
      getCategory().then(res =>{
        this.categories = res.data.category.list

        for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }

        this.getSubcategories(0)
      })
    },
    getSubcategories(index){
      this.currentIndex = index
        const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
            this.categoryData[index].subcategories = res.data
            this.categoryData = {...this.categoryData}
            this.list = this.categoryData[index].subcategories.list
            // this._getCategoryDetail(POP)
            // this._getCategoryDetail(SELL)
            // this._getCategoryDetail(NEW)
          })
    },
    itemClick(index){
      this.getSubcategories(index)
    },
    tabEvent(index){

    }
   
  }
}
</script>

<style scoped>
.category{
  height: 100vh;
  position: relative;
}
.navbar{
  color: #fff;
  background: #ff5777;
}
.content{
  display: flex;
   position: absolute;
  top:44px;
  bottom:49px;
  left: 0;
  right:0;
}
.menu{
  width: 30%
}
.scroll{
  height: 100%;
  width: 70%;
  overflow: hidden;
}
</style>