<template>
    <div class="hot-nav">
        <!-- 滚动区域 -->
        <div class="hot-nav-content">
            <div class="hot-nav-inner" v-if="homenav.length > 0">
                <div class="hot-nav-item" v-for="(item, index) in homenav" :key="index">
                    <img :src="item.iconurl" alt="">
                    <span>{{item.icontitle}}</span>
                </div>
            </div>
        </div>
        <!-- 滚动条 -->
        <div class="hot-nav-bottom">
            <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            // 屏幕宽度
            screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            // 滚动内容的宽度
            scrollContentW: 720,
            // 滚动条背景的长度
            bgBarW: 100,
            // 滚动条的长度
            barXWidth: 0,
            // 起点
            startX: 0,
            // 结束点
            endFlag: 0,
            // 移动的距离
            barMoveWidth: 0
        }  
    },
    computed: {
        innerBarStyle() {
            return {
                width: `${this.barXWidth}px`,
                left: `${this.barMoveWidth}px`
            }
        },
        ...mapState(['homenav'])
    },
    mounted() {
        this.getBottomBarWidth()
        this.bindEvent()
        this.$store.dispatch('reqHomeNav')
    },
    methods: {
        getBottomBarWidth() {
            const {screenW, scrollContentW, bgBarW} = this
            this.barXWidth = Number((screenW / scrollContentW) * bgBarW)
        },
        bindEvent() {
            this.$el.addEventListener('touchstart', this.itemTouchStart, false)
            this.$el.addEventListener('touchmove', this.itemTouchMove, false)
            this.$el.addEventListener('touchend', this.itemTouchEnd, false)
        },
        itemTouchStart(event) {
            // console.log(event.touches[0].pageX)
            this.startX = Number(event.touches[0].pageX)
        },
        itemTouchMove(event) {
            const {scrollContentW, bgBarW} = this
            // console.log(event.touches[0].pageX)
            // 移动的距离
            let moveWidth =  Number(event.touches[0].pageX) - this.startX 

            // 滚动条移动的距离
            this.barMoveWidth = -( (bgBarW / scrollContentW) * moveWidth - this.endFlag)
            // 边界值处理
            if(this.barMoveWidth <= 0) {
                this.barMoveWidth = 0
            }else if(this.barMoveWidth >= bgBarW - this.barXWidth) {
                this.barMoveWidth = bgBarW - this.barXWidth
            }
        },
        itemTouchEnd() {
            this.endFlag = this.barMoveWidth
        }
    }
}
</script>

<style lang="stylus" scoped>
.hot-nav 
  position relative
  width 100%
  height 180px
  padding-bottom 10px
  background-color #fff
  .hot-nav-content
    width 100%
    overflow-x scroll
    .hot-nav-inner
      display flex
      flex-direction row
      flex-wrap wrap
      width 720px
      height 180px
      .hot-nav-item
        display flex
        flex-direction column
        justify-content center
        align-items center
        width 90px
        height 90px
        font-size 14px
        img 
          width 40%
          margin-bottom 5px
  .hot-nav-content::-webkit-scrollbar
    display none    
  .hot-nav-bottom
    position absolute 
    left calc(50% - 50px)
    bottom 8px
    width 100px
    height 2px
    background #ccc
    .hot-nav-bottom-inner
      position absolute
      left 0
      height 2px
      background-color orange
  .hot-ad
    margin 8px 0
    padding 5px
    background-color #fff
    img 
      width 100%
</style>
