import axios from 'axios';

import { NeteaseAxios } from './axios';
import { Netease } from './NeteaseSDK';

export interface Options {
    ua?: string;
    cookie?: any;
    crypto?: string;
}

export interface Headers {
    'Access-Control-Allow-Origin'?: string;
    'Access-Control-Allow-Methods'?: string;
    'Access-Control-Allow-Headers'?: string;
    'Content-Type'?: string;
    'User-Agent'?: string | null;
    Cookie?: any;
    Referer?: string;
}

export default {
    install(Vue: any) {
        /**
         * Install plugin
         * @param Vue
         */
        const axiosInstance = axios.create({
            baseURL: 'https://music.163.com',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'x-requested-with,content-type',
            },
        })
        const neteaseAxios = new NeteaseAxios(axiosInstance);
        const netease = new Netease(neteaseAxios);

        Vue.netease = netease;
        
        Object.defineProperties(
            Vue.prototype,
            {
                netease: {
                    get() {
                        return netease;
                    }
                }
            }
        )
    }
}