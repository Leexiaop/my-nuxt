<template>
    <div class="play">
        <div>
            <ul>
                <li v-for="(item, index) in list" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { async } from 'q'
export default {
    data () {
        return {}
    },
    async asyncData ({store}) {
        await store.dispatch('play/prouctList')
    },
    computed: {
        list() {
            return [...this.$store.getters['play/listgetters']]
        }
    }
}
</script>
<style lang="less" scoped>

</style>