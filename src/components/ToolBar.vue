<template>
    <v-toolbar :color="color" dark height="50px" class="titleBar">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <div class="title">
            <v-toolbar-title>Listening</v-toolbar-title>
        </div>
        <v-btn icon>
            <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>settings</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>swap_horiz</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>remove</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>crop_square</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>close</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class ToolBar extends Vue {
    public mode: string = '网易云音乐';
    private color: string = '#C20C0C';
}
</script>

<style>
.title {
    margin: 0 20px;
}
.titleBar {
    border-color: #a40011;
}
.titleBarButton {
    border-left: 1px solid #a40011;
}
</style>
