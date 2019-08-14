<template>
  <div class="recommend">
    <ul class="recommend-ul" v-if="recommend.length > 0">
      <!--
      <li class="recommend-item" v-for="(item, index) in recommend" :key="index">
        <img :src="item.thumb_url" alt="" />
        <h4 class="item-title">{{ item.short_name }}</h4>
        <div class="item-bottom">
          <span class="item-price">￥{{ item.price / 100 }}</span>
          <span class="item-tips">{{ item.sales_tip }}</span>
          <button class="item-btn">找相关</button>
        </div>
      </li>
      -->
      <shop-list v-for="(item, index) in recommend" :key="index" :item=item tag="li"/>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShopList from './../../components/ShopList/ShopList.vue'

export default {
  mounted() {
    this.$store.dispatch('reqRecommend')
  },
  computed: {
    ...mapState(['recommend'])
  },
  components: {
    ShopList
  }
};
</script>

<style lang="stylus" scoped>
.recommend
  width 100%
  height 100%
  margin-bottom 50px
  background-color #f5f5f5
  .recommend-ul
    display flex
    flex-direction row
    flex-wrap wrap
</style>
