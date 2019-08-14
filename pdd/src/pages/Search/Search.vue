<template>
  <div class="search">
    <!-- 搜索 -->
	  <search-nav :isShowSearchPanel="isShowSearchPanel" />
    <!-- 联动列表 -->
    <div class="shop">
      <!-- 左 -->
      <div class="menu-wrap">
        <ul>
          <li class="menu-item" :class="{'current': currentIndex === index}" v-for="(goods, index) in search" :key="index" @click="changeCurrentIndex(index)" ref="leftList">
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <!-- 右 -->
      <div class="shops-wrap">
        <ul ref="shopsParent">
          <li class="shops-li" v-for="(goods, index1) in search" :key="index1">
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
              <a href="javascript:void(0)">查看更多</a>
            </div>
            <!-- 手机品牌列表 -->
            <ul class="phone-type" v-if="goods.tag == 'phone'">
              <li v-for="(item, index) in goods.category" :key="index">
                <img :src="item.icon" alt="">
              </li>
            </ul>
            <ul class="shops-items">
              <li v-for="(item, index2) in goods.items" :key="index2">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 搜索面板 -->
    <search-panel v-if="isShow" :isShowSearchPanel="isShowSearchPanel" />
  </div>
</template>

<script>
import SearchNav from './children/SearchNav'
import SearchPanel from './children/SearchPanel'
import {mapState} from 'vuex'
import BScroll from '@better-scroll/core' // 滚动插件

export default {
	components: {
	  SearchNav,
    SearchPanel
  },
  data() {
    return {
      scrollY: 0,  // 右侧列表滑动的Y轴坐标（实时更新）
      rightLiTops: [],  // 所有分类的头部位置
      isShow: false  // 搜索面板的显示隐藏
    }
  },
  computed: {
    ...mapState(['search']),
    // 用于动态决定左侧哪个选项被选中
    currentIndex() {
      // 解构赋值
      const {scrollY, rightLiTops} = this
      // 介于0 1之间返回0
      return rightLiTops.findIndex((item, index) => {
        this._leftScroll(index)
        return scrollY >= item && scrollY < rightLiTops[index + 1]
      })
    }
  },
  mounted() {
    this.$store.dispatch('reqSearch')
    // this.$store.dispatch('reqSearch', () => {
    //    this._initScroll()
    // })
  },
  watch: {
    // 监听search
    search() {
      this.$nextTick(() => {
        this._initScroll()
        this._initRightLiTops()
      })
    }
  },
  methods: {
    // 初始化滚动插件
    _initScroll() {
      this.bsLeft = new BScroll('.menu-wrap', {})
      this.bsRight = new BScroll('.shops-wrap', {
        probeType: 3
      }) 
      // 实时获取scrollY的值
      this.bsRight.on('scroll', (pos) => {
        this.scrollY = Math.abs(pos.y)
      })
    },
    // 求出右边板块所有头部位置
    _initRightLiTops() {
      let tempArr = [] // 定义临时数组
      let top = 0
      tempArr.push(top)
      //获取所有的li并遍历
      let liArr = this.$refs.shopsParent.getElementsByClassName('shops-li')
      // Array.prototype.forEach.call(liArr, item => {
      //   top += item.clientHeight
      //   // 将top值存进临时数组
      //   tempArr.push(top)
      // })

      // 将伪数组转化为数组再forEach
      Array.prototype.slice.call(liArr).forEach(item => {
        top += item.clientHeight
        tempArr.push(top)
      })
      this.rightLiTops = tempArr
    },
    changeCurrentIndex(index) {
      this.scrollY = this.rightLiTops[index]
      this.bsRight.scrollTo(0, -this.scrollY, 300)
    },
    // 左侧联动
    _leftScroll(index) {
      let leftList = this.$refs.leftList
      this.bsLeft.scrollToElement(leftList[index], 300, 0, -100)
    },
    isShowSearchPanel(flag) {
      this.isShow = flag
    }
  }
}
</script>

<style lang="stylus" scoped>
.search
  width 100%
  height 100%
  background-color #fff
  overflow hidden
  .shop
    position absolute
    top 60px
    bottom 50px
    display flex
    width 100%
    overflow hidden
    .menu-wrap
      width 80px
      // flex 0 0 80px
      background-color #e0e0e0
      .menu-item 
        position relative
        display flex
        justify-content center
        align-items center
        height 60px
        background-color #fafafa
        color #666
        font-weight lighter
      .current
        color #e02e24
      .current::before
        position absolute
        left 0
        content ''
        width 4px
        height 30px
        background-color #e02e24
    .shops-wrap
      flex 1
      background-color #fff
      .shops-li
        padding-bottom 20px
        .shops-title
          display flex
          flex-direction row
          padding 0 10px
          height 44px
          align-items center
          justify-content space-between
          color #999
          a
            color #999
            text-decoration none
            font-weight lighter
        .shops-items
          display flex
          flex-wrap wrap
          li
            display flex
            flex-direction column
            width 33.3%
            height 90px
            justify-content center
            align-items center
            color #666
            font-weight lighter
            font-size 14px
            img
              width 60%
              height 60%
              margin-bottom 5px
        .phone-type
          width 100%
          display flex
          flex-direction row
          flex-wrap wrap
          border-bottom-1px(#ccc)
          li
            width 33.3%
            display flex
            justify-content center
            align-items center
            margin 5px 0
            img
              width 80%
</style>
