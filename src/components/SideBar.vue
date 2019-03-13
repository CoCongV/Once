<template>
    <div>
        <div class="logo"></div>
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
            <a-menu-item key="1">
                <a-icon type="user"/>
                <span>用户</span>
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="search"/>
                <span>搜索</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="fire"/>
                <span>发现</span>
            </a-menu-item>
            <a-menu-item key="4">
                <a-icon type="customer-service"/>
                <span>我的音乐</span>
            </a-menu-item>
            <a-menu-item key="5" v-show="!collapsed">
                <a-icon type="ordered-list"/>
                <span>创建的歌单</span>
            </a-menu-item>
            <a-menu-item key="6" v-show="!collapsed">
                <a-icon type="heart"/>
                <span>收藏的歌单</span>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SideBar extends Vue {
    @Prop() public collapsed: any;
}
</script>

<style scoped>
.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
</style>


