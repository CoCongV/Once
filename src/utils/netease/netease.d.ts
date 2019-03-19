import Vue from 'vue';
import { Netease } from './NeteaseSDK'

declare module 'vue/types/vue' {
    interface Vue {
        netease: Netease;
    }
}