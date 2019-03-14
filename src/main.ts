import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import { CreateRequest as request } from '@/utils/netease/request';
// import {createRequest as request} from '@/utils/netease/request.js';
import Netease from '@/utils/netease/NeteaseSDK';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.prototype.request = request;
Vue.use(Netease, request);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
