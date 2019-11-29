<template>
    <div class="index">
        <ul>
            <li v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
import * as types from '~/assets/actions_types'

export default {
    async asyncData ({store}) {
        await store.dispatch(`${types.PRODUCT_LIST}`)
    },
    computed: {
        list () {
            return [...this.$store.getters[`${types.PRODUCT_LIST}`]]

        }
    }
}
</script>
<style lang="less" scoped>

</style>