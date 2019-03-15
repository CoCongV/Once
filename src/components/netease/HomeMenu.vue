<template>
    <a-menu v-model="current" mode="horizontal" style="background-color: white; color: black">
        <a-menu-item key="remommend">个性推荐</a-menu-item>
        <a-menu-item key="songList">歌单</a-menu-item>
        <a-menu-item key="radio">电台</a-menu-item>
        <a-menu-item key="leaderBorad">排行榜</a-menu-item>
        <a-menu-item key="singer">歌手</a-menu-item>
        <a-menu-item key="newSong">最新音乐</a-menu-item>
    </a-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class HomeMenu extends Vue {
    public current = ['remommend'];
}
</script>


