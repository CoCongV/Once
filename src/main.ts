import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import '@/assets/css/base.css';

import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

import Netease from '@/utils/netease';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(Netease);

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
