import Vue, {PluginFunction, PluginObject} from 'vue';
import { AxiosPromise } from 'axios';

import { Netease as _Netease } from './NeteaseSDK';
import { NeteaseAxios } from './axios';

declare module 'vue/types/vue' {
    interface Vue {
        netease: _Netease;
    }

    interface VueConstructor {
        netease: _Netease;
    }
}

declare class Netease {
    constructor(axios: NeteaseAxios);
    login(eamil: string, password: string, cookie: string): AxiosPromise;
    search(keywords: string, cookie: string, type: number, limit: number, offset: number): AxiosPromise;
}