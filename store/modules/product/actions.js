import axios from 'axios'
export default {
    GET_PRODUCT_LIST_ACTION: async (context) => {
        let { data } = await axios.get('http://localhost:3000/product')
        context.commit('PRODUCT_LIST_MUTATION', data.data)
    }
}
