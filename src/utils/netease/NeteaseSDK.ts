import _Vue from 'vue';

import crypto from 'crypto';
import { NeteaseAxios } from './axios';


interface AccountInfo {
    id: number;
    userName: string;
    type: number;
    status: number;
    whitelistAuthority: number;
    createTime: number;
    salt: string;
    tokenVersion: number;
    ban: number;
    baoyueVersion: number;
    donateVersion: number;
    vipType: number;
    viptypeVersion: number;
    anonimousUser: boolean;
}

interface ProfileInfo {
    mutual: boolean;
    remarkName: null;
    defaultAvatar: string;
    avatarUrl: string;
    gender: number;
    birthday: number;
    city: number;
    accountStatus: number;
    nickname: string;
    authStatus: number;
    userId: number;
    expeortTags: null;
    avatarImgId: number;
    backgroundImgId: number;
    userType: number;
    vipType: number;
}

interface LoginResponse {
    loginType: number;
    code: number;
    account: AccountInfo;
    profile: ProfileInfo;
}

type Resposne = () => LoginResponse;

interface loginConfig {
    email: string;
    password: string;
    cookie: string;
}

interface searchConfig {
    keywords: string;
    cookie: string;
    type?: number;
    limit?: number;
    offset?: number;
}

interface playListHighqualityConfig {
    cat?: string;
    limit?: number;
    before?: number;
    cookie?: string;
}


export class Netease {
    public weapi = '/weapi';
    public linuxapi = '/linuxapi';

    public phoneLoginURL = '/login/cellphone';
    public emailLoginURL = '/login';
    public refreshLoginURL = '/login/refresh';
    public logoutURL = '/logout';
    public searchURL = '/search/get';
    public playlistHighqualityURL = '/playlist/highquality/list';

    private neteaseAxios: NeteaseAxios;
    constructor(neteaseAxios: NeteaseAxios) {
        this.neteaseAxios = neteaseAxios;
    }

    public login(config: loginConfig) {
        const data = {
            username: config.email,
            password: crypto.createHash('md5').update(config.password).digest('hex'),
            rememberLogin: 'true',
        };
        return this.neteaseAxios.axios(
            'POST', this.weapi + this.emailLoginURL, data,
            { 'crypto': 'weapi', 'ua': 'pc', 'cookie': config.cookie },
        );
    }
    public search(config: searchConfig) {
        const data = {
            's': config.keywords,
            'type': config.type || 1,
            'limit': config.limit || 30,
            'offset': config.offset || 0,
        };
        return this.neteaseAxios.axios(
            'POST', this.weapi + this.searchURL, data,
            { 'crypto': 'weapi', 'cookie': config.cookie },
        );
    }
    /**
     * topPlaylistHighquality
     */
    public playlistHighquality(config: playListHighqualityConfig) {
        const data = {
            cat: config.cat || '全部',
            limit: config.limit || 50,
            before: config.before || 0,
            total: true,
        }
        return this.neteaseAxios.axios(
            'POST', this.weapi + this.playlistHighqualityURL, data,
            {crypto: 'weapi', cookie: config.cookie}
        )
    }
}
