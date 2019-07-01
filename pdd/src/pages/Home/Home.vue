<template>
    <div class="home">
        <!-- 首页头部滑动导航 -->
        <ly-tab
        class="fixed"
        v-model="selectedId" 
        :items="items" 
        :options="options"
        @change="onItemClicked"
        />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedId: 0,   // 选中的ID
            items: [
                { label: '热门' },
                { label: '服饰' },
                { label: '鞋包' },
                { label: '母婴' },
                { label: '百货' },
                { label: '食品' },
                { label: '内衣' },
                { label: '男装' },
                { label: '电器' }
            ],
            options: {
                activeColor: '#e9232c'
            },
            // 头部导航路由跳转数组
            subRouteUrl: ['/home/hot',  '/home/dress', '/home/box', '/home/mbaby', '/home/general', '/home/food', '/home/shirt', '/home/man', '/home/ele']
        }
    },
    methods: {
        onItemClicked(input, id) {
            this.$router.replace(this.subRouteUrl[id])
        }
    }
}
</script>

<style lang="stylus" scoped>
.home
  width 100%
  height 100%
  background-color #f5f5f5
  .fixed
    position fixed
    top 0
    left 0
    z-index 998
</style>


