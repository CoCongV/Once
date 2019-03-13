<template>
    <a-row type="flex" justify="start" :style="{lineHeight: '35px'}" id="titleBar">
        <a-col :span="1" class="icon" @click="toggleSide">
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'"></a-icon>
        </a-col>
        <a-col :span="1" :offset="20" class="icon" @click="minimize">
            <a-icon type="minus"/>
        </a-col>
        <a-col :span="1" class="icon" @click="isMax ? unmaximize() : maximize()">
            <a-icon :type="isMax ? 'fullscreen-exit' : 'fullscreen'"/>
        </a-col>
        <a-col :span="1" @click="close" class="icon">
            <a-icon type="close"/>
        </a-col>
    </a-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class TitleBar extends Vue {
    protected collapsed: boolean = true;
    private isMax: boolean = false;
    private isSearch: boolean = false;
    private electron = require('electron');
    private win = this.electron.remote.getCurrentWindow();
    private maximize() {
        this.win.maximize();
        this.isMax = true;
    }
    private minimize() {
        this.win.minimize();
        this.isMax = false;
    }
    private unmaximize() {
        this.win.unmaximize();
        this.isMax = false;
    }
    private close() {
        this.win.close();
    }
    private toggleSide() {
        this.collapsed = !this.collapsed;
        this.$emit('toggleSide');
    }
}
</script>

<style>
#titleBar {
    -webkit-app-region: drag;
}
#titleBar .icon {
    -webkit-app-region: no-drag;
}
#titleBar .icon:hover {
    color: #1890ff;
}
</style>
