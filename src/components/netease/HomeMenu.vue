<template>
    <div>
        <a-row justify="start" type="flex" class="navigation">
            <h1>Netease</h1>
        </a-row>
        <a-menu v-model="current" mode="horizontal">
            <a-menu-item key="remommend">个性推荐</a-menu-item>
            <a-menu-item key="songList">歌单</a-menu-item>
            <a-menu-item key="radio">电台</a-menu-item>
            <a-menu-item key="leaderBorad">排行榜</a-menu-item>
            <a-menu-item key="singer">歌手</a-menu-item>
            <a-menu-item key="newSong">最新音乐</a-menu-item>
        </a-menu>
    </div>
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

<style>
.navigation {
    height: 36px;
    line-height: 36px;
}
</style>

