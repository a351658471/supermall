<template>
  <swiper class="detailswiper" ref="swiper" v-if="topImages">
    <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/Swiper'
    
	export default {
		name: "detailSwiper",
    components: {
		  Swiper,
      SwiperItem
    },
    props: {
		  topImages: {
		    type: Array,
             default: []
      }
    },
    methods: {
		  stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      }
    }
	}
</script>

<style scoped>
.detailswiper{
    height:300px;

}
</style>
