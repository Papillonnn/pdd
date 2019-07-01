<template>
    <div class="hot">
        <div class="swiper-container" v-if="homecasual.length > 0">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in homecasual" :key="index">
                    <img :src="item.imgurl">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <hot-nav></hot-nav>
        <!-- 广告位 -->
        <div class="hot-ad">
            <img src="../../imgs/hot_ad/home_ad.gif">
        </div>
        <hot-shop-list></hot-shop-list>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HotNav from './HotNav'
import HotShopList from './HotShopList'
import {mapState} from 'vuex' // 获取state中的数据

export default {
    components: {
        HotNav,
        HotShopList
    },
    computed: {
      ...mapState(['homecasual']) // 获取state中的数据
    },
    watch: {
        homecasual() {
            // 解决的问题：如果都写在mounted里面 图片数据还未接收完成，就已经创建了轮播图 导致轮播图不完整
            this.$nextTick(() => {
                //创建swiper实例
                new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    autoplay: true,
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    }
                }) 
            })
        }
    },
    mounted() {
        // 获取轮播图数据
        this.$store.dispatch('reqHomeCasual')
    }
}
</script>

<style lang="stylus" scoped>
.hot
  width 100%
  height 100%
  padding-top 46px
  img 
    width 100%  
</style>


