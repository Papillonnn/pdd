import ajax from './ajax'

// 基础路径
const BASE_URL = 'http://localhost:3000/api/'
// 请求方法
export const getHomeCasual = () => ajax(BASE_URL + 'homecasual')

export const getHomeNav = () => ajax(BASE_URL + 'homenav')

export const getRecommend = () => ajax(BASE_URL + 'recommend')

export const getSearch = () => ajax(BASE_URL + 'search')
