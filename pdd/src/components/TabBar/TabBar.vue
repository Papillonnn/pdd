<template>
    <div class="bottom-tab">
        <span class="tab-item">
            <img :src="$route.path.includes('/home')?TabBarImgArr[0].selected:TabBarImgArr[0].normal">
            <span @click="switchTo('/home')" :class="{'on': '/home' == $route.path}">首页</span>
        </span>
        <span class="tab-item">
            <img :src="$route.path.includes('/recommend')?TabBarImgArr[1].selected:TabBarImgArr[1].normal">
            <span @click="switchTo('/recommend')" :class="{'on': '/recommend' == $route.path}">推荐</span>
        </span>
        <span class="tab-item">
            <img :src="$route.path.includes('/search')?TabBarImgArr[2].selected:TabBarImgArr[2].normal">
            <span @click="switchTo('/search')" :class="{'on': '/search' == $route.path}">搜索</span>
        </span>
        <span class="tab-item">
            <img :src="$route.path.includes('/chat')?TabBarImgArr[3].selected:TabBarImgArr[3].normal">
            <span @click="switchTo('/chat')" :class="{'on': '/chat' == $route.path}">聊天</span>
        </span>
        <span class="tab-item">
            <img :src="$route.path.includes('/me')?TabBarImgArr[4].selected:TabBarImgArr[4].normal">
            <span @click="switchTo('/me')" :class="{'on': '/me' == $route.path}">我的</span>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            TabBarImgArr: [
                {
                    normal: require('../../../static/img/icon_home.png'),
                    selected: require('../../../static/img/icon_home_selected.png')
                },
                {
                    normal: require('../../../static/img/icon_intro.png'),
                    selected: require('../../../static/img/icon_intro_selected.png')
                },
                {
                    normal: require('../../../static/img/icon_search.png'),
                    selected: require('../../../static/img/icon_search_selected.png')
                },
                {
                    normal: require('../../../static/img/icon_chat.png'),
                    selected: require('../../../static/img/icon_chat_selected.png')
                },
                {
                    normal: require('../../../static/img/icon_mine.png'),
                    selected: require('../../../static/img/icon_mine_selected.png')
                },
            ]
        }
    },
    methods: {
        switchTo(path) {
            this.$router.replace(path)
        }
    }
}
</script>

<style lang="stylus" scoped>
  .bottom-tab
    position fixed
    bottom 0
    left 0
    display flex
    width 100%
    height 50px
    color #666
    background-color #fff
    z-index 999 
    .tab-item
      display flex
      flex 1
      flex-direction column
      align-items center
      justify-content center
      font-size 12px
      img 
        width 35%
        margin-bottom 2px
      .on
        color red
</style>
