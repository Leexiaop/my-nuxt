import http from './http'
import url from './url'

export default {
    getProduct: (param) => {
        return http.get(url.product, param)
    },
    getProductList: (param) => {
        return http.get(url.productList, param)
    },
    getUser: (param) => {
        return http.get(url.user, param)
    }
}