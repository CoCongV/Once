import axios from 'axios';

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
    phoneLoginApi:string = '/login/cellphone';
    emailLoginApi:string = '/login';
    refreshLoginApi:string = '/login/refresh';
    logoutApi:string = '/logout';
    phoneLogin (phone: string, password: string) {
        axios.get<LoginResponse>(this.phoneLoginApi, {
            params: {
                phone: phone,
                password: password
            }
        }).then((response) => {
            return response
        })
    }
}

export var netease = new Netease();