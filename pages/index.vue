<template>
    <div class="index">
        <div v-for="(item, index) in GET_PRODUCT_LIST_DATA" :key="index">{{item}}</div>
    </div>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            GET_PRODUCT_LIST_DATA: []
        }
    },
    async asyncData ({store, param}) {
    //   await store.dispatch('GET_PRODUCT_LIST_ACTION')
    },
    // mounted () {
    //     this.$store.dispatch('add')
    // },
    // async fetch({store, param}) {
    //    await store.dispatch('add')
    // },
    computed: {
        // ...mapGetters([
        //   'GET_PRODUCT_LIST_DATA'
        // ])
    }
}
</script>
<style lang="less" scoped>

</style>