<template>
    <div id="app">
        <a-layout id="mainLayout">
            <a-layout-sider :trigger="null" collapsible v-model="collapsed">
                <side-bar :collapsed="collapsed"></side-bar>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0; height: 35px">
                    <title-bar @toggleSide="toggleSide"></title-bar>
                </a-layout-header>
                <a-layout-content
                    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
                >Content</a-layout-content>
                <a-layout-footer></a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleBar from '@/components/TitleBar.vue';
import SideBar from '@/components/SideBar.vue';
@Component({
    components: {
        TitleBar,
        SideBar,
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
    color: #2c3e50;
    height: 100%;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
#mainLayout {
    height: 100%;
}
#mainLayout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .4s;
}
</style>
