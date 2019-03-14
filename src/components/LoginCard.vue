<template>
    <a-row>
        <a-col :xs="10" :lg="6" v-show="mode">
            <a-card
                :tabList="tabListNoTitle"
                :activeTabKey="noTitleKey"
                @tabChange="key => onTabChange(key)"
            >
                <div v-if="noTitleKey === 'netease'">
                    <a-input-group compact>
                        <a-select defaultValue="email">
                            <a-select-option value="email">邮箱</a-select-option>
                            <a-select-option value="phone">手机</a-select-option>
                        </a-select>
                        <a-input
                            placeholder="邮箱"
                            v-model="userName"
                            ref="neteaseUsernameInput"
                            style="width: 200px"
                        >
                            <a-icon slot="prefix" type="user"></a-icon>
                            <a-icon
                                v-if="userName"
                                slot="suffix"
                                type="close-circle"
                                @click="clear"
                            ></a-icon>
                        </a-input>
                    </a-input-group>
                    <br />
                    <a-input
                        placehodler="密码"
                        v-model="password"
                        ref="neteasePasswordInput"
                        style="width: 272px"
                        type="password"
                    >
                        <a-icon slot="prefix" type="eye-invisible"></a-icon>
                    </a-input>
                </div>
                <p v-else-if="noTitleKey === 'QQ'">QQ</p>
            </a-card>
        </a-col>
    </a-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class LoginCard extends Vue {
    private mode: boolean = true;
    private tabListNoTitle = [
        {
            key: 'netease',
            tab: '网易'
        },
        {
            key: 'QQ',
            tab: 'QQ'
        }
    ];
    private noTitleKey: string = 'netease';
    private userName: string = '';
    private password: string = '';
    private onTabChange(key: string) {
        this.noTitleKey = key;
    }
    private clear() {
        this.userName = '';
    }
}
</script>
