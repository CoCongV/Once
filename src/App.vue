<template>
    <div id="app">
        <a-layout style="height: 100%">
            <side-bar></side-bar>
          <a-layout class="mainContent">
            <a-layout-header style="height: 35px; padding: 0px">
                <title-bar></title-bar>
            </a-layout-header>
            <a-layout-content></a-layout-content>
          </a-layout>
        </a-layout>
        <play-bar></play-bar>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleBar from '@/components/TitleBar.vue';
import SideBar from '@/components/SideBar.vue';
import PlayBar from '@/components/PlayBar.vue';
@Component({
    components: {
        TitleBar,
        SideBar,
        PlayBar
    }
})
export default class App extends Vue {
    public collapsed: boolean = true;
    get getHeight () {
        return window.outerHeight;
    }
}
</script>


<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
}
#footbar {
    padding: 25px 0;
}

</style>
