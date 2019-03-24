<template>
    <a-card hoverable :style="{height: '200px', overflow: 'hidden'}">
        <img :src="src" slot="cover">
        <a-card-meta :description="title">
        </a-card-meta>
    </a-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    props: {
        alt: String,
        src: String,
        title: String,
    }
})
export default class SongListCard extends Vue {
    public height = '200px';
    get getHeight () {
        return this.height;
    }
}
</script>