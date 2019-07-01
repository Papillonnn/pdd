<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="tab-bar">
      <tab-bar></tab-bar>
    </div>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    TabBar
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
#app 
  width 100%
  height 100%
  background-color #f5f5f5
</style>
