<template>
    <div class="buy">
        <div>
            <ul>
                <li v-for="(product, index) in GET_PRODUCT_LIST_DATA" :key="index">{{product}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            GET_PRODUCT_LIST_DATA: []
        }
    },
    async fetch({store, params}) {
        // store.dispatch('GET_PRODUCT_LIST_ACTION')
    },
    computed: {
        // ...mapGetters([
        //     'GET_PRODUCT_LIST_DATA'
        // ])
    }
}
</script>
<style lang="less" scoped>

</style>