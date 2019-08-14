<template>
  <li class="recommend-item">
    <img :src="item.thumb_url" alt="" />
    <h4 class="item-title">{{ item.short_name }}</h4>
    <div class="item-bottom">
      <span class="item-price">￥{{ item.price / 100 }}</span>
      <span class="item-tips">{{ item.sales_tip }}</span>
      <button class="item-btn" v-if="true">找相关</button>
      <span class="item-user" v-else>
        <img src="" alt="">
        <img src="" alt="">
      </span>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      name: 'ShopList',
      item: Object
    }
  }
</script>

<style lang="stylus" scoped>
  .recommend-item:nth-child(2n-1)
    margin-right 1%
  .recommend-item
    width 49.5%
    padding-bottom 15px
    margin-bottom 15px
    background-color #fff
    img
      width 100%
    .item-title
      margin 5px 0
      padding 0 5px
      line-height 20px
      font-size 13px
      font-weight lighter
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .item-bottom
      display flex
      flex-direction row
      align-items center
      padding 0 6px
      .item-price
        flex 2
        color red
        font-weight bolder
        font-size 12px
      .item-tips
        flex 4
        font-size 10px
        color #666
      .item-btn
        flex 2
        border 1px solid orangered
        border-radius 5px
        height 22px
        color red
        font-size 10px
        background-color transparent
      .item-user
        img
          width 30px
          border-radius 50%
        img:nth-child(2)
          margin-right -6px
</style>
