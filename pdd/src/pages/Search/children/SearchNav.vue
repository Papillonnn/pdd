<template>
	<div class="search-nav">
		<a href="javascript:void(0)" class="search-nav-btn" @click.prevent="isShowSearchPanel(true)">
      <img src="./../images/search.png" alt="">
      <span>纸巾三折起</span>
    </a>
	</div>
</template>

<script>
export default {
  props: {
    isShowSearchPanel: Function
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../common/stylus/mixins.styl'

.search-nav
  position fixed
  top 0
  left 0
  display flex
  justify-content center
  align-items center
  z-idnex 999
  width 100%
  height 60px
  border-bottom-1px(#ccc)
  .search-nav-btn
    display flex
    justify-content center
    align-items center
    width 90%
    height 60%
    border-radius 8px
    background-color #e8e8e8
    img 
      width 20px
    span 
      margin-left 6px
      font-size 16px
      color #666
</style>
