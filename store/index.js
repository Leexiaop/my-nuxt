import * as types from '~/assets/actions_types'
import api from '~/assets/api'
export const state = () => ({
    list: []
})

export const actions = {
    async [types.PRODUCT_LIST] (context, param = {}) {
        const { data } = await api.getProduct(param)
        context.commit(types.PRODUCT_LIST, data.data)
    }
}

export const mutations = {
    [types.PRODUCT_LIST] (state, data = {}) {
        return state.list = data
    }
} 

export const getters = {
    [types.PRODUCT_LIST] (state) {
        return state.list
    }
}
