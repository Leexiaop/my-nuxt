import axios from 'axios'
export default {
    GET_USERINFO_ACTION: async (context) => {
        let { data } = await axios.get('http://localhost:3000/user')
        context.commit('USERINFO_MUTATION', data.data)
    }
}
