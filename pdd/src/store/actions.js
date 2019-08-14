import {getHomeCasual, getHomeNav, getRecommend, getSearch} from '../api/index'
import {HOME_CASUAL, HOME_NAV, RECOMMEND, SEARCH} from './mutation-types'

export default {
    // 获取首页轮播图
    async reqHomeCasual({commit}) {
        const result = await getHomeCasual()
        commit(HOME_CASUAL, {homecasual: result.message})
    },
    async reqHomeNav({commit}) {
        const result = await getHomeNav()
        commit(HOME_NAV, {homenav: result.message})
    },
    async reqRecommend({commit}) {
        const result = await getRecommend()
        commit(RECOMMEND, {recommend: result.data})
    },
    async reqSearch({commit}, callback) {
        const result = await getSearch()
        commit(SEARCH, {search: result.data})

        callback && callback() // 第二种方式，防止数据还没拿到前就初始化了swiper、scroll之类的插件导致不起作用
    }
}