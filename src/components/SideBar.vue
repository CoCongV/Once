<template>
    <a-layout-sider collapsible v-model="collapsed" :trigger="null" id="sidebar">
        <div class="return">
            <a-icon type="arrow-left"/>
        </div>
        <div class="sideTrigger" @click="collapsed = !collapsed">
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'"></a-icon>
        </div>
        <a-menu mode="inline" :defaultSelectedKeys="['1']" class="sideMenu">
            <a-menu-item key="1" @click="$router.push({name: 'netease'})">
                <a-icon type="fire"/>
                <span>发现</span>
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="search"/>
                <span>搜索</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="customer-service"/>
                <span>我的音乐</span>
            </a-menu-item>
            <a-sub-menu mode="inline" v-show="!collapsed" key="4">
                <span slot="title">
                    <a-icon type="ordered-list"/>
                    <span>创建的歌单</span>
                </span>
                <a-menu-item-group key="g1">
                    <template slot="title">
                        <a-icon type="qq"/>
                        <span>QQ</span>
                    </template>
                    <a-menu-item key="4-1">我喜欢的音乐</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g2">
                    <template slot="title">
                        <span>网易</span>
                    </template>
                    <a-menu-item key="4-2">我喜欢的音乐</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu mode="inline" v-show="!collapsed" key="5">
                <span slot="title">
                    <a-icon type="heart"></a-icon>
                    <span>收藏的歌单</span>
                </span>
                <a-menu-item-group key="g1">
                    <template slot="title">
                        <a-icon type="qq"/>
                        <span>QQ</span>
                    </template>
                    <a-menu-item key="5-1">我喜欢的音乐</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g2">
                    <template slot="title">
                        <span>网易</span>
                    </template>
                    <a-menu-item key="5-2">我喜欢的音乐</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-menu-item key="6" @click="$router.push({name: 'user'})">
                <a-icon type="user"/>
                <span>用户</span>
            </a-menu-item>
            <a-menu-item key="7">
                <a-icon type="setting"/>
                <span>设置</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SideBar extends Vue {
    // @Prop() public collapsed: any;
    public collapsed = true;
}
</script>

<style scoped>
.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
.sideTrigger {
    height: 35px;
    line-height: 35px;
}
</style>
