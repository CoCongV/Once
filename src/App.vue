<template>
    <div id="app">
        <a-layout id="mainLayout">
            <a-layout-sider :trigger="null" collapsible v-model="collapsed" style="background: #EEA2A4">
                <side-bar :collapsed="collapsed"></side-bar>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0; height: 35px">
                    <title-bar @toggleSide="toggleSide"></title-bar>
                </a-layout-header>
                <a-layout-content
                    :style="{background: '#fff', minHeight: '280px' }"
                >
                    <router-view></router-view>
                </a-layout-content>
                <a-layout-footer style="padding: 24px 0;">
                    <footer-bar></footer-bar>
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleBar from '@/components/TitleBar.vue';
import SideBar from '@/components/SideBar.vue';
import FooterBar from '@/components/FooterBar.vue';
@Component({
    components: {
        TitleBar,
        SideBar,
        FooterBar,
    },
})
export default class App extends Vue {
    public collapsed: boolean = true;
    private toggleSide() {
        this.collapsed = !this.collapsed;
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
#mainLayout {
    height: 100%;
}
</style>
