import * as types from '~/assets/actions_types'
import api from '~/assets/api'
import axios from 'axios'
export const state = () => ({
    list: []
})

export const actions = {
    [types.PRODUCT_LIST]: async (context, param) => {
        const data = await api.getProduct()
        context.commit(`${types.PRODUCT_LIST}`, data)
    }
}

export const mutations = {
    [types.PRODUCT_LIST]: (state, data) => {
        return state.list = data
    }
}

export const getters = {
    [types.PRODUCT_LIST]: (state) => {
        return state.list
    }
}
