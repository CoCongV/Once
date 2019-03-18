<template>
    <a-row type="flex" justify="start" :style="{lineHeight: '35px'}" id="titleBar">
        <a-col :span="1" :offset="21" class="icon" @click="minimize">
            <a-icon type="minus"/>
        </a-col>
        <a-col :span="1" class="icon" @click="isMax ? restore() : maximize()">
            <a-icon :type="isMax ? 'fullscreen-exit' : 'fullscreen'"/>
        </a-col>
        <a-col :span="1" @click="close" class="icon">
            <a-icon type="close"/>
        </a-col>
    </a-row>
</template>

<script lang="ts">
import { ipcRenderer } from "electron";
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class TitleBar extends Vue {
    protected collapsed: boolean = true;
    private isMax: boolean = false;
    private isSearch: boolean = false;
    private electron = require('electron');
    private maximize() {
        ipcRenderer.send('maximize');
        this.isMax = true;
    }
    private minimize() {
        ipcRenderer.send('minimize');
        // this.win.minimize();
        this.isMax = false;
    }
    private restore() {
        ipcRenderer.send('restore');
        this.isMax = false;
    }
    private close() {
        ipcRenderer.send('close');
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
