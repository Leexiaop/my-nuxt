import axios from 'axios'
export const state = () => ({
    list: []
})

export const actions = {
    prouctList: async (context, param) => {
        let { data } = await axios.get('http://localhost:3000/product')
        context.commit('productMutation', data.data)
    }
}

export const mutations = {
    productMutation: (state, data) => {
        return state.list = data
    }
}

export const getters = {
    listgetters: (state) => {
        return state.list
    }
}
