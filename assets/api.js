import http from './http'
import url from './urls'
import axios from 'axios'
export default {
    getProduct: (param = {}) => {
        return http.get(url.product, { params: param })
    },
    getProductList: (param = {}) => {
        return http.get(url.productList, { params: param })
    },
    getUser: (param = {}) => {
        return http.get(url.user, { params: param })
    }
}