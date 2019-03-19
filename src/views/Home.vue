<template>
    <span>HOME</span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeMenu from '@/components/netease/HomeMenu.vue';

@Component({
    components: {
        HomeMenu,
    },
})
export default class Home extends Vue {
    public current = ['remommend'];
    public playlists = [{'name': '每日推荐'}];
    mounted () {
        this.netease.playlistHighquality({}).then((response: any) => {
            this.playlists.push(...response.data.playlists);
        })
    }
    
}
</script>
