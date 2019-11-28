
import product from './modules/product/index'
import user from './modules/user/index'
export const state = () => ({
    productList: product.state.productList,
    userInfo: user.state.userInfo
})

export const mutations = {
    PRODUCT_LIST_MUTATION: product.mutations.PRODUCT_LIST_MUTATION,
    USERINFO_MUTATION: user.mutations.USERINFO_MUTATION
}

export const actions = {
    GET_PRODUCT_LIST_ACTION: product.actions.GET_PRODUCT_LIST_ACTION,
    GET_USERINFO_ACTION: user.actions.GET_USERINFO_ACTION
}

export const getters = {
    GET_PRODUCT_LIST_DATA: product.getters.GET_PRODUCT_LIST_DATA,
    GET_USERINFO_DATA: user.getters.GET_USERINFO_DATA
}
