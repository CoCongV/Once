<template>
    <a-layout style="height: 100%">
        <a-layout-header style="padding: 0 30px; height: 84px;">
            <home-menu></home-menu>
        </a-layout-header>
        <a-layout-content style="padding: 0 30px; overflow: scroll">
            <router-view></router-view>
        </a-layout-content>
    </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeMenu from '@/components/netease/HomeMenu.vue';

@Component({
    components: {
        HomeMenu,
    },
})
export default class Home extends Vue {}
</script>
