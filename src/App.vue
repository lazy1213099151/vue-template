<script lang="ts">
import Vue from 'vue';
import { update } from '@/utils/update';
import { computerNavigation } from './utils/base';
export default Vue.extend({
    mpType: 'app',
    onLaunch() {
        this.$store.commit('navStyle/setNavStyle', computerNavigation())
    },
    onShow() {
        update()
    },
    onHide() {
    }
});
</script>

<style>
/*每个页面公共css */
@import '@/assets/styles/global.scss';
</style>
