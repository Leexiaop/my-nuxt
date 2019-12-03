<template>
    <div class="me">
        <!-- <span v-for="(user,index) in userInfo" :key="index">{{user.name + user.age}}</span> -->
        <div>{{userInfo.name}}</div>
    </div>
</template>
<script>
import * as types from '~/assets/actions_types'

export default {
    async asyncData ({store}) {
        await store.dispatch(`user/${types.USERINFO}`)
    },
    computed: {
        userInfo () {
            return this.$store.getters[`user/${types.USERINFO}`]
        }
    }
}
</script>
<style lang="less" scoped>

</style>