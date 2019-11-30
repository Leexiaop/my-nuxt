import * as types from '~/assets/actions_types'
// import api from '~/'
export const state = () => ({
    list: []
})

export const actions = {
    [types.PRODUCT_LIST]: async (context, param) => {
        context.commit(`${types.PRODUCT_LIST}`, ['1', '2', '23'])
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
