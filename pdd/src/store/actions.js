import {getHomeCasual, getHomeNav} from '../api/index'
import {HOME_CASUAL, HOME_NAV} from './mutation-types'

export default {
    // 获取首页轮播图
    async reqHomeCasual({commit}) {
        const result = await getHomeCasual()
        commit(HOME_CASUAL, {homecasual: result.data})
    },
    async reqHomeNav({commit}) {
        const result = await getHomeNav()
        commit(HOME_NAV, {homenav: result.data})
    }
}