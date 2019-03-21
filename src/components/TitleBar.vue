<template>
    <a-row type="flex" justify="end" :style="{lineHeight: '35px'}" id="titleBar">
        <button class="minimize" @click="minimize"></button>
        <button :class="isMax ? 'restore' : 'maximize'" @click="isMax ? restore() : maximize()"></button>
        <button class="close" @click="close"></button>
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
    private maximize() {
        ipcRenderer.send('maximize');
        this.isMax = true;
    }
    private minimize() {
        ipcRenderer.send('minimize');
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
</style>
