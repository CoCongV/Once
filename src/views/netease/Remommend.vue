<template>
    <a-row :gutter="24">
      <a-col :span="4" v-for="list in playlists" :key="playlists.indexOf(list)" style="padding-top: 20px;">
          <song-list-card :src="list.coverImgUrl" :title="list.name"></song-list-card>
      </a-col>
    </a-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import songListCard from '@/components/netease/SongListCard.vue';

@Component({
    components: {
        songListCard,
    },
})
export default class HomeMenu extends Vue {
    public playlists = [{'name': '每日推荐'}];
    mounted () {
        this.netease.playlistHighquality({limit: 30}).then((response: any) => {
            this.playlists.push(...response.data.playlists);
        })
    }
}
</script>

