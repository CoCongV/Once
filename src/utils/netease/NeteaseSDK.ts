import _Vue from 'vue';
import crypto from 'crypto';

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


class Netease {
    public baseUrl = 'https://music.163.com';
    public weapi = '/weapi';
    public linuxapi = '/linuxapi';

    public phoneLoginUrl = '/login/cellphone';
    public emailLoginUrl = '/login';
    public refreshLoginUrl = '/login/refresh';
    public logoutUrl = '/logout';
    public searchUrl = '/search/get';

    private request: any;
    constructor(request: any) {
        this.request = request;
    }

    public login(eamil: string, password: string, cookie: string) {
        const data = {
            username: eamil,
            password: crypto.createHash('md5').update(password).digest('hex'),
            rememberLogin: 'true',
        };
        return this.request(
            'POST', this.baseUrl + this.weapi + this.emailLoginUrl, data,
            { 'crypto': 'weapi', 'ua': 'pc', 'cookie': cookie },
        );
    }
    public search(keywords: string, cookie: string, type: number = 1, limit: number = 30, offset: number = 0) {
        const data = {
            's': keywords,
            'type': type,
            'limit': limit,
            'offset': offset,
        };
        return this.request(
            'POST', this.baseUrl + this.weapi + this.searchUrl, data,
            {'crypto': 'weapi', 'cookie': cookie},
        );
    }
}


export default {
    install(Vue: any, request: any) {
        Vue.prototype.netease = new Netease(request);
    },
};

