<template>
    <div id="app">
        <a-layout id="mainLayout">
            <a-layout-sider
                :trigger="null"
                collapsible
                v-model="collapsed"
                :style="{height: getHeight}"
            >
                <side-bar :collapsed="collapsed"></side-bar>
            </a-layout-sider>
            <a-layout style="outflow: scroll">
                <a-layout-header style="background: #fff; padding: 0; height: 35px">
                    <title-bar @toggleSide="toggleSide"></title-bar>
                </a-layout-header>
                <a-layout-content>
                    <router-view></router-view>
                </a-layout-content>
                <a-layout-footer id="footbar">
                    <footer-bar class="PlayerNavigation"></footer-bar>
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
        FooterBar
    }
})
export default class App extends Vue {
    public collapsed: boolean = true;
    get getHeight () {
        return window.outerHeight;
    }
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
#footbar {
    padding: 25px 0;
}

</style>
