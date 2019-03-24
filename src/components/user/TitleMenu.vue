<template>
    <div class="title">
        <a-row class="titleName">
            <a-col :span="4" class="titleCol">
                <span>登入信息</span>
            </a-col>
        </a-row>
        <a-row class="titleMenu">
            <a-col :span="2" class="titleCol">
                <button>Netease</button>
            </a-col>
            <a-col :span="2" class="titleCol">
                <button>QQ</button>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class TitleMenu extends Vue {
    public current = ['Netease'];
}
</script>

<style>
.title {
    height: 64px;
    border-bottom: 1px solid grey;
}
.titleName {
    height: 32px;
    line-height: 32px;
}
.titleMenu {
    height: 32px;
}
.titleMenu button {
    height: 32px;
    line-height: 32px;
}
.titleCol {
    height: 32px;
}
</style>

