import {HOME_CASUAL, HOME_NAV} from './mutation-types'

export default {
    [HOME_CASUAL](state, {homecasual}) {
        state.homecasual = homecasual
    },
    // HOME_CASUAL: function(){}  等价于这种写法
    [HOME_NAV](state, {homenav}) {
        state.homenav = homenav
    }
}