import * as types from '~/assets/actions_types'
import api from '~/assets/api'

export const state = () =>({
    userInfo: {}
})

export const actions = {
    async [types.USERINFO] (context, param = {}) {
        const { data } =  await api.getUser(param)
        context.commit(types.USERINFO, data.data)
    }
}

export const mutations = {
    [types.USERINFO] (state, data = {}) {
        return state.userInfo = data
    }
}

export const getters = {
    [types.USERINFO] (state) {
        return state.userInfo
    }
}
