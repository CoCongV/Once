<template>
    <a-row>
        <a-col :xs="10" :lg="6" v-show="mode">
            <a-card
                :tabList="tabListNoTitle"
                :activeTabKey="titleKey"
                @tabChange="key => onTabChange(key)"
            >
                <div v-if="titleKey === 'netease'">
                    <a-input placeholder="邮箱、手机" v-model="userName" ref="neteaseUsernameInput">
                        <a-icon slot="prefix" type="user"></a-icon>
                        <a-icon v-if="userName" slot="suffix" type="close-circle" @click="clear"></a-icon>
                    </a-input>
                    <br>
                    <br>
                    <a-input
                        placehodler="密码"
                        v-model="password"
                        ref="neteasePasswordInput"
                        type="password"
                    >
                        <a-icon slot="prefix" type="eye-invisible"></a-icon>
                    </a-input>
                </div>
                <p v-else-if="titleKey === 'QQ'">QQ</p>
                <template class="ant-card-actions" slot="actions">
                    <a-button type="primary" @click="login">登录</a-button>
                </template>
            </a-card>
        </a-col>
    </a-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
@Component
export default class LoginCard extends Vue {
    private mode: boolean = true;
    private tabListNoTitle = [
        {
            key: 'netease',
            tab: '网易',
        },
        {
            key: 'QQ',
            tab: 'QQ',
        },
    ];
    private titleKey: string = 'netease';
    private userName: string = '';
    private password: string = '';
    private onTabChange(key: string) {
        this.titleKey = key;
    }
    private clear() {
        this.userName = '';
    }
    private login() {
        console.log(this.axios)
        // this.netease.search(this.userName).then((response) => {
        //     console.log(response);
        // }).catch((error) => {
        //     console.log(error);
        // })
    }
}
</script>
