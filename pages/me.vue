<template>
    <div class="me">
        <div class="me">{{'姓名:' + GET_USERINFO_DATA.name + '年龄:' + GET_USERINFO_DATA.age}}</div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    async asyncData ({store, param}) {
        await store.dispatch('GET_USERINFO_ACTION')
    },
    computed: {
        ...mapGetters([
          'GET_USERINFO_DATA'
        ])
    }
}
</script>
<style lang="less" scoped>

</style>