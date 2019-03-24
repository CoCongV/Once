<template>
    <div class="SongListCard">
        <a-card hoverable>
            <img :src="src" slot="cover">
        </a-card>
        <div class="title">{{title}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    props: {
        src: String,
        title: String,
    }
})
export default class SongListCard extends Vue {}
</script>

<style>
.SongListCard {
    height: 200px;
}
.title {
    overflow: hidden;
    font-weight: bold;
    color: black;
    font-size: 14px;
    text-align: start;
}
</style>
