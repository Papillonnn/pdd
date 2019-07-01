import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Recommend from '../pages/Recommend/Recommend'
import Search from '../pages/Search/Search'
import Chat from '../pages/Chat/Chat'
import Me from '../pages/Me/Me'

// 首页二级路由
import Hot from '../pages/Home/Children/Hot/Hot'
import Dress from '../pages/Home/Children/Dress'
import Box from '../pages/Home/Children/Box'
import Mbaby from '../pages/Home/Children/Mbaby'
import General from '../pages/Home/Children/General'
import Food from '../pages/Home/Children/Food'
import Shirt from '../pages/Home/Children/Shirt'
import Man from '../pages/Home/Children/Man'
import Ele from '../pages/Home/Children/Ele'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        { path: 'hot', component: Hot },
        { path: 'dress', component: Dress },
        { path: 'box', component: Box },
        { path: 'mbaby', component: Mbaby },
        { path: 'general', component: General },
        { path: 'food', component: Food },
        { path: 'shirt', component: Shirt },
        { path: 'man', component: Man },
        { path: 'ele', component: Ele },
        { path: '/home', redirect: '/home/hot' }
      ]
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
