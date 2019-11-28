<template>
    <div class="buy">
        <div>
            <ul>
                <li v-for="(product, index) in productList" :key="index">{{product}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {}
    },
    async fetch({store, params}) {
        store.dispatch('addlist')
    },
    computed: {
        ...mapGetters([
            'productList'
        ])
    }
}
</script>
<style lang="less" scoped>

</style>